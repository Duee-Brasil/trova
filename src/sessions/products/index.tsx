
import React, { FC } from "react"
import styled from "styled-components"

import { Title, Image } from "../../components"

const Container = styled.div`
  width: 100%;
  padding: 2rem 3rem;
`

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
`

const ProductDescription = styled.div`
  flex: 100%;

  @media (min-width: 576px) { //maior que phones
    flex: 100%;
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
  flex: "16%",
  border: "2px solid rgb(76, 111, 156)",
  height: "auto"
}


export const Products: FC = () => (
  <Container>
    <Title title={"Nossos produtos"} />
    <Content>
      <p>A TROVA trabalha com o travertino Romano PREMIUM e o Navona, pois são os melhores travertinos encontrados na natureza, por causa da sua composição e formação geológica. Ambos têm procedência da mesma região.</p>
      <ProductLine>
        <ProductDescription>
          nanova
          <p>Sua cor é mais clara, chamada “cor de osso”. Possui veios ondulados e mais discretos. Com menos espaços ocos e mais uniforme, esse tipo possui caráter mais exclusivo e raro.</p>
        </ProductDescription>
        <Image src="_fotos Navona/01.png" style={imagesSize}/>
        <Image src="_fotos Navona/02.png" style={imagesSize}/>
        <Image src="_fotos Navona/03.png" style={imagesSize}/>
        <Image src="_fotos Navona/04.png" style={imagesSize}/>
      </ProductLine>
      <ProductLine>
        <ProductDescription>
          Romano Premium
          <p>São pedras com tonalidade clara e homogênea, entre palha e areia, possui veios sutis e furinhos mais discretos.</p>
        </ProductDescription>
        <Image src="_fotos Romano Premium/05.png" style={imagesSize}/>
        <Image src="_fotos Romano Premium/06.png" style={imagesSize}/>
        <Image src="_fotos Romano Premium/07.png" style={imagesSize}/>
        <Image src="_fotos Romano Premium/08.png" style={imagesSize}/>
      </ProductLine>
      <p>Podem ser aplicados na sua forma natural, bruta, sem brilho, resina ou quaisquer outros produtos, sendo colocados em áreas internas ou externas. Uma das principais características do nosso travertino é que ele é atérmico, ou seja, é indicado especialmente para áreas de lazer,  pois, mesmo sob o sol intenso, não absorve calor.</p>
      <p>Sua textura especial torna os produtos antiderrapantes. Além dos benefícios térmicos, são muito mais resistentes e duráveis que qualquer produto cimentício, deixando seu ambiente bonito e sofisticado por muito mais tempo.</p>
    </Content>
  </Container>
)