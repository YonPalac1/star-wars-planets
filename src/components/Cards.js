import React,{useEffect,useState} from 'react'
import styled from 'styled-components'
import CheckboxFavorite from './CheckboxFavorite'

//imports de redux
import { useDispatch, useSelector } from "react-redux";
import {obtenerPlanetasAccion} from "../redux/planetsDucks";

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

const Cards = () => {
    
    const dispatch = useDispatch();

    const [favorito, setFavorito] = useState([])

    const planetas = useSelector((store) => store.planetas.array);
    
    useEffect(() => {
        dispatch(obtenerPlanetasAccion())
      }, []) 
      
    
    return (
        <>
        { 
            planetas.map((item) => (

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
            
        </>
    )
}
export default Cards