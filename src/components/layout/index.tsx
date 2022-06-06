import styled, { createGlobalStyle } from "styled-components"

import React, { FC, ReactElement } from "react"

const GlobalStyle = createGlobalStyle`

  @font-face {
    font-family: 'Sequoia';
    src: url('../../fonts/Sequoia Regular.ttf') format('truetype');
    font-weight: normal;
    font-style: normal;
    font-display: fallback;
  }

  body {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    max-width: 100vw;
    min-height: 100vh;
    background-color: #ebebeb;
  }

  * {
    font-family: 'Lato', sans-serif;
    font-stretch: expanded;
    color: #606060;
    font-size: 1.1rem;
  }

  .destaque {
    font-family: 'Sequoia', sans-serif;
  }

  h1, h2, h3, h4, h5, h6, button, strong {
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
`

const Layout: FC<{ children: ReactElement | Array<ReactElement> }> = ({ children }) => {

  return (
    <>
      <GlobalStyle />

      <Main>
        {children}
      </Main>

      <footer
          style={{
            marginTop: `var(--space-5)`,
            fontSize: `var(--font-sm)`,
          }}
        >
          © {new Date().getFullYear()} &middot; Built with
          {` `}
          <a href="https://www.gatsbyjs.com">Gatsby</a>
        </footer>
    </>
  )
}

export default Layout
