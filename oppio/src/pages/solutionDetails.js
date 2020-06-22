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
    max-width: 400px;
    max-height: 300px;
    min-height: 1px;
    min-width: 1px;
    margin: auto;
    padding: 0;
`

export default ({ data }) => {
    const post = data.markdownRemark;
    function scrollToTools(){
      var topOfTools = document.querySelector('#banner_3').offsetTop - 50;
      window.scroll({top: topOfTools});
    }
    return (
       <div>
          <Helmet>
            <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons" />
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.0.0/animate.min.css"/>
            <title>OpportunityHack</title>
          </Helmet>
          <TopNav />
          <div class='details_wrapper'>
            <div id='banner_1' class='info_banner'>
              <h1 class='banner_heading'>{post.frontmatter.title}</h1>
              <div class='small_border white'></div>
              <ImgStyled fluid={post.frontmatter.image.childImageSharp.fluid}/>
              <p>
                {post.frontmatter.full_description}
                <br></br><br></br>
   
            <p class='banner_link' onClick={scrollToTools}>View tutorial</p>
            <br></br></p>


          </div>

          <div id='banner_4' class='info_banner'>
            <h1 class='banner_heading'>Features</h1>
            <div class='small_border white'></div>
            <br></br>
            {
              (post.frontmatter.features).map((data) =>
              <div class='feature_detail'>
                <i class='material-icons'>add</i>    
                <p>{data}</p>
              </div>
              )
            }
            <br></br>
          </div>

          </div>

          <div id='banner_3' class='info_banner'>
            <h1 class='banner_heading'>View The Tutorial</h1>
            <div class='small_border white'></div>
            <br></br>
            {
              post.frontmatter.youtube_link === "" ? <p>We're sorry, there is no tutorial for this video yet. Stay tuned.</p> : <center><iframe class='embed_video' src={post.frontmatter.youtube_link} frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></center>
            }
            <ImgStyled fluid={post.frontmatter.image.childImageSharp.fluid}/>
            <br></br>
          </div>

              {
                ((post.frontmatter.github_link === "") && (post.frontmatter.heroku_link === "")) 
                
                ? 
                
                "" 
                
                : 
                
                <div>
                  <div id='banner_5' class='info_banner'>
                    <h1 class='banner_heading'>Links</h1>
                    <div class='small_border white'></div>
                      <br></br>
                      <center>
                        {
                          post.frontmatter.github_link === "" ? "" : <a class='detail_link_ext' href={post.frontmatter.github_link}>View the GitHub</a>
                        }
                        {
                          post.frontmatter.heroku_link === "" ? "" : <a class='detail_link_ext' href={post.frontmatter.heroku_link}>View the Heroku</a>
                        }
                      </center>
                      <br></br><br></br>
                  </div>
                </div>
              }

            

          </div>

    )
}

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
        mini_description
        full_description
        image{
          childImageSharp {
            fluid(maxWidth: 400) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        features
        github_link
        youtube_link
        heroku_link
      }
    }
  }
`