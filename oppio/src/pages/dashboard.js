import React, { useCallback } from "react"
import GithubLogo from "../images/GitHub-Mark-Light-120px-plus.png"
import { Helmet } from "react-helmet"
import { graphql } from "gatsby"
import Footer from "../components/footer"
import "../components/layout.css"
import Img from "gatsby-image"
import TopNav from "../components/topnav"
import DefaultImg from "../images/blue.png"
import TopNavLogo from "../images/Logos/White/cropped_w.png"

export default ({ data }) => {


var user_full_name = "";
var user_img_url = "";
var user_created = "";
var netlifyIdentity = null;

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
    <div class='topnav'>
      <div class='logo_wrapper'>
        <a href='/'>
          <img class='logo_image_nav' src={TopNavLogo}></img>
        </a>
      </div>

      <ul>
        <li id='top_login'>
          <div class='white_text pointer' onClick={handleLogin}>{user_full_name !== "" ? "Logout" : "Login"}</div>
        </li>
        <li>
          <a href='/dashboard'>Dashboard</a>
          </li>
      </ul>

    </div>

    {/* END OF NAV */}

    <div class='content_wrap'>
        
            {
                user_full_name === "" ? 

                <div id='logged_out_wrap'>
                    <h1 class='dash_welcome'>Welcome.</h1>
                    <p class='dash_login_message'>Looks like you aren't logged in. Please sign in to use the dashboard.</p>
                    <div class='white_text pointer' onClick={handleLogin} id='dash_login_btn'>Login</div>
                </div>
                
                : 

                <div id='logged_in_wrap'>
                    <center>
                      <div id='dash_banner'>
                      <h1 class='dash_title'>Welcome to the Dashboard</h1>
                      <div class='small_border white'></div>
                    <div  class='dash_head_info'>
                      <img class='user_img' src={user_img_url || DefaultImg}></img>
                      <p class='valid_username'>{user_full_name || "Guest"}</p>
                      <p class='create_date'>Created {user_created || "sometime"}</p>
                    </div>
                    </div>
                    </center>
                    <h1 class='category_title'>Deploy Services</h1>
                    {data.allMarkdownRemark.edges.map(({ node }) => (
                      node.frontmatter.heroku_link === "" ?
                      ""
                      :
                      <div class='service_wrap'>
                        <a href={node.fields.slug}>
                          <div class='service'>
                            <p class='service_title'>{node.frontmatter.title}</p>
                            <a class='deploy_link' href={node.frontmatter.heroku_link}>Deploy</a>
                            {node.frontmatter.youtube_link !== "" ?

                            <a href={node.frontmatter.youtube_link} class='tutorial_link' target='_blank'>TUTORIAL</a>
                            :
                            ""
                            }
                        </div>
                        </a>
                      <p class='service_desc'>{node.frontmatter.mini_description}</p>
                      {
                        node.frontmatter.github_link === "" ?
                        "" :
                        <a href={node.frontmatter.github_link}>
                          <div class='github_mini_link'>
                            <img class='github_mini' src="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png"></img>
                            <p class='ghub_p'>View Github</p>
                          </div>
                        </a>
                      }
                      </div>
                    ))}
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