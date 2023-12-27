
import React, { FC } from "react"
import styled from "styled-components"
import { Link } from "gatsby"

import { Title, Image, Container } from "../../components"

import PietraZafferina1 from '../../images/_fotos Pietra Zafferina/Fotos_Pietra Zafferina2 - 250 364.webp'
import PietraZafferina2 from '../../images/_fotos Pietra Zafferina/Fotos_Pietra Zfferina3 - 250 364.webp'
import PietraZafferina3 from '../../images/_fotos Pietra Zafferina/Fotos_Pietra Zfferina4 - 250 364.webp'
import PietraZafferina4 from '../../images/_fotos Pietra Zafferina/Fotos_Pietra Zfferina5 - 250 364.webp'

import ItaunasTec1 from '../../images/_fotos Itaunas Tec/Fotos_Itaunas Tec - 250 367 - Foto 4.webp'
import ItaunasTec2 from '../../images/_fotos Itaunas Tec/Fotos_Itaunas Tec - 250 367 - Foto 6.webp'
import ItaunasTec3 from '../../images/_fotos Itaunas Tec/Fotos_Itaunas Tec - 250 367 - Foto 7.webp'
import ItaunasTec4 from '../../images/_fotos Itaunas Tec/Fotos_Itaunas Tec - 250 367 - Foto 8.webp'

const Content = styled.div`
  width: 100%;
  max-width: 1440px;
  margin-top: 4rem;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  align-items: flex-start;
`

const ProductLine = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  width: 100%;
  margin: 2rem 1rem;
  justify-content: center;
`

const ProductDescription = styled.div`
  flex: 100%;
  p {
    padding: 1rem;
  }

  @media (min-width: 576px) { //maior que phones
    flex: 100%;
  }

  @media (min-width: 768px) { //maior que tablets
    flex: 100%;
  }

  @media (min-width: 992px) { //maior que laptops
    flex: 32%;
  }

  @media (min-width: 1200px) { //maior que desktops
    flex: 32%;
  }
`

const ProductImg = styled.img`
  border: 2px solid rgb(76, 111, 156);
  height: auto;
  min-width: 100px;
  object-fit: cover;

  @media (min-width: 576px) { //maior que phones
    width: 100%;
    margin: 5px;
  }

  @media (min-width: 768px) { //maior que tablets
    width: 45%;
    margin: 5px;
  }

  @media (min-width: 992px) { //maior que laptops
    width: 15%;
    margin: 0;
  }

  @media (min-width: 1200px) { //maior que desktops
    width: 15%;
    margin: 0;
  }
`

const ProductTileContent = styled.div`
  display: flex;
  align-items: center;
`

const ProductTileText = styled.div`
  padding-right: 1rem;
  text-transform: uppercase;
`

const ProductTileLine = styled.div`
  flex-grow: 1;
  height: 2px;
  background-color: #4c6f9c;
`

const LinkButton = styled(Link)`
    background-color: transparent;
    border: 1px solid #4c6f9c;
    font-size: 0.8rem;
    padding: 0.7rem 1.3rem;
    transition: 0.25s;
    color: #4c6f9c;
    cursor: pointer;
    margin-left: 1rem;

    &:hover,
    &:focus {
        box-shadow: inset 9em 0 0 0 #4c6f9c;
        color: white;
    }
`

const ProductTitle = ({ text }: { text: string }) => {
  return <ProductTileContent>
    <ProductTileText className="destaque">{text}</ProductTileText>
    <ProductTileLine></ProductTileLine>
  </ProductTileContent>
}

export const OtherProducts: FC = () => (
  <Container id="outrosprodutos">
    <Title title={"Outros produtos"} />
    <Content>
      <ProductLine>
        <ProductDescription>
          <ProductTitle text="Pietra Zafferina" />
          <p>Sua textura única, tons de verde variando entre o claro e o escuro e o efeito vibrante quando em contato com a água são características que garantem sofisticação e exclusividade para seu projeto.</p>
          <LinkButton to="/pietrazafferina">Saber mais</LinkButton>
        </ProductDescription>
        <ProductImg src={PietraZafferina1} alt="pietra zafferina" loading="lazy" data-id="larguraAltura" />
        <ProductImg src={PietraZafferina2} alt="pietra zafferina" loading="lazy" data-id="larguraAltura" />
        <ProductImg src={PietraZafferina3} alt="pietra zafferina" loading="lazy" data-id="larguraAltura" />
        <ProductImg src={PietraZafferina4} alt="pietra zafferina" loading="lazy" data-id="larguraAltura" />
      </ProductLine>
      <ProductLine>
        <ProductDescription>
          <ProductTitle text="Itaúnas Tec" />
          <p>Sua composição clara, granulada e homogênea permite a aplicação do Itaúnas Innovare em diferentes projetos de decoração, trazendo sofisticação e sutileza aos ambientes.</p>
          <LinkButton to="/itaunastec">Saber mais</LinkButton>
        </ProductDescription>
        <ProductImg src={ItaunasTec1} alt="itaunas tec" loading="lazy" data-id="larguraAltura" />
        <ProductImg src={ItaunasTec2} alt="itaunas tec" loading="lazy" data-id="larguraAltura" />
        <ProductImg src={ItaunasTec3} alt="itaunas tec" loading="lazy" data-id="larguraAltura" />
        <ProductImg src={ItaunasTec4} alt="itaunas tec" loading="lazy" data-id="larguraAltura" />
      </ProductLine>
      </Content>
  </Container>
)
