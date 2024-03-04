import React from "react"

import Layout from "../components/layout"
import Seo from "../components/seo"
import {
  Contact,
  RolloutProductAbout,
  RolloutProductApply,
  RolloutProductCharacteristicItaunasTec,
  RolloutProductTitle,
} from "../sessions"
import AboutProductImg from '../images/_fotos Itaunas Tec/Fotos_Itaunas Tec - Foto 1.jpg'
import ApplyProductImg1 from '../images/_fotos Itaunas Tec/Fotos_Itaunas Tec - 250 367 - Foto 2.jpg'
import ApplyProductImg2 from '../images/_fotos Itaunas Tec/Fotos_Itaunas Tec - 250 367 - Foto 3.jpg'
import ApplyProductImg3 from '../images/_fotos Itaunas Tec/Fotos_Itaunas Tec - 250 367 - Foto 4.jpg'
import ApplyProductImg4 from '../images/_fotos Itaunas Tec/Fotos_Itaunas Tec - 250 367 - Foto 5.jpg'
import ApplyProductImg5 from '../images/_fotos Itaunas Tec/Fotos_Itaunas Tec - 250 367 - Foto 6.jpg'
import ApplyProductImg6 from '../images/_fotos Itaunas Tec/Fotos_Itaunas Tec - 250 367 - Foto 7.jpg'
import ApplyProductImg7 from '../images/_fotos Itaunas Tec/Fotos_Itaunas Tec - 250 367 - Foto 8.jpg'

import scrollTo from 'gatsby-plugin-smoothscroll';

const ItaunasTec = () => {

  const applyImages = [
    ApplyProductImg1,
    ApplyProductImg2,
    ApplyProductImg3,
    ApplyProductImg4,
    ApplyProductImg5,
    ApplyProductImg6,
    ApplyProductImg7
  ]

  return (
    <Layout type="common">
      <Seo title="Trova Brasil | Itaúnas Tec" />
      <RolloutProductTitle productName="Itaúnas Tec" />
      <RolloutProductAbout image={AboutProductImg} text={<>
        <p>O Itaúnas Tec, que encanta com seus tons mais claros, grãos finos e acabamento liso, chega à Trova Brasil com uma nova proposta, que vai além da beleza.</p>
        <p>Com um tratamento antioxidante exclusivo, o Itaúnas Tec se transforma em um material de alta qualidade, com uma beleza estética superior e capaz de resistir às marcas do tempo.</p>
        <p>A singularidade do nosso processo reside na separação do óxido de ferro (Fe2O3), conhecido como hematita, um diferencial que não apenas garante durabilidade, mas também confere delicadeza e suavidade, que permanecem inalteradas com o passar dos anos.</p>
        <p>Com a Trova Brasil é possível ter um material homogêneo, versátil e com poucos veios. O Itaúnas Tec é a fusão entre durabilidade e a essência da beleza atemporal.</p>
      </>} />
      <RolloutProductApply images={applyImages} />
      <RolloutProductCharacteristicItaunasTec />
      <Contact />
    </Layout>
  )
}

export default ItaunasTec
