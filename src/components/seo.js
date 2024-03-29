import * as React from "react"
import { Helmet } from "react-helmet"
import { useStaticQuery, graphql } from "gatsby"

function Seo({ title }) {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            description
            author
          }
        }
      }
    `
  )

  const metaDescription = site.siteMetadata.description
  const defaultTitle = site.siteMetadata?.title

  return (
    <Helmet
      htmlAttributes={{
        lang: "pt-br"
      }}
      title={title}
      titleTemplate={defaultTitle ? `%s / Poesia Scolpita in Pietra` : null}
      meta={[
        {
          name: `description`,
          content: metaDescription,
        },
        {
          property: `og:title`,
          content: title,
        },
        {
          property: `og:description`,
          content: metaDescription,
        },
        {
          property: `og:type`,
          content: `website`,
        },
        {
          name: `twitter:card`,
          content: `summary`,
        },
        {
          name: `twitter:creator`,
          content: site.siteMetadata?.author || ``,
        },
        {
          name: `twitter:title`,
          content: title,
        },
        {
          name: `twitter:description`,
          content: metaDescription,
        },
      ]}
    >
      <link rel="dns-prefetch" href="https://gstatic.com" crossorigin />
      <link rel="dns-prefetch" href="https://googleapis.com" crossorigin />

      <link rel="dns-prefetch" href="googletagmanager.com" crossorigin />
      <link rel="dns-prefetch" href="google-analytics.com" crossorigin />
      <link rel="dns-prefetch" href="unpkg.com" crossorigin />

      <link rel="preconnect" href="https://fonts.googleapis.com" crossorigin />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />

      <link rel="preconnect" href="www.googletagmanager.com" crossorigin />
      <link rel="preconnect" href="www.google-analytics.com" crossorigin />
      <link rel="preconnect" href="unpkg.com" crossorigin />

      <link
        href="https://fonts.googleapis.com/css2?family=Lato:wght@300;400;700&display=swap"
        rel="stylesheet"
        as="style"
        type="text/css"
        media="all"
      />
      <link rel="canonical" href="https://trovabrasil.com/" />
      <script src="https://unpkg.com/swiper@8/swiper-bundle.min.js" as="script"
        type="text/javascript"
        async></script>

      <meta
        name="facebook-domain-verification"
        content="za65m80ibiardiepk5vq60o4m8sw2l"
      />
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
      <meta name="description" content={metaDescription}></meta>
      <meta name="copyright" content="@letgodoy"></meta>
      <meta name="url" content="https://trovabrasil.com"></meta>
      <meta name="identifier-URL" content="https://trovabrasil.com"></meta>
      <meta http-equiv="Cache-Control" content="public, max-age=0, must-revalidate"></meta>

      <style>
        {`
          @import url('https://unpkg.com/swiper@8/swiper-bundle.min.css');
        `}
      </style>


      <meta property="og:type" content="website" />
      <meta property="og:title" content="Trova Brasil / Poesia Scolpita in Pietra" />
      <meta property="og:description" content="Trova - Poesia Scolpita in Pietra - Travertinos importados com rigoroso controle de qualidade, garantia de segurança e durabilidade." />
      <meta property="og:url" content="https://trovabrasil.com/" />
      <meta property="og:image" content="src/images/_logos/logo_blue.png" /> 

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content="@trovabrasil" />
      <meta name="twitter:title" content="Trova Brasil / Poesia Scolpita in Pietra" />
      <meta name="twitter:description" content="Trova - Poesia Scolpita in Pietra - Travertinos importados com rigoroso controle de qualidade, garantia de segurança e durabilidade." />
      <meta name="twitter:image" content="src/images/_logos/logo_blue.png" /> 



    </Helmet>
  )
}

export default Seo
