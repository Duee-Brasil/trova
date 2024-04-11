import React, { FC, ReactNode } from "react"
import styled from "styled-components"

import { Image, Title } from "../../components"

import Charc1 from "../../images/_fotos Pietra Zafferina/icone cadeado.png"
import Charc2 from "../../images/_fotos Pietra Zafferina/icone energia.png"
import Charc3 from "../../images/_fotos Pietra Zafferina/icone estrela.png"
import Charc4 from "../../images/_fotos Pietra Zafferina/icone setas.png"
import { Container } from "../../components/layout"

const Content = styled.div`
  width: 100%;
  margin-top: 4rem;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  align-items: flex-start;
  text-align: justify;
  padding-left: 2rem;
  padding-right: 2rem;
  gap: 2rem;

    @media (min-width: 768px) { //maior que tablets
    padding-left: 5rem;
    padding-right: 5rem;
  }
`

const AttributeContainer = styled.div`
padding: 0.5rem;
flex: 1;
flex-basis: 250px;
`

const Text = styled.p`
  margin-top: 1rem;
`

const Attribute = ({text, image}: {text: ReactNode, image: string}) => {
  return <AttributeContainer>
    <Image src={image} alt={text} style={{ width: "40px" }}/>
    <Text>{text}</Text>
  </AttributeContainer>
}

export const RolloutProductCharacteristicPietraZafferina: FC = () => (
  <div style={Container}>
    <Title title={"Características"} />
    <Content>
      <Attribute text={<p>Superfície natural que oferece aderência suficiente para tornar a pedra antiderrapante quando seca, garantindo segurança e mantendo um aspecto agradável e único. É indicado principalmente para áreas aquáticas.</p>} image={Charc1} />
      <Attribute text={<p>A Pietra Zafferina é uma solução eficiente e econômica para o aquecimento de piscinas ao ar livre, devido às suas propriedades térmicas que mantém a água aquecida. Isso resulta em uma economia de até 40% nos custos com aquecimento, uma vez que a temperatura é facilmente regulada por meio da absorção da luz do sol.</p>} image={Charc2} />
      <Attribute text={<p>Sua textura única, tons de verde variando entre o claro e o escuro e o efeito vibrante quando em contato com a água são características que garantem sofisticação e exclusividade para seu projeto. Uma estética tropical, que traz movimento para a composição.</p>} image={Charc3} />
      <Attribute text={<p>O coeficiente de dilatação da Pietra Zafferina é extremamente baixo, o que confere uma grande vantagem quando aplicada em espaços que sofrem variação de temperatura. Essa característica impede o risco de rachaduras ou desprendimento da pedra, garantindo assim, maior durabilidade.</p>} image={Charc4} />
    </Content>
  </div>
)
