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
    margin: 10px;
    max-width: 30%;
    max-height: 300px;
`

export default ({ data }) => {
return (
  <div id='post_body' class='push_down'>
    <Helmet>
    <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons" />
    <link
    rel="stylesheet"
    href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.0.0/animate.min.css"
  />
  <title>OpportunityHack Post Feed</title>
  </Helmet>

  <TopNav />
  
  {data.allMarkdownRemark.edges.map(({ node }) => (
    <div>
      <div class='posting'>
        <p class='post_title'>{node.frontmatter.title}</p>
        <div class='images_area'>
            {
              (node.frontmatter.images).map((data) =>
                <div class='post_img_container'>
                  <Img className='f' fluid={data.childImageSharp.fluid}></Img>
                </div>
              )
            }
        </div>

      </div>
    </div>
  ))}

  <div class='footer'>
    <h1>FOOTER</h1>
  </div>

  </div>
  
)
}

export const query = graphql`
  query {
    allMarkdownRemark(
      sort: { fields: [frontmatter___date], order: DESC }
      filter: {
        fields: { collection: { eq: "posts" } }
      }
    ) {
      edges {
        node {
            html
            frontmatter {
                title
                date(formatString: "MMMM DD, YYYY")
                images {
                  childImageSharp {
                    fluid(maxWidth: 2428) {
                      ...GatsbyImageSharpFluid
                    }
                  }
                }
            }
        }
      }
    }
  }
`;
