import React, { FC } from "react"
import { stores } from "../../utils/stores"
import styled from "styled-components"

import { Container, Title } from "../../components"

const Content = styled.div`
  margin-top: 4rem;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: flex-start;
  align-items: flex-start;
  width: 100%;
`

const Column = styled.div`
  flex: 100%;
  padding: 1rem;

  @media (min-width: 576px) { //maior que phones
    flex: 100%;
  }

  @media (min-width: 768px) { //maior que tablets
    flex: 50%;
  }

  @media (min-width: 992px) { //maior que laptops
    flex: 30%;
  }

  @media (min-width: 1200px) { //maior que desktops
    flex: 30%;
  }
`

export const Find: FC = () => (
  <Container id="ondeencontrar">
    <Title title={"Onde encontrar"} />
      {stores.map((store, i) => 
          <Content key={i}>
            <h3>{store.title}</h3>
            <Content>
              {store.itens.map((item, i) => 
                <Column key={i}>
                  <h4 style={{ fontWeight: "bold" }}>{item.name}</h4>
                  {item.phone && <p>Tel.: {item.phone}</p>}
                  <p>{item.address}</p>
                  {item.email && <p>{item.email}</p>}
                  {item.site && <p>{item.site}</p>}
                </Column>
              )}
            </Content>
          </Content>
        )
      }
  </Container>
)
