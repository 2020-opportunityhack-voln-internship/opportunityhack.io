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

const ImgStyled = styled(Img)`
    width: auto;
    height: auto;
    max-width: 100%;
    max-height: 300px;
`

export default ({ data }) => {
return (
  <div>
    <Helmet>
    <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons" />
    <link
    rel="stylesheet"
    href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.0.0/animate.min.css"
  />
  </Helmet>
  <TopNav />
  <Banner />

  <div id='banner_1' class='info_banner'>
    <h1 class='banner_heading'>What is OpportunityHack?</h1>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.<br></br><br></br>
    <a class='banner_link' href='/'>Learn more</a><br></br><br></br>

    <img id='opp_logo' src={OppLogo}></img>
    </p>
  </div>

  <div id='banner_2' class='info_banner'>
    <h1 class='banner_heading'>We use Heroku!</h1>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.<br></br><br></br>
   
    <a class='banner_link' href='/'>Learn more</a>
    <a class='banner_link' href='/'>Learn more</a><br></br><br></br>

    <img id='heroku_logo' src='https://signup.heroku.com/assets/logo-horizontal@2x-1dc719093957394192e73258c3ed79718b3e88b1d6353e90803a044effe9f91c.png'>
    </img>

   </p>
  </div>

  <div id='banner_3' class='info_banner'>
    <h1 class='banner_heading'>We believe in open-source projects.</h1>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.<br></br><br></br>
   
    <a class='banner_link' href='/'>Learn more</a>
    <a class='banner_link' href='/'>Learn more</a>
    <a class='banner_link' href='/'>Learn more</a><br></br><br></br>

    <img id='github_logo' src={GithubLogo}></img>

   </p>
  </div>

  <div id='tool_section'>

  <h1 id='tool_heading'>Software Solutions</h1>
  <center>
  <div id='soln_wrap'>
  {data.allMarkdownRemark.edges.map(({ node }) => (

    <div class='solution'>
      <div class='soln_logo'>
        <ImgStyled fluid={node.frontmatter.image.childImageSharp.fluid} />
      </div>
      <p class='soln_title'>{node.frontmatter.title}</p>
      <p class='soln_desc'>{node.frontmatter.description}</p>
    </div>

                
  ))}
  </div>
  </center>
  </div>
  </div>
  
)
  }

export const query = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark {
      totalCount
      edges {
        node {
          id
          frontmatter {
            title
            description
            image{
              childImageSharp {
                fluid(maxWidth: 800) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
            features
          }
          excerpt
        }
      }
    }
  }
`
