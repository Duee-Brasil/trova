import React, { FC } from "react"
import styled from "styled-components"

import { Container, Title } from "../../components"

const Content = styled.div`
  margin-top: 4rem;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  align-items: flex-start;
`

const Column = styled.div`
  flex: 100%;
  padding: 1rem;

  @media (min-width: 576px) { //maior que phones
    flex: 100%;
  }

  @media (min-width: 768px) { //maior que tablets
    flex: 100%;
  }

  @media (min-width: 992px) { //maior que laptops
    flex: 47%;
  }

  @media (min-width: 1200px) { //maior que desktops
    flex: 47%;
  }
`

export const Contact: FC = () => {
  const handleSubmit = (e: any) => {
    e.preventDefault();
    
    let formData = new FormData(e.currentTarget);

    console.log(formData.get("name"))

    // fetch("/", {
    //   method: "POST",
    //   headers: { "Content-Type": "application/x-www-form-urlencoded" },
    //   body: new URLSearchParams(formData).toString(),
    // })
    //   .then(() => console.log("Form successfully submitted"))
    //   .catch((error) => alert(error));
  };

  return <Container>
    <Title title={"Entre em contato"} />
    <Content>
      <Column>
        <p>
          +55 11 97069-3793 / +55 11 2532-7158
        </p>
        <p>
          contato@trovabrasil.com
        </p>
      </Column>
      <Column>
        <form name="contact" method="POST" data-netlify="true" onSubmit={handleSubmit}>
          <p>
            <label>Nome completo: <input type="text" name="name" /></label>
          </p>
          <p>
            <label>Telefone: <input type="phone" name="phone" /></label>
          </p>
          <p>
            <label>Insira seu e-mail: <input type="email" name="email" /></label>
          </p>
          <p>
            <label>Insira sua mensagem: <textarea name="message"></textarea></label>
          </p>
          <p>
            <button type="submit">Enviar</button>
          </p>
        </form>
      </Column>
    </Content>
  </Container>
}
