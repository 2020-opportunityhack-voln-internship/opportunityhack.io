import React from "react"
import GithubLogo from "../images/GitHub-Mark-Light-120px-plus.png"
import { Helmet } from "react-helmet"
import { graphql } from "gatsby"
import Footer from "../components/footer"
import "../components/layout.css"
import Img from "gatsby-image"
import { GoogleLogin } from 'react-google-login';
import TopNav from "../components/topnav"

export default ({ data }) => {

const netlifyIdentity = require('netlify-identity-widget');

var user_full_name = ""
var user_img_url = ""

if(netlifyIdentity.currentUser() !== null){
    user_img_url = netlifyIdentity.currentUser().user_metadata.avatar_url;
    user_full_name = netlifyIdentity.currentUser().user_metadata.full_name;
}


return (
  <body>
    
    {/* HELMET. This is where elements are injected into the head tag */}
    <Helmet>
        <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons" />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.0.0/animate.min.css"/>
        <title>Dashboard</title>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>
        <script type="text/javascript" src="https://identity.netlify.com/v1/netlify-identity-widget.js"></script>
    </Helmet>
    {/* END OF HELMET */}

    {/* NAV */}
    <TopNav />
    {/* END OF NAV */}

    <div class='content_wrap'>
        
            {
                user_full_name === "" ? 
                
                <div id='logged_out_wrap'>
                    <h1 class='dash_welcome'>Welcome.</h1>
                    <p class='dash_login_message'>Looks like you aren't logged in. Please sign in to use the dashboard.</p>
                    <div data-netlify-identity-button id='dash_login_btn'></div>
                </div>

                : 
                
                <div>
                    <img src={user_img_url}></img>
                    <p class='valid_username'>{user_full_name}</p>
                </div>

            }
    </div>

  </body>
  
)
}

export const query = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark (
      filter: {
        fields: { collection: { eq: "solutions" } }
      }
    ) {
      totalCount
      edges {
        node {
          id
          html
          frontmatter {
            title
            mini_description
            features
            github_link
            youtube_link
            heroku_link
          }
          fields{
            slug
          }
          excerpt
        }
      }
    }
  }
`