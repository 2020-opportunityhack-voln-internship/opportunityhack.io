'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

function _interopNamespace(e) {
    if (e && e.__esModule) { return e; } else {
        var n = {};
        if (e) {
            Object.keys(e).forEach(function (k) {
                var d = Object.getOwnPropertyDescriptor(e, k);
                Object.defineProperty(n, k, d.get ? d : {
                    enumerable: true,
                    get: function () {
                        return e[k];
                    }
                });
            });
        }
        n['default'] = e;
        return n;
    }
}

const graphql = require('graphql');
const utils = require('@graphql-tools/utils');
const validUrl = require('valid-url');
const crossFetch = require('cross-fetch');
const wrap = require('@graphql-tools/wrap');
const subscriptionsTransportWs = require('subscriptions-transport-ws');
const websocket = require('websocket');

class UrlLoader {
    loaderId() {
        return 'url';
    }
    async canLoad(pointer, options) {
        return this.canLoadSync(pointer, options);
    }
    canLoadSync(pointer, _options) {
        return !!validUrl.isWebUri(pointer);
    }
    async load(pointer, options) {
        let headers = {};
        let fetch = crossFetch.fetch;
        let defaultMethod = 'POST';
        let webSocketImpl = websocket.w3cwebsocket;
        if (options) {
            if (Array.isArray(options.headers)) {
                headers = options.headers.reduce((prev, v) => ({ ...prev, ...v }), {});
            }
            else if (typeof options.headers === 'object') {
                headers = options.headers;
            }
            if (options.customFetch) {
                if (typeof options.customFetch === 'string') {
                    const [moduleName, fetchFnName] = options.customFetch.split('#');
                    fetch = await new Promise(function (resolve) { resolve(_interopNamespace(require(moduleName))); }).then(module => (fetchFnName ? module[fetchFnName] : module));
                }
            }
            if (options.webSocketImpl) {
                if (typeof options.webSocketImpl === 'string') {
                    const [moduleName, webSocketImplName] = options.webSocketImpl.split('#');
                    webSocketImpl = await new Promise(function (resolve) { resolve(_interopNamespace(require(moduleName))); }).then(module => webSocketImplName ? module[webSocketImplName] : module);
                }
            }
            if (options.method) {
                defaultMethod = options.method;
            }
        }
        const extraHeaders = {
            Accept: 'application/json',
            'Content-Type': 'application/json',
            ...headers,
        };
        const HTTP_URL = pointer.replace('ws:', 'http:').replace('wss:', 'https:');
        const executor = async ({ document, variables, info, }) => {
            let method = defaultMethod;
            if (options.useGETForQueries && info.operation.operation === 'query') {
                method = 'GET';
            }
            const fetchResult = await fetch(HTTP_URL, {
                method,
                ...(method === 'POST'
                    ? {
                        body: JSON.stringify({ query: graphql.print(document), variables }),
                    }
                    : {}),
                headers: extraHeaders,
            });
            return fetchResult.json();
        };
        const schema = await wrap.introspectSchema(executor);
        const remoteExecutableSchemaOptions = {
            schema,
            executor,
        };
        if (options.enableSubscriptions) {
            const WS_URL = pointer.replace('http:', 'ws:').replace('https:', 'wss:');
            const subscriptionClient = new subscriptionsTransportWs.SubscriptionClient(WS_URL, {}, webSocketImpl);
            remoteExecutableSchemaOptions.subscriber = async ({ document, variables, }) => {
                return utils.observableToAsyncIterable(subscriptionClient.request({
                    query: document,
                    variables,
                }));
            };
        }
        const remoteExecutableSchema = wrap.makeRemoteExecutableSchema(remoteExecutableSchemaOptions);
        return {
            location: pointer,
            schema: remoteExecutableSchema,
        };
    }
    loadSync() {
        throw new Error('Loader Url has no sync mode');
    }
}

exports.UrlLoader = UrlLoader;
//# sourceMappingURL=index.cjs.js.map
