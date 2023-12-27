module.exports = {
  siteMetadata: {
    title: `Trova Brasil`,
    description: `
    Trova - Poesia Scolpita in Pietra - Travertinos importados com rigoroso controle de qualidade, garantia de segurança e durabilidade.`,
    author: `@pistoletzzz`,
    siteUrl: `https://letgodoy.com`,
  },
  plugins: [
    {
      resolve: `gatsby-plugin-robots-txt`,
      options: {
        host: 'https://trovabrasil.com',
        sitemap: 'https://trovabrasil.com/sitemap.xml', 
        policy: [{ userAgent: '*', allow: '/' }],
      },
    },
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
        name: `Trova Brasil`,
        start_url: `/`,
        background_color: `#4c6f9c`,
        display: `standalone`,
        icon: `src/images/_logos/logo_blue.png`, // This path is relative to the root of the site.
        short_name: `Trova`,
        description: `Trova - Poesia Scolpita in Pietra - Travertinos importados com rigoroso controle de qualidade, garantia de segurança e durabilidade.`,
        lang: `pt-br`,
        theme_color: `#fff`,
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
