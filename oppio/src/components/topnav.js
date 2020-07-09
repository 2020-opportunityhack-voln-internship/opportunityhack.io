import React from "react"
import { Helmet } from "react-helmet"
import "./layout.css"
import TopNavLogo from "../images/Logos/White/cropped_w.png"
import "../components/layout.css"
import { GoogleLogin, GoogleLogout } from 'react-google-login';

var current_user;

function onSignIn(googleUser){
    var profile = googleUser.getBasicProfile();
    current_user = profile;
    console.log('ID: ' + profile.getId()); // Do not send to your backend! Use an ID token instead.
    console.log('Name: ' + profile.getName());
    console.log('Image URL: ' + profile.getImageUrl());
    console.log('Email: ' + profile.getEmail()); // This is null if the 'email' scope is not present.
    document.getElementById('gbtn_title').innerHTML = profile.getName();
  }
  function onFailure(){
    alert('Login failed. Try again.');
  }
  function signOut(){
      alert('signing out function. needs work.');
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
                </Helmet>

                <div class='topnav'>
                    <div class='logo_wrapper'>
                        <a href='/'>
                            <img class='logo_image_nav' src={TopNavLogo}></img>
                            
                        </a>
                    </div>

                    <ul>
                        <li id='logout_item'>
                            <GoogleLogout 
                            clientId="275198785754-2qtchf3m7l14iper2iorstghppp4rv8l.apps.googleusercontent.com"
                            render={renderProps => (
                                <button class='google_btn logout_btn' onClick={signOut}>
                                <p class='gbtn' id='gbtn_title_logout'>Logout</p>
                                </button>
                                )}
                                ></GoogleLogout>
                        </li>

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
                            />
                        </li>
                    </ul>

                </div>

                

            </div>
          )
      }
}

export default TopNav;