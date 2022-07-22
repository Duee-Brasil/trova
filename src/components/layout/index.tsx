import styled, { createGlobalStyle } from "styled-components"

import React, { FC, ReactElement } from "react"

import Sequoia from "../../fonts/Sequoia.woff2"
import Footer from "../footer"
import Header from "../header"

import Wpp from "../../images/whatsapp.svg"

const GlobalStyle = createGlobalStyle`

  @font-face {
    font-family: 'Sequoia';
    src: url(${Sequoia});
  }

  html {
    scroll-behavior: smooth;
  }

  body {
    margin: 0;
    padding: 0;
    max-width: 100vw;
    min-height: 100vh;
    background-color: #fff;
    color: #606060;
    font-family: 'Lato', sans-serif;
    font-stretch: expanded;
    overflow-y: scroll;
    scroll-snap-type: y mandatory;
  }

  * {
    box-sizing: border-box;
  }

  .destaque {
    font-family: 'Sequoia', sans-serif;
  }

  h1, h2, h3, h4, h5, h6, button, strong, a {
    font-family: 'Sequoia', sans-serif;
    font-weight: normal;
  }
`

const Main = styled.main`
  min-height: 100vh;
`

export const Container = styled.div`
  padding: 2rem 3rem;
  max-width: 1440px;
  margin: auto;
  scroll-snap-align: center;
`

const Wppbutton = styled.a`
  position: fixed;
  bottom: 20px;
  right: 40px;
  font-size: 3em;
  color: #25d366;
  width: fit-content;
  height: fit-content;
  text-decoration: none;
  text-shadow: 0 0 5px gray;
  z-index: 100000;

  img {
    width: 50px;
    height: 50px;
  }
`

const Layout: FC<{ children: ReactElement | Array<ReactElement> }> = ({ children }) => {

  return (
    <>
      <GlobalStyle />

      <Main>
        {children}
      </Main>

      <Footer />

      <Wppbutton
        href="https://api.whatsapp.com/send?phone=5511970693793"
        target="_blank"
        id="whatsapp_button"
      >
        <img src={Wpp} alt="contato por Whatsapp" />
      </Wppbutton>

      <Header />
    </>
  )
}

export default Layout
