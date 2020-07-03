import React from "react"
import { StaticQuery, graphql } from "gatsby"
import { Helmet } from "react-helmet"

import { GoogleLogin } from 'react-google-login';

const Footer = () => (
  <StaticQuery
    query={graphql`
      {
        site {
          siteMetadata {
            youtube_link
            twitter_link
            title
            snapchat_link
            linkedin_link
            instagram_link
            heroku_link
            github_link
            facebook_link
            email_address
          }
        }
      }
    `}
    render={data =>
        
    <div class='footer_wrap'>
        <Helmet>
            <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons" />
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.0.0/animate.min.css"/>
            <title>OpportunityHack</title>
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>
          </Helmet>

          
  <GoogleLogin
    clientId="275198785754-2qtchf3m7l14iper2iorstghppp4rv8l.apps.googleusercontent.com"
    buttonText="Sign in"
    onSuccess='onSignIn'
    cookiePolicy={'single_host_origin'}
    className='g-signin2 my-signin2 gbtn'
  />
        <h1 class='footer_heading'>Stay Connected</h1>
        <div class='small_border white'></div>
        <center>
        <div class='links_area'>
            <a href={data.site.siteMetadata.facebook_link} class="fa fa-facebook"></a>
            <a href={data.site.siteMetadata.twitter_link} class="fa fa-twitter"></a>
            <a href={data.site.siteMetadata.linkedin_link} class="fa fa-linkedin"></a>
            <a href={data.site.siteMetadata.github_link} class="fa fa-github"></a>
        </div>
        </center>
    </div>
}
  ></StaticQuery>
)

export default Footer

