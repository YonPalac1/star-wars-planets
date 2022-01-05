import React from 'react'
import styled from 'styled-components'

const Foot = styled.footer `
    border-top: solid 1px yellow;
    text-align: center;
    background: black;
    padding: 20px;
    a {
        color: yellow;
    }
`
export const Footer = () => {
    return (
        <Foot>
            <a className="text-center" href="https://github.com/YonPalac1/star-wars-planets" target="_blank">
            Challenge 2022 | by Jonatan Palacios
            </a>
        </Foot>
    )
}