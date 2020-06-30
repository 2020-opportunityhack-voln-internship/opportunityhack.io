import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import GithubLogo from "../images/GitHub-Mark-Light-120px-plus.png"
import OppLogo from "../images/Logos/White/banner_w.png"
import SEO from "../components/seo"
import TopNav from "../components/topnav"
import Banner from "../components/homepage_banner"
import { Helmet } from "react-helmet"
import { graphql } from "gatsby"
import Img from "gatsby-image";
import styled from "styled-components"
import Footer from "../components/footer"
import { GoogleLogin } from 'react-google-login';

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

const responseGoogle = (response) => {
  console.log(response);
}

const failResponse = (response) => {
  console.log(response);
}

export default ({ data }) => {
return (
  <body>
    
    <Helmet>
    <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons" />
    <link
    rel="stylesheet"
    href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.0.0/animate.min.css"
    />
    <title>OpportunityHack</title>
    <script src="https://apis.google.com/js/platform.js" async defer></script>
    <meta name="google-signin-client_id" content="275198785754-2qtchf3m7l14iper2iorstghppp4rv8l.apps.googleusercontent.com"></meta>
    
  </Helmet>

  <TopNav />
  
  <Banner />

  <div id='banner_1' class='info_banner'>
    <h1 class='banner_heading'>What is OpportunityHack.io?</h1>
    <div class='small_border white'></div>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.<br></br><br></br>
    <a class='banner_link' href='/'>Learn more</a><br></br><br></br>
    <img id='opp_logo' src={OppLogo}></img>
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
      <div class='soln_logo'>

        <ImgStyled fluid={node.frontmatter.image.childImageSharp.fluid}/>
        
      </div>
      <p class='soln_title'>{node.frontmatter.title}</p>
      <p class='soln_desc'>{node.frontmatter.mini_description}<a class='learn_link' href={node.fields.slug}><p class='learn_more_link'>Learn more</p></a></p><br></br>
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
            image{
              childImageSharp {
                fluid(maxWidth: 2428) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
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
