import React, { FC, ReactNode } from "react"
import styled from "styled-components"

import { Container, Title } from "../../components"

const numImagesPerRow = 5;

const Content = styled.div`
  width: 100%;
  margin-top: 4rem;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  align-content: stretch;
  text-align: justify;
  padding: 5rem;
  gap: 4rem;
`

const AttributeContainer = styled.div`
  flex-basis: 250px;
  flex: 1 0 calc(100% / ${numImagesPerRow});
  max-width: calc(100% / ${numImagesPerRow});
  min-width: 250px;

  img {
    border: 2px solid rgb(76, 111, 156);
    width: 100%;
  }
`

export const RolloutProductApply: FC<{images: Array<string>}> = ({images}) => (
  <Container>
    <Title title={"Aplicações"} />
    <Content>
      {images.map((image, i) => {
        return <AttributeContainer><img src={image} alt={i.toString()} /></AttributeContainer>
      })}
    </Content>
  </Container>
)
