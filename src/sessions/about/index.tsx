import React, { FC } from "react"
import styled from "styled-components"

import { Container, Title } from "../../components"

const Content = styled.div`
  margin-top: 4rem;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  align-items: flex-start;
`

const Column = styled.div`
  flex: 100%;
  padding: 1rem;

  @media (min-width: 576px) { //maior que phones
    flex: 100%;
  }

  @media (min-width: 768px) { //maior que tablets
    flex: 50%;
  }

  @media (min-width: 992px) { //maior que laptops
    flex: 30%;
  }

  @media (min-width: 1200px) { //maior que desktops
    flex: 30%;
  }
`

const BarContent = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  position: relative;
  margin-top: 1.5rem;
  margin-bottom: 1.5rem;
`

const BarText = styled.div`
  border-top: 2px solid #4c6f9c;
  width: 95%;
  text-transform: uppercase;
`

const BarPercentage = styled.div`
  border: 2px solid #4c6f9c;
  position: absolute;
  right: 0;
  bottom: 45%;
  background-color: #fff;
  padding-left: 3px;
  padding-right: 3px;
`

const Bar = ({ text, percentage }: { text: string, percentage: string }) => {
  return <BarContent>
    <BarText className="destaque">{text}</BarText>
    <BarPercentage className="destaque">{percentage}%</BarPercentage>
  </BarContent>
}

export const About: FC = () => (
  <Container id="sobreatrova">
    <Title title={"Sobre a Trova"} />
    <Content>
      <Column>
        <p>
          A Trova é especializada exclusivamente na importação do travertino romano. E por sermos especialistas, trazemos para o Brasil somente o travertino nobre e de mais alta qualidade que existe na natureza.
        </p>
        <p>
          Um produto exclusivo no mercado nacional.
        </p>
      </Column>
      <Column>
        <p>
          A seleção de todo nosso travertino é feita pessoalmente, garantindo procedência e um material de padrão estético superior e homogêneo.
        </p>
        <p>
          A Trova tem o compromisso de selecionar e entregar o melhor produto do mercado, por isso trabalhamos somente com as melhores pedreiras do mundo, extraindo o melhor travertino de áreas geológicas específicas.
        </p>
      </Column>
      <Column>
        <Bar text="alta qualidade" percentage="100" />
        <Bar text="escolhido a mão" percentage="100" />
        <Bar text="revestimento para seu projeto" percentage="100" />
      </Column>
    </Content>
  </Container>
)
