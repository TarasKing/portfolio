/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})

// require("dotenv").config()

// const strapiConfig = {
//   apiURL: process.env.STRAPI_API_URL,
//   accessToken: process.env.STRAPI_TOKEN,
//   collectionTypes: ["job", "project", "blog"],
//   singleTypes: ["about"],
// }

module.exports = {
  siteMetadata: {
    title: "Taras Ivanov's Portfolio",
    description: "Taras Ivanov's Portfolio web page",
    author: "@TarasKing",
    siteUrl: "https://i-taras.netlify.app",
  },
  /* Your site config here */

  plugins: [
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/assets/images`,
      },
    },
    `gatsby-plugin-react-helmet`,
    // {
    //   resolve: `gatsby-source-strapi`,
    //   options: strapiConfig,
    // },
    `gatsby-plugin-sitemap`,
    // {
    //   resolve: `gatsby-source-cloudinary`,
    //   options: {
    //     cloudName: process.env.CLOUDINARY_CLOUD_NAME,
    //     apiKey: process.env.CLOUDINARY_API_KEY,
    //     apiSecret: process.env.CLOUDINARY_API_SECRET,
    //     // resourceType: `image`,
    //     // type: `twitter`,
    //     // maxResults: 22,
    //     // tags: true,
    //     // context: true,
    //     // prefix: `demo/animals`
    //   },
    // },
    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: process.env.CONTENTFUL_SPACE_ID,
        // Learn about environment variables: https://gatsby.dev/env-vars
        accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
      },
    },
    // {
    //   resolve: `gatsby-transformer-cloudinary`,
    //   options: {
    //     // Add the `gatsbyImageData` resolver to `CloudinaryMedia`
    //     transformTypes: [`CloudinaryMedia`],
    //   },
    // },
  ],
}
