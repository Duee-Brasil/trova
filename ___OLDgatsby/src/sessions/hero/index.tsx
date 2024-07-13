import React, { FC } from "react"
import styled from "styled-components";
import HeroVideo from "../../images/Home Trova_1.mp4"
import PisoExternoP from "../../images/_inspire-se/01_Piso Externo/foto.jpg"
import { isMobile } from "../../utils/identify-device"
import { Image } from "../../components"

const Container = styled.div`
display: flex;
justify-content: center;
align-items: center;
padding-top: 50px;
max-height: 100vh;
height: 100%;
`

const Video = styled.video`
  width: 100%;
  height: 100%;
  margin: 0;
  margin-top: -30px;
`

export const Hero: FC = () => {

  return (
    <Container id="inicio">
      {isMobile() ? 
        <Image 
        src={PisoExternoP} 
        alt={'Exemplo de aplicação do travertino Trova'} 
        style={{ width: "100%", height: "auto" }} 
        data-id="larguraAltura"
      /> : 
        <Video src={HeroVideo} controls={false} autoPlay muted loop poster="PisoExternoP" />}
      
    </Container>
  );
}
