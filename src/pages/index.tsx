import * as React from "react"

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/mousewheel";

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
import { Mousewheel, Pagination } from "swiper";

const Index = () => {

  return (
    <Layout>
      <Seo title="Trova Brasil" />
      <Swiper
        direction={"horizontal"}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination, Mousewheel]}
        mousewheel={true}
        slidesPerView={1}
        spaceBetween={30}
      >
        <SwiperSlide><Hero /></SwiperSlide>
        <SwiperSlide><About /></SwiperSlide>
        <SwiperSlide><Products /></SwiperSlide>
        <SwiperSlide><Characteristic /></SwiperSlide>
        <SwiperSlide><Inspiration /></SwiperSlide>
        <SwiperSlide><Contact /></SwiperSlide>
      </Swiper>
    </Layout>
  )
}

export default Index
