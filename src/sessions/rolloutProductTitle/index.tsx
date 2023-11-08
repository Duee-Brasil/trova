import React, { FC } from "react"
import styled from "styled-components"

import { Container, Title } from "../../components"

const Content = styled.div`
  margin-top: 4rem;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`

const ProductTileText = styled.div`
  padding: 1rem;
  text-transform: uppercase;
  font-weight: bold;
  font-size: 1.5rem;
`

const ProductTileLine = styled.div`
  flex-grow: 1;
  height: 2px;
  background-color: #4c6f9c;
`

export const RolloutProductTitle: FC<{ productName: string}> = ({productName}) => (
  <Container id="inicio">
    <Title title={"lançamento"} style={{ marginTop: '5rem' }} />
    <Content>
      <ProductTileLine></ProductTileLine>
      <ProductTileText className="destaque">{productName}</ProductTileText>
      <ProductTileLine></ProductTileLine>
    </Content>
  </Container> 
)
