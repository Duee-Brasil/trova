import React, { FC } from "react"
import styled from "styled-components";
import HeroVideo from "../../images/Home Trova_1.mp4"

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
      {/* <Video controls={false} autoPlay muted loop>
        {/* <source src={HeroVideo} type="video/mp4" /> */}
        {/* <source src={"../../../static/Home Trova_1.mp4"} type="video/mp4" />
      </Video> */}
      <Video src={HeroVideo} controls={false} autoPlay muted loop />
    </Container>
  );
}
