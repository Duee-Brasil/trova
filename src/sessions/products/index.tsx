
import React, { FC } from "react"
import styled from "styled-components"


import Navona1 from "../../images/_fotos Navona/01.png"
import Navona2 from "../../images/_fotos Navona/02.png"
import Navona3 from "../../images/_fotos Navona/03.png"
import Navona4 from "../../images/_fotos Navona/04.png"

import Romano1 from "../../images/_fotos Romano Premium/05 - 202 135.png"
import Romano2 from "../../images/_fotos Romano Premium/06 - 202 135.png"
import Romano3 from "../../images/_fotos Romano Premium/07 - 202 135.png"
import Romano4 from "../../images/_fotos Romano Premium/08 - 202 135.png"

import { Title } from "../../components"
import { Container } from "../../components/layout"

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
  width: 100%;

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

const ProductTitle = ({ text }: { text: string }) => {
  return <ProductTileContent>
    <ProductTileText className="destaque">{text}</ProductTileText>
    <ProductTileLine></ProductTileLine>
  </ProductTileContent>
}

export const Products: FC = () => (
  <div style={Container} id="produtos">
    <Title title={"Nossos produtos"} />
    <Content>
      <p>A TROVA trabalha com o travertino Romano PREMIUM e o Navona, pois são os melhores travertinos encontrados na natureza, por causa da sua composição e formação geológica. Ambos têm procedência da mesma região.</p>
      <ProductLine>
        <ProductDescription>
          <ProductTitle text="navona" />
          <p>Sua cor é mais clara, chamada “cor de osso”. Possui veios ondulados e mais discretos. Com menos espaços ocos e mais uniforme, esse tipo possui caráter mais exclusivo e raro.</p>
        </ProductDescription>
        <ProductImg src={Navona1} alt="travertino navona" loading="lazy" data-id="larguraAltura" />
        <ProductImg src={Navona2} alt="travertino navona" loading="lazy" data-id="larguraAltura" />
        <ProductImg src={Navona3} alt="travertino navona" loading="lazy" data-id="larguraAltura" />
        <ProductImg src={Navona4} alt="travertino navona" loading="lazy" data-id="larguraAltura" />
      </ProductLine>
      <ProductLine>
        <ProductDescription>
          <ProductTitle text="Romano Premium" />
          <p>São pedras com tonalidade clara e homogênea, entre palha e areia, possui veios sutis e furinhos mais discretos.</p>
        </ProductDescription>
        <ProductImg src={Romano1} alt="travertino romano" loading="lazy" data-id="larguraAltura" />
        <ProductImg src={Romano2} alt="travertino romano" loading="lazy" data-id="larguraAltura" />
        <ProductImg src={Romano3} alt="travertino romano" loading="lazy" data-id="larguraAltura" />
        <ProductImg src={Romano4} alt="travertino romano" loading="lazy" data-id="larguraAltura" />
      </ProductLine>
      <p>Podem ser aplicados na sua forma natural, bruta, sem brilho, resina ou quaisquer outros produtos, sendo colocados em áreas internas ou externas. Uma das principais características do nosso travertino é que ele é atérmico, ou seja, é indicado especialmente para áreas de lazer,  pois, mesmo sob o sol intenso, não absorve calor.</p>
      <p>Sua textura especial torna os produtos antiderrapantes. Além dos benefícios térmicos, são muito mais resistentes e duráveis que qualquer produto cimentício, deixando seu ambiente bonito e sofisticado por muito mais tempo.</p>
    </Content>
  </div>
)
