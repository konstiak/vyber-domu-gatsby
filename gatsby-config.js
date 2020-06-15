module.exports = {
  siteMetadata: {
    title: `Výber domu`,
    description: `Výber domu Konštiakovcov`,
    author: `@matrinko`,
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
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/src/pages`,
        name: 'pages'
      }
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-github-crud`,
            options: {
              github: 'https://github.com/konstiak/vyber-domu-gatsby',
              branch: 'master',
              basedir: __dirname,
            }
          }
        ]
      }      
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `vyber-domu-konstiakovci`,
        short_name: `Výber domu`,
        start_url: `/`,
        background_color: `#60bd90`,
        theme_color: `#60bd90`,
        display: `minimal-ui`,
        icon: `src/images/simple-house.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: `gatsby-plugin-sass`,
      options: {
        includePaths: [require("path").resolve(__dirname, "node_modules")],
      },
    },
    {
      resolve: `gatsby-plugin-s3`,
      options: {
        bucketName: "vyber-domu-bucket",
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    `gatsby-plugin-offline`,
  ],
  pathPrefix: "gatsby-starter-basic-bootstrap",
};
