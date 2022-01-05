import React from 'react'
import { useDispatch, useSelector } from "react-redux";
import {nextPage,prevPage } from "../redux/planetsDucks";
import styled from 'styled-components'

const Paged = styled.div`
  align-items:center;
  display:flex;
  justify-content:center;
`

const NumberPage = styled.span`
  color:white;
  font-size: 20px;
  font-weight:999;
`

const ButtonPage = styled.button`
  background-color: black;
  border:none;
  border-radius:5px;
  color: yellow;
  cursor:pointer;
  font-weight:999;
  margin:5px 20px 5px 20px;
  padding:15px;
  width:100px;
  &:hover {
    box-shadow: 0 0 .2rem #fff,
        0 0 .2rem #fff,
        0 0 .5rem #ffe600,
        0 0 0.8rem #ffe600,
        inset 0 0 1.3rem #ffe600;
} 
  `
const Pages = () => {

    const count = useSelector((store) => store.planetas.count);
    const dispatch = useDispatch();

    
    return (
        <Paged>
             {
          count <= 1 ? null : <ButtonPage onClick={() => dispatch(prevPage())}>
           <i class="fas fa-chevron-left"></i> BACK
        </ButtonPage>
          
      }
      <NumberPage>{count}</NumberPage>
      
      {count >= 6 ? null : <ButtonPage onClick={() => dispatch(nextPage())}>
        NEXT <i className="fas fa-chevron-right"></i>
      </ButtonPage>}
      
        </Paged>
    )
}

export default Pages