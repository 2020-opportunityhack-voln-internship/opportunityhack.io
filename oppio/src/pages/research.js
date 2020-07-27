import React from "react"
import { Helmet } from "react-helmet"
import { graphql } from "gatsby"
import "../components/layout.css"
import TopNav from "../components/topnav"
import B1 from "../../static/banner_4.jpg";
import B2 from "../../static/banner_5.jpg";
import B3 from "../../static/banner_6.jpg";
import B4 from "../../static/banner_7.jpg";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

export default function App({data}) {
  const renderSlides = () =>
    [B1,B2,B3,B4].map(num => (
      <div>
	 <img class='banner_img_under' src={num} alt='home page banner'></img>
      </div>
    ));

  return (
<React.Fragment>
    <div className="App">
      <Slider dots={true}>{renderSlides()}</Slider>
    </div>

    <Helmet>
      <title>OpportunityHack</title>
      <script src="https://apis.google.com/js/platform.js" async defer></script>
      <meta name="google-signin-client_id" content="275198785754-2qtchf3m7l14iper2iorstghppp4rv8l.apps.googleusercontent.com"/>
    
    </Helmet>

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
  
   </React.Fragment>
  );
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
