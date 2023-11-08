import React, { FC, ReactNode } from "react"
import styled from "styled-components"

import { Container, Image, Title } from "../../components"

import Charc1 from "../../images/_fotos Pietra Zafferina/icone relogio.png"
import Charc2 from "../../images/_fotos Pietra Zafferina/icone cadeado.png"
import Charc3 from "../../images/_fotos Pietra Zafferina/icone engrenagem.png"
import Charc4 from "../../images/_fotos Pietra Zafferina/icone energia.png"

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

span {
  color: #4c6f9c;
}
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

export const RolloutProductCompare: FC = () => (
  <Container>
    <Title title={"Compare"} />
    <Content>
      <p>A Pietra Zafferina tem características estéticas semelhantes à pedra Hijau, como seu aspecto natural e cores que remetem ao mar. Porém apresentam diferenças significativas em termos de durabilidade, segurança e economia.</p>
      <Attribute text={<><p><span>Pietra Zafferina:</span> Apresenta um coeficiente de dilatação extremamente baixo, o que a torna ideal para espaços sujeitos a variações de temperatura.</p>
      <p><span>Pedra Hijau:</span> Por ser uma pedra vulcânica, a Hijau é mais vulnerável à dilatação em temperaturas elevadas, o que pode resultar em desprendimento da parede.</p></>} image={Charc1} />
      <Attribute text={<><p><span>Pietra Zafferina:</span> Possui uma superfície natural que oferece aderência suficiente para ser antiderrapante quando seca.</p>
        <p><span>Pedra Hijau:</span> Sua dilatação também pode afetar a segurança, especialmente em áreas molhadas.</p></>} image={Charc2} />
      <Attribute text={<><p><span>Pietra Zafferina:</span> Não mencionada no texto, mas geralmente requer menos manutenção devido à sua resistência à dilatação e às propriedades térmicas.</p>
        <p><span>Pedra Hijau:</span> Pode absorver impurezas, como óleos e protetor solar, exigindo cuidados especiais na limpeza.</p></>} image={Charc3} />
      <Attribute text={<><p><span>Pietra Zafferina:</span> Apresenta propriedades térmicas que mantêm a água aquecida, resultando em economia de até 40% nos custos com aquecimento.</p>
        <p><span>Pedra Hijau:</span> Exige mão-de-obra qualificada para sua colocação e cuidados especiais na limpeza, que podem gerar altos custos.</p></>} image={Charc4} />
    </Content>
  </Container>
)
