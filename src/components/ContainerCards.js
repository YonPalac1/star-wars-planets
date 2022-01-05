import React from 'react'
import Cards from './Cards'
import styled from 'styled-components'
import Pages from './Pages'

import 'animate.css'

const Fragment = styled.div`
background: black;
background-repeat: no-repeat;
background-size:cover;
background-attachment: fixed;
padding: 25px 0;
margin-bottom:0px;
min-height:100vh;
`

const ContainerCard = styled.div`
    display: grid;
    grid-template-columns: auto;
    padding: 10px;
    margin:0 auto;
    justify-content:center;
    max-width: 1024px;
    @media (min-width:500px){
        display: grid;
        grid-template-columns: repeat(2, minmax(0, 1fr));
        padding: 10px;
        grid-gap: 10px;
    }
    @media (min-width:720px){
        display: grid;
        grid-template-columns: repeat(3, minmax(0, 1fr));
        padding: 10px;
        grid-gap: 10px;
    }
    @media (min-width:1024px){
        display: grid;
        grid-template-columns: repeat(4, minmax(0, 1fr));
        padding: 10px;
        grid-gap: 10px;
    }
`

const ContainerCards = () => {
    return (
        <Fragment>
        <ContainerCard className='animate__animated animate__zoomIn' >
            <Cards />     
       </ContainerCard>
        <Pages/>
        
        </Fragment>
    )
}

export default ContainerCards