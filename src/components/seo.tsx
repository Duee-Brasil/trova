import { graphql, HeadFC, useStaticQuery } from "gatsby";
import * as React from "react"

export const SEO: HeadFC = () => {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            description
            author
            image
            siteUrl
          }
        }
      }
    `
  )

  const { description, title: defaultTitle, author, image, siteUrl } = site.siteMetadata;

  return (
    <>
      <html lang="pt-br" />
      <title>{defaultTitle}</title>
      <link rel="icon" href={image} />
      <meta name="description" content={description} />
      <meta name="copyright" content="©2024 Duee Brasil - https://github.com/letgodoy" />
      <meta name="url" content="https://trovabrasil.com" />
      <meta name="identifier-url" content="https://trovabrasil.com" />
      <meta name="facebook-domain-verification" content="za65m80ibiardiepk5vq60o4m8sw2l" />

      <meta property="og:type" content="website" />
      <meta property="og:title" content={defaultTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={siteUrl} />
      <meta property="og:image" content={image} /> 

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content={siteUrl} />
      <meta name="twitter:creator" content={author} />
      <meta name="twitter:title" content={defaultTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} /> 

      <link rel="dns-prefetch" href="https://gstatic.com" crossOrigin={"anonymous"} />
      <link rel="dns-prefetch" href="https://googleapis.com" crossOrigin={"anonymous"} />

      <link rel="dns-prefetch" href="googletagmanager.com" crossOrigin={"anonymous"} />
      <link rel="dns-prefetch" href="google-analytics.com" crossOrigin={"anonymous"} />
      <link rel="dns-prefetch" href="unpkg.com" crossOrigin={"anonymous"} />

      <link rel="preconnect" href="https://fonts.googleapis.com" crossOrigin={"anonymous"} />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin={"anonymous"} />

      <link rel="preconnect" href="www.googletagmanager.com" crossOrigin={"anonymous"} />
      <link rel="preconnect" href="www.google-analytics.com" crossOrigin={"anonymous"} />
      <link rel="preconnect" href="unpkg.com" crossOrigin={"anonymous"} />

      <link
        href="https://fonts.googleapis.com/css2?family=Lato:wght@300;400;700&display=swap"
        rel="stylesheet"
        as="style"
        type="text/css"
        media="all"
      />
      <link rel="canonical" href="https://trovabrasil.com/" />
      <script src="https://unpkg.com/swiper@8/swiper-bundle.min.js"
        type="text/javascript"
        async></script>
      <script type="application/ld+json">
        {`{
        "@context": "http://schema.org",
        "@type": "Organization",
        name: "Trova Brasil",
        url: "https://trovabrasil.com",
        address: "contato@trovabrasil.com",
        sameAs: [
          "https://facebook.com/trovabrasil",
          "https://instagram.com/trovatravertino",
          "https://br.pinterest.com/trovatravertino/_created/",
        ],
      }`}
      </script>
      <meta httpEquiv="Cache-Control" content="public, max-age=0, must-revalidate"></meta>
      <meta charSet="utf-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta name="description" content={description} />
      <meta name="keywords" content="gatsby, react,
        marmores granitos e pedras,
        mármore travertino,
        piso de marmore,
        revestimento externo,
        revestimento de piso,
        piso e revestimento,
        piso pedra,
        Piso Travertino,
        Marmore Granito,
        Loja de Pisos,
        Loja de Revestimentos,
        Revestimento Interno,
        Loja de Pedras Naturais,
        Trova Brasil,
        Granito,
        Travertino,
        Natural,
        Natureza,
        Trova travertino,
        Travertino Navona,
        Navona,
        Travertino Preço,
        Preço Trova,
        Trova Marmore,
        Marmore Trova,
        Trova Granito,
        Granito Trova,
        Projetos Trova,
        Contato Trova,
        Travertino Romano,
        Romano,
        Cerâmica Natural,
        Vidraria Natural,
        Vitrina Natural,
        Concreto Natural,
        Polimérico Natural" />
      <meta name="author" content={author} />
      <meta httpEquiv="pragma" content="no-cache" />
      <meta name="robots" content="index,follow" />
      <meta name="generator" content="Gatsby" />
      <meta name="revisit-after" content="15 days" />
      <meta name="rating" content="general" />

      <style>
        {`
        @import url('https://unpkg.com/swiper@8/swiper-bundle.min.css');
      `}
      </style>
    </>
  )
}
