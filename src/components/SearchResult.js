import React,{useState} from 'react'
import styled from 'styled-components'
import CheckboxFavorite from './CheckboxFavorite'
import {useSelector } from "react-redux";

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
const Container = styled.div`
    border: 0.2rem solid #fff;
    border-radius: 1rem;
    box-shadow: 0 0 .2rem #fff,
            0 0 .2rem #fff,
            0 0 .5rem #ffe600,
            0 0 0.8rem #ffe600,
            inset 0 0 1.3rem #ffe600;
    color: white;
    padding: 20px;
    cursor: pointer; 
    &:hover {
        box-shadow: 0 0 .2rem #fff,
                0 0 .2rem #fff,
                0 0 2rem #ffe600,
                0 0 0.8rem #ffe600,
                0 0 2rem #ffe600,
                inset 0 0 1.3rem #ffe600;
    }
`

const PName = styled.h3`
    color: yellow;
`
const PValues = styled.p`
    font-size:16px;
    margin: 3px 0 5px 0;
    text-transform: uppercase;
`
const ValuesTerrain = styled.p`
    font-size:16px;
    margin: 5px 0 10px 0;
    text-transform: uppercase;
`
const Footer = styled.div`
    display:flex;
    justify-content: flex-end;
`
const Fragment = styled.div`
    background: black;
    background-repeat: no-repeat;
    background-size:cover;
    height: 100%;
    margin-bottom:0px;
    padding: 25px 0;
`
const MessageNoPlanet = styled.p`
    color: white;
    font-size: 32px;
    height: 100vh;
    text-align:center;
    width: 310px;
    text-shadow:0 0 .2rem #fff,
                0 0 .2rem #fff,
                0 0 .5rem #ffe600,
                0 0 0.8rem #ffe600,
                inset 0 0 1.3rem #ffe600;
    @media(min-width: 500px){
        width: 500px;
    }
    @media(min-width: 720px){
        width: 710px;
    }
    @media(min-width: 1024px){
        width: 1000px;
    }
`
const SearchResult = () => {
    const [favorito, setFavorito] = useState([])
    const resultados = useSelector((store) =>store.planetas.searchResult)

    return (

        <Fragment>
        <ContainerCard>
        {resultados.length === 0 ? <MessageNoPlanet>No tenemos un planeta con ese nombre</MessageNoPlanet> :
        resultados.map(item =>(
        <Container key={item.name}>
        <div className='name'>
                <PName>{item.name}</PName>
            </div>
            <hr></hr>
            <div className='diameter'>
                <PValues><b>Diameter: </b> {item.diameter}</PValues>
            </div>
            <div className='climate'>
                <PValues><b>Climate: </b> {item.climate}</PValues>
            </div>
            <div className='terrain'>
                <ValuesTerrain><b>Terrain: </b> {item.terrain}</ValuesTerrain>
            </div>
            <hr></hr>
            <div className='footer'>
                <Footer>
                <CheckboxFavorite setFavorito={setFavorito} favorito={favorito} item={item} />
                </Footer>
            </div>
            
    </Container>

        ))
         
    }
   </ContainerCard>
   </Fragment>

    )
}

export default SearchResult