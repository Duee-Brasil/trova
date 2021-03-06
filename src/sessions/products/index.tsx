
import React, { FC } from "react"
import styled from "styled-components"

import { Title, Image, Container } from "../../components"

import Nanova1 from "../../images/_fotos Navona/01.png"
import Nanova2 from "../../images/_fotos Navona/02.png"
import Nanova3 from "../../images/_fotos Navona/03.png"
import Nanova4 from "../../images/_fotos Navona/04.png"

import Romano1 from "../../images/_fotos Romano Premium/05.png"
import Romano2 from "../../images/_fotos Romano Premium/06.png"
import Romano3 from "../../images/_fotos Romano Premium/07.png"
import Romano4 from "../../images/_fotos Romano Premium/08.png"

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
    flex: 50%;
  }

  @media (min-width: 768px) { //maior que tablets
    flex: 50%;
  }

  @media (min-width: 992px) { //maior que laptops
    flex: 32%;
  }

  @media (min-width: 1200px) { //maior que desktops
    flex: 32%;
  }
`

const imagesSize = {
  width: "15%",
  border: "2px solid rgb(76, 111, 156)",
  height: "auto",
  minWidth: "100px",
  objectFit: "cover"
}

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
  <Container id="produtos">
    <Title title={"Nossos produtos"} />
    <Content>
      <p>A TROVA trabalha com o travertino Romano PREMIUM e o Navona, pois s??o os melhores travertinos encontrados na natureza, por causa da sua composi????o e forma????o geol??gica. Ambos t??m proced??ncia da mesma regi??o.</p>
      <ProductLine>
        <ProductDescription>
          <ProductTitle text="nanova" />
          <p>Sua cor ?? mais clara, chamada ???cor de osso???. Possui veios ondulados e mais discretos. Com menos espa??os ocos e mais uniforme, esse tipo possui car??ter mais exclusivo e raro.</p>
        </ProductDescription>
        <Image src={Nanova1} alt="travertino nanova" style={imagesSize} />
        <Image src={Nanova2} alt="travertino nanova" style={imagesSize} />
        <Image src={Nanova3} alt="travertino nanova" style={imagesSize} />
        <Image src={Nanova4} alt="travertino nanova" style={imagesSize} />
      </ProductLine>
      <ProductLine>
        <ProductDescription>
          <ProductTitle text="Romano Premium" />
          <p>S??o pedras com tonalidade clara e homog??nea, entre palha e areia, possui veios sutis e furinhos mais discretos.</p>
        </ProductDescription>
        <Image src={Romano1} alt="travertino romano" style={imagesSize} />
        <Image src={Romano2} alt="travertino romano" style={imagesSize} />
        <Image src={Romano3} alt="travertino romano" style={imagesSize} />
        <Image src={Romano4} alt="travertino romano" style={imagesSize} />
      </ProductLine>
      <p>Podem ser aplicados na sua forma natural, bruta, sem brilho, resina ou quaisquer outros produtos, sendo colocados em ??reas internas ou externas. Uma das principais caracter??sticas do nosso travertino ?? que ele ?? at??rmico, ou seja, ?? indicado especialmente para ??reas de lazer,  pois, mesmo sob o sol intenso, n??o absorve calor.</p>
      <p>Sua textura especial torna os produtos antiderrapantes. Al??m dos benef??cios t??rmicos, s??o muito mais resistentes e dur??veis que qualquer produto ciment??cio, deixando seu ambiente bonito e sofisticado por muito mais tempo.</p>
    </Content>
  </Container>
)
