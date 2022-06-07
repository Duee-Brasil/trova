import { Image } from "../../components"
import React from "react"
import styled from "styled-components"
import { menuLinks } from "../../utils/menulinks"

const Container = styled.header`
  background-color: #4c6f9c;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-around;
  align-items: center;
  padding: 0.5rem 1rem;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
`

const LogoContainer = styled.div`
  height: 50px;
`

const LinksContainer = styled.div`
  margin: 1rem 2rem;
`

const LinksText = styled.a`
  color: white;
  text-decoration: none;
  margin-left: 1rem;
  margin-right: 1rem;

  &:visited {
    color: white;
  }
`

const Header = () => (
  <Container>
    <LogoContainer>
      <Image src={"_logos/logo_white.png"} alt={"Trova logo"} style={{ width: "132px", position: "absolute" }} />
    </LogoContainer>
    <LinksContainer>
      {menuLinks.map(link => {
        return <LinksText href={link.link} key={link.name}>{link.name}</LinksText>
      })}
    </LinksContainer>
  </Container>
)

export default Header
