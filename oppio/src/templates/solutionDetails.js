import React from "react"
import { Helmet } from "react-helmet"
import { graphql } from "gatsby"
import Img from "gatsby-image";
import styled from "styled-components"
import Footer from "../components/footer"
import Logo from "../../banner_w.png"
import "../components/layout.css"
import { Link } from "gatsby"

const ImgStyled = styled(Img)`
    width: auto;
    height: auto;
    max-width: 400px;
    max-height: 400px;
    min-height: 1px;
    min-width: 1px;
    margin: auto;
    padding: 0;
`

export default ({ data }) => {
    const post = data.markdownRemark;
    var numFeatures = post.frontmatter.features.length;
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
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>
    <meta name="google-signin-client_id" content="275198785754-2qtchf3m7l14iper2iorstghppp4rv8l.apps.googleusercontent.com"></meta>
    <script src="https://apis.google.com/js/platform.js" async defer></script>

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
                      <Link to="/">
                      <img class='logo_image_nav' src='../banner_w.png'></img>
                      </Link>
                    </div>
                </div>

                <div id='nav_items' class='hidden animate__animated animate__slideInDown'>
                    <ul>
                        <a href='/'><li>Home</li></a>
                        <a href='/'><li>News</li></a>
                        <a href='/'><li>Developers</li></a>
                    </ul>
                </div>

          <div class='details_wrapper'>
            <div class='detail_header info_banner'>
              <br></br><br></br>
              <h1 class='banner_heading graytext'>{post.frontmatter.title}</h1>
              <div class='small_border gray'></div>
              <p>
                <div dangerouslySetInnerHTML={{ __html: post.html }} />
              </p>
              <center>
                <a id='banner_link' onClick={scrollToTools}>View tutorial</a>
              </center>
              <br></br>
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
            {numFeatures === 0 ? <p>No features were added to this software.</p> : <div></div>}
            <br></br>
          </div>

          </div>

          <div id='banner_3' class='info_banner'>
            <h1 class='banner_heading'>View The Tutorial</h1>
            <div class='small_border white'></div>
            <br></br>
            {
              post.frontmatter.youtube_link === "" ? <p>We're sorry, there is no tutorial for this software yet. Stay tuned.</p> : <center><iframe class='embed_video' src={post.frontmatter.youtube_link} frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture, fullscreen" allowfullscreen></iframe></center>
            }
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

              <div class='footer'>
                <Footer />
              </div>

          </div>

    )
}

export const query = graphql`

  query($path: String!) {
    file: file(relativePath: { eq: "banner_w.png" }) {
      childImageSharp {
        fluid(maxWidth: 2428) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    markdownRemark(fields: { 
        slug: { eq: $path }
        collection: { eq: "solutions" }
        }
        ) 
      {
      html
      frontmatter {
        title
        mini_description
        features
        github_link
        youtube_link
        heroku_link
      }
    }
  }
`