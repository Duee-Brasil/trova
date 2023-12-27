import React, { FC } from "react"
import styled from "styled-components"

import { Container, Image, Title } from "../../components"

import Charc1 from "../../images/_icones caracteristicas/01.webp"
import Charc2 from "../../images/_icones caracteristicas/02.webp"
import Charc3 from "../../images/_icones caracteristicas/03.webp"
import Charc4 from "../../images/_icones caracteristicas/04.webp"

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
    flex: 47%;
  }

  @media (min-width: 992px) { //maior que laptops
    flex: 30%;
  }

  @media (min-width: 1200px) { //maior que desktops
    flex: 21%;
  }
`

const Text = styled.p`
  margin-top: 1rem;
`

const Attribute = ({text, image}: {text: string, image: string}) => {
  return <AttributeContainer>
    <Image src={image} alt={text} style={{ width: "40px" }}/>
    <Text>{text}</Text>
  </AttributeContainer>
}

export const Characteristic: FC = () => (
  <Container>
    <Title title={"Características"} />
    <Content>
      <Attribute text={"O Travertino é atérmico, sendo perfeito para projetos que precisam ser arejados, áreas internas, externas e, claro, fogos de chão e lareiras."} image={Charc1} data-id="larguraAltura" />
      <Attribute text={"É antiderrapante, sendo indicado para áreas como piscinas, degraus e banheiros; garantindo segurança."} image={Charc2} data-id="larguraAltura" />
      <Attribute text={"Além da qualidade superior, o travertino da Trova é versátil, elegante, seguro e durável. Podendo ser aplicados de forma natural, bruta, sem brilho, resina ou qualquer outro produto."} image={Charc3} data-id="larguraAltura" />
      <Attribute text={"Garantimos a uniformidade e homogeneidade do projeto, entregando peças em ladrilhos, com a mesma padronagem de cor e de veios."} image={Charc4} data-id="larguraAltura" />
    </Content>
  </Container>
)
