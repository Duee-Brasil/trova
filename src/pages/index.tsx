import React from "react"

import scrollTo from 'gatsby-plugin-smoothscroll';
import { SEO } from "../components/seo";
import { Layout } from "../components/layout";
import { Hero } from "../sessions";
import { About } from "../sessions/about";
import { Products } from "../sessions/products";
import { Characteristic } from "../sessions/characteristic";
import { OtherProducts } from "../sessions/otherProducts";
import { Inspiration } from "../sessions/inspiration";
import { Find } from "../sessions/find";
import { Contact } from "../sessions/contact";

const IndexPage = () => {

  return (
    <Layout>
      <Hero />
      <About />
      <Products />
      <Characteristic />
      <OtherProducts />
      <Inspiration />
      <Find />
      <Contact />
    </Layout>
  )
}

export default IndexPage

export const Head = SEO
