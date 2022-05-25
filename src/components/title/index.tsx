import React, { FC } from "react"
import styled from "styled-components"

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  margin: 2rem;
  margin-top: 3rem;
`

const Ornament = `
border-color: #4c6f9c;
border-style: solid;
border-width: 3px;
width: 40px;
height: 15px;   
`

const SupDraw = styled.div`
  ${Ornament};
  border-bottom: none;
`

const InfDraw = styled.div`
  ${Ornament};
  border-top: none;
`
const Text = styled.h2`
  margin: 0.2rem;
  padding: 0;
  line-height: 1.2rem;
  font-size: 1.1rem;
  text-transform: uppercase;
  font-weight: normal;
`

export const Title: FC<{ title: string }> = ({ title }) => {
  return (
    <Container>
      <SupDraw />
      <Text>{title}</Text>
      <InfDraw />
    </Container>
  )
}
