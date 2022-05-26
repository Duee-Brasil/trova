
import React, { FC } from "react"
import styled from "styled-components"

import { Title, Image } from "../../components"

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

const ProductContainer = styled.div`
  flex: 100%;
  margin: 0;
  padding: 2rem;
  display: flex;
  flex-direction: row;
  align-items: center;
  row-gap: 1rem;
  column-gap: 1rem;
  border-bottom: 1px solid rgba(76, 111, 156, 0.2);

  div:first-child {
    flex: 25%;

    p {
      text-transform: uppercase;
    }
  }

  div:last-child {
    flex: 75%
  }

  @media (min-width: 576px) { //maior que phones
    flex: 100%;
  }

  @media (min-width: 768px) { //maior que tablets
    flex: 50%;
  }

  @media (min-width: 992px) { //maior que laptops
    flex: 50%;
  }

  @media (min-width: 1200px) { //maior que desktops
    flex: 50%;
  }
`

const Product = ({ icon, name, photo }: { icon: string, name: string, photo: string }) => {
  return <ProductContainer>
    <div>
      <Image src={icon} alt={name} style={{ width: "100%" }} />
      {/* <p>{name}</p> */}
    </div>
    <div>
      <Image src={photo} alt={name} style={{ width: "100%" }} />
    </div>
  </ProductContainer>
}

export const Inspiration: FC = () => (
  <Container>
    <Title title={"Inspire-se"} />
    <Content>
      <Product
        icon="_inspire-se/01_Piso Externo/icone.png"
        name="piso externo"
        photo="_inspire-se/01_Piso Externo/foto.jpg"
      />
      <Product
        icon="_inspire-se/02_Escada Externa/icone.png"
        name="escada externa"
        photo="_inspire-se/02_Escada Externa/foto.jpg"
      />
      <Product
        icon="_inspire-se/03_lavabo/icone.png"
        name="lavabo"
        photo="_inspire-se/03_lavabo/foto.jpg"
      />
      <Product
        icon="_inspire-se/04_Revestimento de Piso/icone.png"
        name="Revestimento de Piso"
        photo="_inspire-se/04_Revestimento de Piso/foto.jpg"
      />
      <Product
        icon="_inspire-se/05_revestimento externo/icone.png"
        name="revestimento externo"
        photo="_inspire-se/05_revestimento externo/foto.jpg"
      />
      <Product
        icon="_inspire-se/06_Revestimento Piscina/icone.png"
        name="Revestimento Piscina"
        photo="_inspire-se/06_Revestimento Piscina/foto.jpg"
      />
      <Product
        icon="_inspire-se/07_Revestimento Fogo de chao/icone.png"
        name="Revestimento Fogo de Chão"
        photo="_inspire-se/07_Revestimento Fogo de chao/foto.jpg"
      />
      <Product
        icon="_inspire-se/08_Revestimento de Parede/icone.png"
        name="Revestimento de Parede"
        photo="_inspire-se/08_Revestimento de Parede/foto.jpg"
      />
      <Product
        icon="_inspire-se/09_Bancada de Banheiro/icone.png"
        name="Bancada de Banheiro"
        photo="_inspire-se/09_Bancada de Banheiro/foto.jpg"
      />
      <Product
        icon="_inspire-se/10_Lareira/icone.png"
        name="Lareira"
        photo="_inspire-se/10_Lareira/foto.jpg"
      />
    </Content>
  </Container>
)
