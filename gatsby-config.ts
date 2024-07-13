const config = {
  siteMetadata: {
    title: `Trova Brasil / Poesia Scolpita in Pietra`,
    description: `
    Trova - Poesia Scolpita in Pietra - Travertinos importados com rigoroso controle de qualidade, garantia de segurança e durabilidade.`,
    author: `@pistoletzzz`,
    siteUrl: `https://trovabrasil.com`,
    image: 'src/images/_logos/logo_blue.png',
  },
  graphqlTypegen: true,
  plugins: [
    'gatsby-plugin-styled-components',
    'gatsby-plugin-image',
    'gatsby-plugin-sitemap',
    {
      resolve: 'gatsby-plugin-manifest',
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
    'gatsby-plugin-sharp',
    'gatsby-transformer-sharp',
    'gatsby-plugin-smoothscroll',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: `${__dirname}/src/images`,
      },
      __key: 'images',
    },
    {
      resolve: 'gatsby-plugin-google-tagmanager',
      options: {
        id: 'GTM-P2MGF7M',
        includeInDevelopment: false,
        defaultDataLayer: { platform: 'gatsby' },
      },
    },
    {
      resolve: `gatsby-plugin-robots-txt`,
      options: {
        host: 'https://trovabrasil.com',
        sitemap: 'https://trovabrasil.com/sitemap.xml',
        policy: [{ userAgent: '*', allow: '/' }],
      },
    },
  ],
}

export default config
