import React, { FC, ReactNode } from "react"
import styled from "styled-components"

import { Container, Image, Title } from "../../components"

import Charc1 from "../../images/_fotos Itaunas Tec/icone relogio.png"
import Charc2 from "../../images/_fotos Itaunas Tec/icone setas.png"
import Charc3 from "../../images/_fotos Itaunas Tec/icone lampada.png"
import Charc4 from "../../images/_fotos Itaunas Tec/icone estrela.png"

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

export const RolloutProductCharacteristicItaunasTec: FC = () => (
  <Container>
    <Title title={"Características"} />
    <Content>
      <Attribute text={<p>O tratamento antioxidante, que isola o óxido de ferro (Fe2O3) dos outros componentes, garante durabilidade e qualidade superior. O material não sofre com as manchas causadas pela oxidação e mantém a estética original por muito mais tempo.</p>} image={Charc1} />
      <Attribute text={<p>Sua composição clara, granulada e homogênea permite a aplicação do Itaúnas Innovare em diferentes projetos de decoração, trazendo sofisticação e sutileza aos ambientes.</p>} image={Charc2} />
      <Attribute text={<p>Por ser aplicada com um acabamento liso, a pedra Itaúnas Innovare oferece praticidade e um ótimo acabamento para superfícies. Prático e funcional, é uma excelente opção para pisos e revestimentos.</p>} image={Charc3} />
      <Attribute text={<p>Sua beleza única e marcante chama atenção pelos seus veios naturais e claros, resultado da sua formação geológica. Os grãos finos e médios conferem à pedra uma estética leve e agradável.</p>} image={Charc4} />
    </Content>
  </Container>
)
