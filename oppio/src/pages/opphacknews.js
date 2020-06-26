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
    max-width: 95%;
    max-height: 400px;
    min-height: 1px;
    min-width: 1px;
    margin: auto;
    padding: 0;
    background-color: ghostwhite;
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
        <p>{node.frontmatter.title}</p>
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
            frontmatter {
                title
                date(formatString: "MMMM DD, YYYY")
            }
        }
      }
    }
  }
`;
