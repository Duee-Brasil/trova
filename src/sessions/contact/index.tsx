import { faWhatsapp } from "@fortawesome/free-brands-svg-icons"
import { faEnvelope, faPhone } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import React, { FC } from "react"
import styled from "styled-components"

import { Button, Container, Title } from "../../components"

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

const Column = styled.div`
  flex: 100%;
  padding: 2rem;

  p {
    a {
      color: inherit;
      text-decoration: none;
      font-family: 'Lato', sans-serif;

      &:visited {
        color: inherit;
        text-decoration: none;
        font-family: 'Lato', sans-serif;
      }
    }

  }

  @media (min-width: 576px) { //maior que phones
    flex: 100%;
  }

  @media (min-width: 768px) { //maior que tablets
    flex: 100%;
  }

  @media (min-width: 992px) { //maior que laptops
    flex: 40%;
  }

  @media (min-width: 1200px) { //maior que desktops
    flex: 40%;
  }
`

const InputContainer = styled.div`
  width: 100%;
  margin: 1rem 0;
  position: relative;
  border-radius: 4px;
`

const InputLabel = styled.label`
  color: #999;
  padding: 1.3rem 30px 0.8rem 30px;
  position: absolute;
  top: 10px;
  left: 0;
  -webkit-transition: all 0.25s ease;
  transition: all 0.25s ease;
  pointer-events: none;
`

const fieldProperties = `
  padding: 2rem;
  border: 1px solid rgba(76, 111, 156, 0.6);
  width: 100%;
  font-size: 1rem;
  background-color: rgba(255, 255, 255, 0.4);
  border-radius: 2px;
  box-sizing: border-box;

  &::placeholder {
    color: transparent;
  }

  &::-ms-input-placeholder {
    color: transparent;
  }

  &:focus { outline: 0; }

  &~ span {
    width: 100%;
    -webkit-transition: all 0.075s ease;
    transition: all 0.075s ease;
  }

  &:focus ~ label, 
  &:valid ~ label,
  &:not(:placeholder-shown):not(:focus) ~ label {
    font-size: 0.9em;
    color: #999;
    top: -10px;
    -webkit-transition: all 0.225s ease;
    transition: all 0.225s ease;
  }

  &:not(:placeholder-shown):not(:focus):invalid {
      border-color: red;
  } 
`

const InputField = styled.input`
  ${fieldProperties}
`

const InputTextField = styled.textarea`
  ${fieldProperties}
`

export const Contact: FC = () => {
  const handleSubmit = (e: any) => {
    e.preventDefault();

    let formData = new FormData(e.currentTarget);

    const message = `
      Nome: ${formData.get("name")}
      Telefone: ${formData.get("phone")}
      E-mail: ${formData.get("email")}
      Mensagem: ${formData.get("message")}
    `

    var link = "mailto:contato@trovabrasil.com"
      + "?subject=" + encodeURIComponent("Contato pelo site")
      + "&body=" + encodeURIComponent(message)
      ;

    window.location.href = link;

    // fetch("/", {
    //   method: "POST",
    //   headers: { "Content-Type": "application/x-www-form-urlencoded" },
    //   body: new URLSearchParams(formData).toString(),
    // })
    //   .then(() => console.log("Form successfully submitted"))
    //   .catch((error) => alert(error));
  };

  return <Container id="contato">
    <Title title={"Entre em contato"} />
    <Content>
      <Column>
        <p>
          <a href="https://api.whatsapp.com/send?phone=5511970693793"><FontAwesomeIcon icon={faWhatsapp} style={{ margin: "auto 0.5rem" }} /> +55 11 97069-3793</a> / <a href="tel:1125327158"><FontAwesomeIcon icon={faPhone} style={{ margin: "auto 0.5rem" }} /> +55 11 2532-7158</a>
        </p>
        <p>
          <a href="mailto:contato@trovabrasil.com"><FontAwesomeIcon icon={faEnvelope} style={{ margin: "auto 0.5rem" }} /> contato@trovabrasil.com</a>
        </p>
      </Column>
      <Column>
        <form name="contact" method="POST" target="_blank" data-netlify="true" onSubmit={handleSubmit} style={{ width: "100%" }} id="contact_form">
          <InputContainer>
            <InputField type="text" name="name" required pattern=".*\S.*" placeholder="Nome completo:" />
            <InputLabel>Nome completo:</InputLabel>
          </InputContainer>
          <InputContainer>
            <InputField type="phone" name="phone" required placeholder="Telefone:" />
            <InputLabel>Telefone: </InputLabel>
          </InputContainer>
          <InputContainer>
            <InputField type="email" name="email" required placeholder="Insira seu e-mail:" />
            <InputLabel>Insira seu e-mail: </InputLabel>
          </InputContainer>
          <InputContainer>
            <InputTextField name="message" required placeholder="Insira sua mensagem:" ></InputTextField>
            <InputLabel>Insira sua mensagem: </InputLabel>
          </InputContainer>
          <InputContainer>
            <Button type="submit" id="send_form">Enviar</Button>
          </InputContainer>
        </form>
      </Column>
    </Content>
  </Container>
}
