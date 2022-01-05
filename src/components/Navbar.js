import React from 'react'
import styled from 'styled-components'

import {Link} from 'react-router-dom';

const Container = styled.div`
    background: black;
    border-bottom: 1px solid yellow;
    display:flex;
    justify-content:space-around;
    position: fixed;
    width: 100%;
    `
    const Enlace = styled(Link)`
    color: yellow;
    font-size:20px;
    padding: 8px 10px;
    text-decoration:none;
    &:hover {
        box-shadow: 0 0 .2rem #fff,
            0 0 .2rem #fff,
            0 0 .5rem #ffe600,
            0 0 0.8rem #ffe600,
            inset 0 0 1.3rem #ffe600;
    }
` 

const ParteDeAbajo = () => {
    return (
        <Container>
            <Enlace to='/'>Planetas </Enlace>
            <Enlace to="/favorite">Favoritos</Enlace>
        </Container>
    )
}

export default ParteDeAbajo