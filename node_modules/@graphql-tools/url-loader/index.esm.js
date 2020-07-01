import { print } from 'graphql';
import { observableToAsyncIterable } from '@graphql-tools/utils';
import { isWebUri } from 'valid-url';
import { fetch } from 'cross-fetch';
import { introspectSchema, makeRemoteExecutableSchema } from '@graphql-tools/wrap';
import { SubscriptionClient } from 'subscriptions-transport-ws';
import { w3cwebsocket } from 'websocket';

class UrlLoader {
    loaderId() {
        return 'url';
    }
    async canLoad(pointer, options) {
        return this.canLoadSync(pointer, options);
    }
    canLoadSync(pointer, _options) {
        return !!isWebUri(pointer);
    }
    async load(pointer, options) {
        let headers = {};
        let fetch$1 = fetch;
        let defaultMethod = 'POST';
        let webSocketImpl = w3cwebsocket;
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
                    fetch$1 = await import(moduleName).then(module => (fetchFnName ? module[fetchFnName] : module));
                }
            }
            if (options.webSocketImpl) {
                if (typeof options.webSocketImpl === 'string') {
                    const [moduleName, webSocketImplName] = options.webSocketImpl.split('#');
                    webSocketImpl = await import(moduleName).then(module => webSocketImplName ? module[webSocketImplName] : module);
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
            const fetchResult = await fetch$1(HTTP_URL, {
                method,
                ...(method === 'POST'
                    ? {
                        body: JSON.stringify({ query: print(document), variables }),
                    }
                    : {}),
                headers: extraHeaders,
            });
            return fetchResult.json();
        };
        const schema = await introspectSchema(executor);
        const remoteExecutableSchemaOptions = {
            schema,
            executor,
        };
        if (options.enableSubscriptions) {
            const WS_URL = pointer.replace('http:', 'ws:').replace('https:', 'wss:');
            const subscriptionClient = new SubscriptionClient(WS_URL, {}, webSocketImpl);
            remoteExecutableSchemaOptions.subscriber = async ({ document, variables, }) => {
                return observableToAsyncIterable(subscriptionClient.request({
                    query: document,
                    variables,
                }));
            };
        }
        const remoteExecutableSchema = makeRemoteExecutableSchema(remoteExecutableSchemaOptions);
        return {
            location: pointer,
            schema: remoteExecutableSchema,
        };
    }
    loadSync() {
        throw new Error('Loader Url has no sync mode');
    }
}

export { UrlLoader };
//# sourceMappingURL=index.esm.js.map
