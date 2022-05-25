// If you don't want to use TypeScript you can delete this file!
import React, { FC } from "react"
import { PageProps, Link, graphql } from "gatsby"

import { Title } from "../../components"

export const About: FC = () => (
    <>
        <Title title={"Sobre a Trova"} />
        <p>
            This means that you can create and write <code>.ts/.tsx</code> files for
            your pages, components, and <code>gatsby-*</code> configuration files (for
            example <code>gatsby-config.ts</code>).
        </p>
        <p>
            For type checking you'll want to install <code>typescript</code> via npm
            and run <code>tsc --init</code> to create a <code>tsconfig</code> file.
        </p>
        <p>
            You're currently on the page <code>{location.pathname}</code> which was
        </p>
    </>
)

