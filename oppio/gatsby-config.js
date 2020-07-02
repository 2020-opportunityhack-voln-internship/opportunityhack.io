/*module.exports = {
  siteMetadata: {
    title: `Gatsby Default Starter`,
    description: `Kick off your next, great Gatsby project with this default starter. This barebones starter ships with the main Gatsby configuration files you might need.`,
    author: `@gatsbyjs`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}*/

module.exports = {
  siteMetadata: {
      title: `OpportunityHack.io`,
      youtube_link: ``,
      github_link: `https://www.google.com/url?q=https%3A%2F%2Fgithub.com%2Fopportunity-hack%2F&sa=D&sntz=1&usg=AFQjCNHtoXc70eubXzqbx-fXma6avLyFUw`,
      heroku_link: ``,
      instagram_link: ``,
      facebook_link: `https://www.google.com/url?q=https%3A%2F%2Fwww.facebook.com%2FOpportunityHack%2F&sa=D&sntz=1&usg=AFQjCNGQRShJkb4DQA0YecRK-wGJQCOrcg`,
      snapchat_link: ``,
      linkedin_link: `https://www.google.com/url?q=https%3A%2F%2Fwww.linkedin.com%2Fcompany%2Fopportunity-hack%2F&sa=D&sntz=1&usg=AFQjCNH0aKOrU9P_7aNU762SgKvoDg3e2Q`,
      twitter_link:  `https://www.google.com/url?q=https%3A%2F%2Ftwitter.com%2Fopportunityhack&sa=D&sntz=1&usg=AFQjCNH1Z3gfFO3MzFMcuNoscmhF_sqMdQ`,
      email_address: ``,
  },
  plugins: [
      {
          resolve: `gatsby-source-filesystem`,
          options: {
              path: `${__dirname}/src/markdown`,
              name: `solutions`,
          },
      },
      {
        resolve: `gatsby-source-filesystem`,
        options: {
            name: `images`,
            path: `${__dirname}/src/images`,
        },
    },
      `gatsby-transformer-sharp`,
      `gatsby-plugin-sharp`,
      `gatsby-image`,
      `gatsby-remark-relative-images`,
      {
          resolve: `gatsby-transformer-remark`,
          options: {
              plugins: [
                  {
                      resolve: `gatsby-remark-images`,
                      options: {
                          maxWidth: 5000,
                      },
                  },
                  `gatsby-remark-copy-linked-files`,
               ],
          },
      },

  ],
}
