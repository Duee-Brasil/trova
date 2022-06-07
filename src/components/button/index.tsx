import React, { ButtonHTMLAttributes, FC } from "react"
import styled from "styled-components"

const Styled = styled.button`
    background-color: transparent;
    border: 3px solid #4c6f9c;
    font-size: 1.3rem;
    padding: 0.7rem 1.3rem;
    transition: 0.25s;
    color: #4c6f9c;
    cursor: pointer;

    &:hover,
    &:focus {
        box-shadow: inset 6.5em 0 0 0 #4c6f9c;
        color: white;
    }
`

export const Button: FC<ButtonHTMLAttributes<{}>> = (props) => {
    return (
        <Styled {...props} />
    )
}
