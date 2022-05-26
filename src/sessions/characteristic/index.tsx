import React, { FC } from "react"
import styled from "styled-components"

import { Image, Title } from "../../components"

const Container = styled.div`
  width: 100%;
  padding: 2rem 3rem;
`

const Content = styled.div`
  width: 100%;
  margin-top: 4rem;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  align-items: flex-start;
`

const AttributeContainer = styled.div`
padding: 0.5rem;
flex: 100%;

@media (min-width: 576px) { //maior que phones
    flex: 100%;
  }

  @media (min-width: 768px) { //maior que tablets
    flex: 50%;
  }

  @media (min-width: 992px) { //maior que laptops
    flex: 33%;
  }

  @media (min-width: 1200px) { //maior que desktops
    flex: 25%;
  }
`

const Text = styled.p`
  margin-top: 1rem;
`

const Attribute = ({text, image}: {text: string, image: string}) => {
  return <AttributeContainer>
    <Image src={image} style={{ width: "40px" }}/>
    <Text>{text}</Text>
  </AttributeContainer>
}

export const Characteristic: FC = () => (
  <Container>
    <Title title={"Características"} />
    <Content>
      <Attribute text={"O Travertino é atérmico, sendo perfeito para projetos que precisam ser arejados, áreas internas, externas e, claro, fogos de chão e lareiras."} image={"_icones caracteristicas/01.png"} />
      <Attribute text={"É antiderrapante, sendo indicado para áreas como piscinas, degraus e banheiros; garantindo segurança."} image={"_icones caracteristicas/02.png"} />
      <Attribute text={"Além da qualidade superior, o travertino da Trova é versátil, elegante, seguro e durável. Podendo ser aplicados de forma natural, bruta, sem brilho, resina ou qualquer outro produto."} image={"_icones caracteristicas/03.png"} />
      <Attribute text={"Garantimos a uniformidade e homogeneidade do projeto, entregando peças em ladrilhos, com a mesma padronagem de cor e de veios."} image={"_icones caracteristicas/04.png"} />
    </Content>
  </Container>
)
