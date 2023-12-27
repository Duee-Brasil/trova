import React from "react"

import Layout from "../components/layout"
import Seo from "../components/seo"
import {
  Contact,
  RolloutProductAbout,
  RolloutProductApply,
  RolloutProductCharacteristicPietraZafferina,
  RolloutProductCompare,
  RolloutProductTitle,
} from "../sessions"
import AboutProductImg from '../images/_fotos Pietra Zafferina/Fotos_Pietra Zfferina1.webp'
import ApplyProductImg1 from '../images/_fotos Pietra Zafferina/Fotos_Pietra Zafferina2.webp'
import ApplyProductImg2 from '../images/_fotos Pietra Zafferina/Fotos_Pietra Zfferina3.webp'
import ApplyProductImg3 from '../images/_fotos Pietra Zafferina/Fotos_Pietra Zfferina4.webp'
import ApplyProductImg4 from '../images/_fotos Pietra Zafferina/Fotos_Pietra Zfferina5.webp'

const PietraZafferina = () => {

  const applyImages = [
    ApplyProductImg1,
    ApplyProductImg2,
    ApplyProductImg3,
    ApplyProductImg4
  ]

  return (
    <Layout type = "lp">
      <Seo title="Trova Brasil | Pietra Zafferina" />
      <RolloutProductTitle productName="Pietra Zafferina" />
      <RolloutProductAbout image={AboutProductImg} text={<>
        <p>Com características únicas e marcantes, a Pietra Zafferina é o novo produto da Trova Brasil. Extraída de áreas geológicas específicas, ela se destaca por detalhes exclusivos que a tornam verdadeiramente singular.</p>
        <p>Quando utilizada como revestimento em piscinas, exibe um efeito de cores que varia de acordo com a profundidade da água, que realça seus tons esverdeados. Os resultados obtidos conferem movimento e personalidade, adicionando um toque de sofisticação natural ao espaço.</p>
        <p>A beleza da Pietra Zafferina não apenas encanta, mas também cria uma sensação de tranquilidade e proximidade com a natureza. Sua resistência à dilatação garante segurança a sua capacidade de absorção do calor proporciona uma experiência ainda mais agradável, mantendo a superfície aquecida e criando um equilíbrio térmico ideal para sua piscina.</p>
        <p>A Pietra Zafferina é a escolha inteligente para elevar o seu projeto, oferecendo uma combinação incomparável de beleza, sofisticação e funcionalidade. Sua capacidade de transformar o ambiente a torna uma opção excepcional para aqueles que buscam qualidade e elegância.</p>
      </>} />
      <RolloutProductApply images={applyImages} />
      <RolloutProductCharacteristicPietraZafferina />
      <RolloutProductCompare />
      <Contact />
    </Layout>
  )
}

export default PietraZafferina
