import React from "react"
import { Helmet } from "react-helmet"
import "./layout.css"
import TopNavLogo from "../images/Logos/White/cropped_w.png"
import "../components/layout.css"

/* eslint-disable */
var user_full_name = "";
var user_img_url = "";
var user_created = "";
var netlifyIdentity = null;
/* eslint-enable */

if (typeof window !== `undefined`) {
  netlifyIdentity = require('netlify-identity-widget');
  netlifyIdentity.init({});

  if(netlifyIdentity.currentUser() !== null){
    user_img_url = netlifyIdentity.currentUser().user_metadata.avatar_url;
    user_full_name = netlifyIdentity.currentUser().user_metadata.full_name;
    user_created = netlifyIdentity.currentUser().created_at;
  }
}

function handleLogin(){
  netlifyIdentity = require('netlify-identity-widget');
    if(netlifyIdentity){
      if(user_full_name === ""){
        netlifyIdentity.on('close', () => {window.location.reload(false)});
        netlifyIdentity.open();
      }
      else {
        netlifyIdentity.logout();
        window.location.reload(false);
      }
    }
  }
  
class TopNav extends React.Component {
      render(){
          return (
            <div>
                <Helmet>
                    <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons" />
                    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.0.0/animate.min.css"/>
                    <title>OpportunityHack</title>
                    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>
                    <script type="text/javascript" src="https://identity.netlify.com/v1/netlify-identity-widget.js"></script>
                </Helmet>

                

                <div class='topnav'>
      <div class='logo_wrapper'>
        <a href='/'>
          <img class='logo_image_nav' src={TopNavLogo} alt='logo'></img>
        </a>
      </div>

      <ul>
        <li id='top_login'>
          <div class='black_text pointer' role='button' tabIndex={0} onClick={handleLogin} onKeyDown={handleLogin}>{user_full_name !== "" ? "Logout" : "Login"}</div>
        </li>
        <li>
          <a href='/dashboard'>Dashboard</a>
          </li>
      </ul>

    </div>

                

            </div>
          )
      }
}

export default TopNav;

/*
<li>
                        <GoogleLogin
                                clientId="275198785754-2qtchf3m7l14iper2iorstghppp4rv8l.apps.googleusercontent.com"
                                render={renderProps => (
                                <button class='google_btn' onClick={renderProps.onClick}>
                                <img src='https://developers.google.com/identity/images/g-logo.png' alt=''></img>
                                <p class='gbtn' id='gbtn_title'>Sign in</p>
                                </button>
                                )}
                                onSuccess={onSignIn}
                                onFailure={onFailure}
                                cookiePolicy={'single_host_origin'}
                                isSignedIn={true}
                            />
                        </li>
*/