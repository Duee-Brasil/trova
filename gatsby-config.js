module.exports = {
  siteMetadata: {
    title: `Trova Brasil`,
    description: `Kick off your next, great Gatsby project with this default starter. This barebones starter ships with the main Gatsby configuration files you might need.`,
    author: `@pistoletzzz`,
    siteUrl: `https://letgodoy.com`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-image`,
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
        name: `TrovaBrasil`,
        short_name: `trova`,
        start_url: `/`,
        background_color: `#4c6f9c`,
        display: `standalone`,
        icon: `src/images/_logos/logo_blue.png`, // This path is relative to the root of the site.
      },
    },
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-smoothscroll`,
    `gatsby-plugin-scroll-reveal`,
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
    {
      resolve: "gatsby-plugin-google-tagmanager",
      options: {
        id: "GTM-P2MGF7M",
        includeInDevelopment: false,
        defaultDataLayer: { platform: "gatsby" },
      }
    },
  ],
}
