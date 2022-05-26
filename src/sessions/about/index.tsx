import React, { FC } from "react"
import styled from "styled-components"

import { Title } from "../../components"

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
    flex: 33%;
  }

  @media (min-width: 1200px) { //maior que desktops
    flex: 33%;
  }
`

export const About: FC = () => (
  <Container>
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
        <p>
          alta qualidade 100%
        </p>
        <p>
          escolhido a mão 100%
        </p>
        <p>
          revestimento para seu projeto 100%
        </p>
      </Column>
    </Content>
  </Container>
)
