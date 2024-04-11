import React from "react"
import { Title } from "../components"
import { Layout } from "../components/layout"

const Page404 = () => {
return <Layout><div style={{ 
        marginTop: '40dvh'
        }}>
        <Title title={"Página não encontrada"} /></div></Layout>
}

export default Page404

export const Head = () => <meta httpEquiv="refresh" content="3; url=https://trovabrasil.com" />