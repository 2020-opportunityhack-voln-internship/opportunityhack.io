import React from "react"
import { Helmet } from "react-helmet"
import "./layout.css"
import TopNavLogo from "../images/Logos/White/cropped_w.png"
import "../components/layout.css"
  
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
                            <img class='logo_image_nav' src={TopNavLogo}></img>
                        </a>
                    </div>

                    <ul>
                        <li>
                            <div data-netlify-identity-button id='top_login'></div>
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