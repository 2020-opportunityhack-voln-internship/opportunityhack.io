import React from "react"
import { StaticQuery, graphql } from "gatsby"
import { Helmet } from "react-helmet"

import "../components/layout.css"

const Footer = () => (
  <StaticQuery
    query={graphql`
      {
        site {
          siteMetadata {
            youtube_link
            twitter_link
            title
            snapchat_link
            linkedin_link
            instagram_link
            heroku_link
            github_link
            facebook_link
            email_address
          }
        }
      }
    `}
    render={data =>
        
      <div class='footer_wrap'>

        {/* Head injection code. */}
        <Helmet>
          <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons" />
          <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.0.0/animate.min.css"/>
          <title>OpportunityHack</title>
          <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>
        </Helmet>
        {/* END OF HELMET */}

          {/* Social media links and bottom footer element */}
          <p class='footer_heading'>Stay Connected</p>
          <div class='small_border white'></div>
            <center>
              <div class='links_area'>
                <a href={data.site.siteMetadata.facebook_link} class="fa fa-facebook" target="_blank" rel='noreferrer' aria-label="facebook link"> </a>
                <a href={data.site.siteMetadata.twitter_link} class="fa fa-twitter" target="_blank" rel='noreferrer' aria-label="twitter link"> </a>
                <a href={data.site.siteMetadata.linkedin_link} class="fa fa-linkedin" target="_blank" rel='noreferrer' aria-label="linkedin link"> </a>
                <a href={data.site.siteMetadata.github_link} class="fa fa-github" target="_blank" rel='noreferrer' aria-label="github link"> </a>
              </div>
            </center>
            {/* End of footer element and social media links */}
          </div>
          
}
  ></StaticQuery>
)

export default Footer

