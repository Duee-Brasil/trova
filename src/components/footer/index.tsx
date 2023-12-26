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

  useEffect(() => {
    // Criar um elemento script
    const scriptElement = document.createElement('script');

    // Configurar o conteúdo do script (pode ser um URL de script externo ou o próprio código)
    scriptElement.textContent = "const todasAsImagens = document.querySelectorAll('img');  todasAsImagens.forEach((imagem) => {  imagem.style.width = '300px';  imagem.style.height = '200px'; });";

    // Adicionar o script ao final do corpo do documento
    document.body.appendChild(scriptElement);

    // Limpar o script quando o componente for desmontado
    return () => {
      document.body.removeChild(scriptElement);
    };
  }, []); 
  
  return (
  <Container>
    <Paragraph>
      <a href="https://facebook.com/trovabrasil"><FontAwesomeIcon icon={faFacebookSquare} color="white" fontSize={"1.5rem"} style={{ margin: "auto 1rem" }} /></a>
      <a href="https://instagram.com/trovatravertino"><FontAwesomeIcon icon={faInstagram} color="white" fontSize={"1.5rem"} style={{ margin: "auto 1rem" }} /></a>
      <a href="https://br.pinterest.com/trovatravertino/_created/"><FontAwesomeIcon icon={faPinterest} color="white" fontSize={"1.5rem"} style={{ margin: "auto 1rem" }} /></a>
    </Paragraph>
    <Paragraph>Produzido por <a href="https://dueebrasil.com.br">Duee Brasil</a></Paragraph>
    <Paragraph>© Trova Brasil {new Date().getFullYear()}. Todos os direitos reservados</Paragraph>
  </Container>
);
};

export default Footer
