import React from "react"
import { Helmet } from "react-helmet"
import { graphql } from "gatsby"
import "../components/layout.css"
import TopNav from "../components/topnav"

export default ({ data }) => {

return (
  <body>
    
    {/* HELMET */}
    <Helmet>
      <title>OpportunityHack</title>
      <script src="https://apis.google.com/js/platform.js" async defer></script>
      <meta name="google-signin-client_id" content="275198785754-2qtchf3m7l14iper2iorstghppp4rv8l.apps.googleusercontent.com"/>
    
    </Helmet>
    {/* END OF HELMET */}

    {/* NAV */}
    <TopNav />
    {/* END OF NAV */}
  
    
  {/* Research Labs Section */}
  <div id='tool_section'>

  <h1 id='tool_heading'>Research Tasks</h1>

  <div class='small_border gray'></div>

  <div id='research_wrap'>
  
  {/* Iterate through all markdown files and generate solution thumbnails. */}
  {data.allMarkdownRemark.edges.map(({ node }) => (
    <div class='research'>

      <p class='soln_title'>{node.frontmatter.title}</p>

      <div class='soln_inner_wrap'>
      <p class='soln_desc'>{node.frontmatter.mini_description}</p>

      </div>
  {/* End of research */}

    </div>

  ))}

  </div>

  <br></br>

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
        fields: { collection: { eq: "research" } }
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
