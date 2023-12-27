import React, { FC, ReactNode } from "react"
import styled from "styled-components"

import { Container, Title } from "../../components"

const Content = styled.div`
margin: auto;
  margin-top: 2rem;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  padding: auto 2rem;
  width: 90%;

  @media (min-width: 576px) { //maior que phones
    width: 80%;
  }
`

const Column30 = styled.div`
  padding: 1rem;
  flex-basis: 250px;
  flex: 1;
  justify-items: center;
`

const Column70 = styled.div`
  padding: 1rem;
  flex: 3;
  flex-basis: 250px;
  text-align: justify;
`

const ProductImg = styled.img`
  border: 2px solid rgb(76, 111, 156);
  height: auto;
  min-width: 200px;
  object-fit: cover;
  width: 100%;
  margin: auto;
`

export const RolloutProductAbout: FC<{image: string, text: ReactNode}> = ({image, text}) => (
  <Container id="sobre">
    <Content>
      <Column30>
        <ProductImg src={image} alt="product photo" loading="lazy" />
      </Column30>
      <Column70>
        {text}
      </Column70>
    </Content>
  </Container>
)
