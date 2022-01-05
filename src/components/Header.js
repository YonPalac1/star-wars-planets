import React from 'react'
import styled from 'styled-components'
import Search from './Search'
import ImgHeader from '../assets/img/img-header.png'

const Contenedor = styled.div `
    align-items: center;
    background:black;
    display : flex;
    flex-direction: column;
    justify-content:space-around;
    padding:30px;
`
const HeaderImg = styled.img `
    width: 310px;
    padding-top: 25px;
    @media(min-width: 610px){
        width: 600px;
    }
`

export const Header = () => {
    return (
        <Contenedor>
            <HeaderImg src={ImgHeader} />
            <Search/>
        </Contenedor>
    )
}