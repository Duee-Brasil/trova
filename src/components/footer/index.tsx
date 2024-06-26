import { faFacebookSquare, faInstagram, faPinterest } from "@fortawesome/free-brands-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import React, { useEffect } from "react"
import styled from "styled-components"

const Container = styled.footer`
  background-color: #4c6f9c;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  padding: 1.5rem;
  width: 100%;
`

const Paragraph = styled.p`
  color: white;
  font-size: 0.6rem;

  a {
    color: white;
    text-decoration: none;
    font-family: 'Lato', sans-serif;

    &:visited {
      color: white;
    }
  }


`

const Footer = () => {

  // useEffect(() => {

  //   const scriptElement = document.createElement('script');

  //   scriptElement.textContent = "const todasAsImagens = document.querySelectorAll('[data-id=larguraAltura]'); todasAsImagens.forEach((imagem) => { const largura = imagem.clientWidth; const altura = imagem.clientHeight; imagem.setAttribute('width', largura.toString()+'px'); imagem.setAttribute('height', altura.toString()+'px'); }); ";

  //   document?.body?.appendChild(scriptElement);

  //   return () => {
  //     document.body.removeChild(scriptElement);
  //   };
  // }, []); 
  
  return (
  <Container>
    <Paragraph>
      <a href="https://facebook.com/trovabrasil" aria-label="Facebook Trova Brasil"><FontAwesomeIcon icon={faFacebookSquare} color="white" fontSize={"1.5rem"} style={{ margin: "auto 1rem" }} /></a>
        <a href="https://instagram.com/trovatravertino" aria-label="Instagram Trova Brasil"><FontAwesomeIcon icon={faInstagram} color="white" fontSize={"1.5rem"} style={{ margin: "auto 1rem" }} /></a>
        <a href="https://br.pinterest.com/trovatravertino/_created/" aria-label="Pinterest Trova Brasil"><FontAwesomeIcon icon={faPinterest} color="white" fontSize={"1.5rem"} style={{ margin: "auto 1rem" }} /></a>
    </Paragraph>
      <Paragraph>Produzido por <a href="https://dueebrasil.com.br" aria-label="Duee Brasil">Duee Brasil</a></Paragraph>
    <Paragraph>© Trova Brasil {new Date().getFullYear()}. Todos os direitos reservados</Paragraph>
  </Container>
);
};

export default Footer
