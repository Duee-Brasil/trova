import React, { useState } from "react"

import Layout from "../components/layout"
import Seo from "../components/seo"
import {
  About,
  Characteristic,
  Contact,
  Hero,
  Inspiration,
  Products,
} from "../sessions"
import ReactPageScroller from "react-page-scroller";
import Header from "../components/header";

const Index = () => {
  const [currentPage, setCurrentPage] = useState<number | undefined>()

  const handlePageChange = (number: number) => {
    setCurrentPage(number)
  };

  const handleBeforePageChange = (number: number) => {
    console.log(number);
  };

  return (
    <Layout>
      <Seo title="Trova Brasil" />
      {/* <div style={{ marginTop: "80px"}}> */}
      {/* <ReactPageScroller
        pageOnChange={handlePageChange}
        onBeforePageScroll={handleBeforePageChange}
        customPageNumber={currentPage}
      > */}
        <Hero />
        <About />
        <Products />
        <Characteristic />
        <Inspiration />
        <Contact />
      {/* </ReactPageScroller> */}
      {/* </div> */}
      <Header />
    </Layout>
  )
}

export default Index
