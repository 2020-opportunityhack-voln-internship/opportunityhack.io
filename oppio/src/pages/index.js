import React from "react"
import GithubLogo from "../images/GitHub-Mark-Light-120px-plus.png"
import OppLogo from "../images/Logos/White/banner_w.png"
import { Helmet } from "react-helmet"
import { graphql } from "gatsby"
import Img from "gatsby-image"
import styled from "styled-components"
import Footer from "../components/footer"
import "../components/layout.css"
import Logo from "../../banner_w.png"
import bannerimg from "../images/banner_img.jpg"
import bannerimgover from "../images/square_w.png"
import { Link } from "gatsby"



const ImgStyled = styled(Img)`
    width: auto;
    height: auto;
    max-width: 95%;
    max-height: 400px;
    min-height: 1px;
    min-width: 1px;
    margin: auto;
    padding: 0;
    background-color: ghostwhite;
`



export default ({ data }) => {
  function scrollToTools(){
    var topOfTools = document.querySelector('#tool_section').offsetTop - 50;
    window.scroll({top: topOfTools});
  }
return (
  <body>
    
    <Helmet>
    <title>OpportunityHack</title>
    
  <script src="https://apis.google.com/js/platform.js" async defer></script>
    <meta name="google-signin-client_id" content="275198785754-2qtchf3m7l14iper2iorstghppp4rv8l.apps.googleusercontent.com"/>
    <script>
      {
        `
        function onSignIn(){
          alert('SUCCESS');
        }
        `
      }
    </script>
    
  </Helmet>


  <div class="g-signin2 my-signin2 gbtn" data-onsuccess='onSignIn' data-theme="light"></div>
                <div class='topnav'>
                    <div class='logo_wrapper'>
                      <a href='index.html'>
                      <img class='logo_image_nav' src='./banner_w.png'></img>
                      </a>
                    </div>
                </div>

                <div id='nav_items' class='hidden animate__animated animate__slideInDown'>
                    <ul>
                        <a href='/'><li>Home</li></a>
                        <a href='/'><li>News</li></a>
                        <a href='/'><li>Developers</li></a>
                    </ul>
                </div>

  
  <div id='homepage_banner'>
  <img class='banner_img_under' src='./bi.jpeg'></img>
                <div id='inner_banner'>
                    <div class='blur_banner'></div>
                    <img class='banner_img_over' src='./square_w.png'></img>
                    <button id='banner_scroll_btn' onClick={() =>
      window.scroll({top: document.querySelector('#tool_section').offsetTop - 50})}>See our tools</button>
                </div>
            </div>

  
  <div id='banner_1' class='info_banner'>
    <h1 class='banner_heading'>What is OpportunityHack.io?</h1>
    <div class='small_border white'></div>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.<br></br><br></br>
    <a class='banner_link' href='/'>Learn more</a><br></br><br></br>

    <img class='logoimg' src='./banner_w.png'></img>

    </p>
  </div>

  <div id='banner_2' class='info_banner'>
    <h1 class='banner_heading'>We use Heroku to deploy our solutions.</h1>
    <div class='small_border white'></div>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.<br></br><br></br>
   
    <a class='banner_link' href='/'>Learn more</a>
    <a class='banner_link' href='/'>Learn more</a><br></br><br></br>

    <img id='heroku_logo' src='https://signup.heroku.com/assets/logo-horizontal@2x-1dc719093957394192e73258c3ed79718b3e88b1d6353e90803a044effe9f91c.png'>
    </img>

   </p>
  </div>

  <div id='banner_3' class='info_banner'>
    <h1 class='banner_heading'>We believe in open-source projects.</h1>
    <div class='small_border white'></div>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.<br></br><br></br>
   
    <a class='banner_link' href='/'>Learn more</a>
    <a class='banner_link' href='/'>Learn more</a>
    <a class='banner_link' href='/'>Learn more</a><br></br><br></br>

    <img id='github_logo' src={GithubLogo}></img>

   </p>
  </div>

  

  <div id='banner_4' class='info_banner'>
    <h1 class='banner_heading'>What's happening with OpportunityHack?</h1>
    <div class='small_border white'></div>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.<br></br><br></br><a class='banner_link' id='org_link' href='https://sites.google.com/opportunityhack.io/opportunity-hack/home?authuser=0'>Opportunity-Hack.org</a><br></br>
    <br></br>
    </p>
  </div>

  <div id='tool_section'>

  <h1 id='tool_heading'>Software Solutions</h1>

  <div class='small_border gray'></div>

  <div id='soln_wrap'>
  
  {data.allMarkdownRemark.edges.map(({ node }) => (
    <div class='solution'>

      <p class='soln_title'>{node.frontmatter.title}</p>
      <p class='soln_desc'>{node.frontmatter.mini_description}</p>

      <a class='learn_more_link' href={'.' + node.fields.slug + 'index.html'}>Learn more</a>
      <br></br><br></br>
      {
        (node.frontmatter.features.length === 1 && node.frontmatter.features[0] === 'NONE') === true ? "" : 
          (node.frontmatter.features).map((data) =>
            <div class='feature'>
              <i class='material-icons'>add</i>    
              <p>{data}</p>
            </div>
          )
        
      }
      
      <br></br>

      <a href={node.frontmatter.github_link} class={node.frontmatter.github_link === "" ? 'hidden' : 'shown'}>
      <div class='github_link_element'>
          <img src={GithubLogo}></img>
          <p>View GitHub</p>
      </div>
      </a>

      <a href={node.frontmatter.heroku_link} class={node.frontmatter.heroku_link === "" ? 'hidden' : 'shown'}>
      <div class='heroku_link_element'>
          <img src='https://brand.heroku.com/static/media/heroku-logotype-vertical.f7e1193f.svg'></img>
          <p>View Heroku</p>
      </div>
      </a>
      
    </div>  
  ))}

  </div>

  <br></br>

  </div>

  <div id='banner_5' class='info_banner'>
    <h1 class='banner_heading'>Donations are your Opportunity to contribute!</h1>
    <div class='small_border white'></div>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.<br></br>
    <br></br>
    </p>
  </div>

  <div class='footer'>
    <Footer />
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