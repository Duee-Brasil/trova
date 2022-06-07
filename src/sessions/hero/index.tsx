import React, { FC } from "react"
import styled from "styled-components";
import HeroVideo from "../../images/Home Trova_1.mp4"

import { Image } from "../../components"
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";

// import required modules
import { Autoplay } from "swiper";

const Container = styled.div`

display: flex;
justify-content: center;
align-items: center;
max-height: 100vh;

.swiper {
  width: 100vw;
  height: 95vh;
}

.swiper-slide {
  display: flex;
  justify-content: center;
  align-items: center;
}

.swiper-slide img {
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
}

`

const Video = styled.video`
  width: 100%;
  height: auto;
  margin: 0;
  margin-top: -30px;
`

export const Hero: FC = () => {

  return (
    <Container id="inicio">
      <Video controls={false} autoPlay muted loop>
        <source src={HeroVideo} type="video/mp4" />
      </Video>
      {/* <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2000,
          disableOnInteraction: false,
        }}
        modules={[Autoplay]}
      >
        <SwiperSlide>Slide 1</SwiperSlide>
        <SwiperSlide><Image src={"_inspire-se/01_Piso Externo/foto.jpg"} alt={"piso externo"} style={{ width: "100%" }} /></SwiperSlide>
        {/* <SwiperSlide><Image src={photo} alt={name} style={{ width: "100%" }} /></SwiperSlide>
        <SwiperSlide><Image src={photo} alt={name} style={{ width: "100%" }} /></SwiperSlide>
        <SwiperSlide><Image src={photo} alt={name} style={{ width: "100%" }} /></SwiperSlide>
        <SwiperSlide><Image src={photo} alt={name} style={{ width: "100%" }} /></SwiperSlide> */}
      {/* </Swiper> */}
    </Container>
  );
}
