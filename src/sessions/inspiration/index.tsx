
import React, { FC } from "react"
import styled from "styled-components"

import { Title, Image, Container } from "../../components"

import PisoExternoI from "../../images/_inspire-se/01_Piso Externo/icone.png"
import PisoExternoP from "../../images/_inspire-se/01_Piso Externo/foto.jpg"

import EscadaExternaI from "../../images/_inspire-se/02_Escada Externa/icone.png"
import EscadaExternaP from "../../images/_inspire-se/02_Escada Externa/foto.jpg"

import LavaboI from "../../images/_inspire-se/03_lavabo/icone.png"
import LavaboP from "../../images/_inspire-se/03_lavabo/foto.jpg"

import RevestPisoI from "../../images/_inspire-se/04_Revestimento de Piso/icone.png"
import RevestPisoP from "../../images/_inspire-se/04_Revestimento de Piso/foto.jpg"

import RevestExtI from "../../images/_inspire-se/05_revestimento externo/icone.png"
import RevestExtP from "../../images/_inspire-se/05_revestimento externo/foto.jpg"

import RevestPiscinaI from "../../images/_inspire-se/06_Revestimento Piscina/icone.png"
import RevestPiscinaP from "../../images/_inspire-se/06_Revestimento Piscina/foto.jpg"

import RevestFogoChaoI from "../../images/_inspire-se/07_Revestimento Fogo de chao/icone.png"
import RevestFogoChaoP from "../../images/_inspire-se/07_Revestimento Fogo de chao/foto.jpg"

import RevestParedeI from "../../images/_inspire-se/08_Revestimento de Parede/icone.png"
import RevestParedeP from "../../images/_inspire-se/08_Revestimento de Parede/foto.jpg"

import BancadaBanheiroI from "../../images/_inspire-se/09_Bancada de Banheiro/icone.png"
import BancadaBanheiroP from "../../images/_inspire-se/09_Bancada de Banheiro/foto.jpg"

import LareiraI from "../../images/_inspire-se/10_Lareira/icone.png"
import LareiraP from "../../images/_inspire-se/10_Lareira/foto.jpg"

const Content = styled.div`
  width: 100%;
  max-width: 1440px;
  margin: 0;
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
  padding: 2rem 1rem;
  display: flex;
  flex-direction: row;
  align-items: center;
  row-gap: 1rem;
  column-gap: 1rem;
  border-bottom: 1px solid rgba(76, 111, 156, 0.2);
  font-size: 0.7rem;

  div:first-child {
    width: 24%;
    justify-content: center;
    text-align: center;

    p {
      text-transform: uppercase;
      text-align: center;
      text-overflow: ellipsis;
      overflow: hidden;
    }
  }

  div:last-child {
    width: 76%;
  }

  @media (min-width: 576px) { //maior que phones
    flex: 100%;
  }

  @media (min-width: 768px) { //maior que tablets
    flex: 40%;
    font-size: 0.8rem;
  }

  @media (min-width: 992px) { //maior que laptops
    flex: 40%;
    font-size: initial;
  }

  @media (min-width: 1200px) { //maior que desktops
    flex: 40%;
  }
`

const Product = ({ icon, name, photo }: { icon: string, name: string, photo: string }) => {
  return <ProductContainer>
    <div>
      <Image src={icon} alt={name} style={{ width: "50%", height: "50%", maxWidth: "60px", margin: "auto" }} data-id="larguraAltura" />
      <p>{name}</p>
    </div>
    <div>
      <Image src={photo} alt={name} style={{ width: "100%" }} data-id="larguraAltura" />
    </div>
  </ProductContainer>
}

export const Inspiration: FC = () => (
  <Container id="inspirese">
    <Title title={"Inspire-se"} />
    <Content>
      <Product
        icon={PisoExternoI}
        name="piso externo"
        photo={PisoExternoP}
        data-id="larguraAltura"
      />
      <Product
        icon={EscadaExternaI}
        name="escada externa"
        photo={EscadaExternaP}
        data-id="larguraAltura"
      />
      <Product
        icon={LavaboI}
        name="lavabo"
        photo={LavaboP}
        data-id="larguraAltura"
      />
      <Product
        icon={RevestPisoI}
        name="Revestimento de Piso"
        photo={RevestPisoP}
        data-id="larguraAltura"
      />
      <Product
        icon={RevestExtI}
        name="revestimento externo"
        photo={RevestExtP}
        data-id="larguraAltura"
      />
      <Product
        icon={RevestPiscinaI}
        name="Revestimento Piscina"
        photo={RevestPiscinaP}
        data-id="larguraAltura"
      />
      <Product
        icon={RevestFogoChaoI}
        name="Revestimento Fogo de Chão"
        photo={RevestFogoChaoP}
        data-id="larguraAltura"
      />
      <Product
        icon={RevestParedeI}
        name="Revestimento de Parede"
        photo={RevestParedeP}
        data-id="larguraAltura"
      />
      <Product
        icon={BancadaBanheiroI}
        name="Bancada de Banheiro"
        photo={BancadaBanheiroP}
        data-id="larguraAltura"
      />
      <Product
        icon={LareiraI}
        name="Lareira"
        photo={LareiraP}
        data-id="larguraAltura"
      />
    </Content>
  </Container>
)
