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
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
      <link
        href="https://fonts.googleapis.com/css2?family=Lato:wght@300;400;700&display=swap"
        rel="stylesheet"
      />
      <link
        rel="stylesheet"
        href="https://unpkg.com/swiper@8/swiper-bundle.min.css"
      />

      <script src="https://unpkg.com/swiper@8/swiper-bundle.min.js"></script>

      <meta
        name="facebook-domain-verification"
        content="za65m80ibiardiepk5vq60o4m8sw2l"
      />
      <script type="application/ld+json">
        {{
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
        }}
      </script>
      <meta name="description" content={metaDescription}></meta>
      <meta name="copyright"content="@letgodoy"></meta>
      <meta name="url" content="https://trovabrasil.com"></meta>
      <meta name="identifier-URL" content="https://trovabrasil.com"></meta>
      <meta http-equiv="cache-control" content="no-cache" />
    </Helmet>
  )
}

export default Seo
