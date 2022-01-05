import React from "react";
import styled from 'styled-components'
import {useDispatch } from "react-redux";
import {searchResultados} from '../redux/planetsDucks'
import useForm from '../hooks/useForm'
import {useNavigate} from 'react-router-dom';

const SearchBar = styled.div`
        display: flex;
        justify-content: center;
        width: 310px;
        margin: 30px auto 0;
`
const Input = styled.input`
    padding: 10px 13px;
    border-radius: 25px 0 0 25px;
    background: none;
    border: none;
    color: #fff;
    font-size: 20px;
    border-right-style: none;
    box-shadow: 0 0 .2rem #fff,
    0 0 .2rem #fff,
    0 0 .5rem #ffe600,
    0 0 0.8rem #ffe600,
    inset 0 0 1.3rem #ffe600;
    &:focus {
        box-shadow: 0 0 .2rem #fff,
            0 0 .2rem #fff,
            0 0 2rem #ffe600,
            0 0 0.8rem #ffe600,
            0 0 2rem #ffe600,
            inset 0 0 1.3rem #ffe600;
`
const Button = styled.button`
    border-radius: 0 25px 25px 0;
    background: none;
    color: #fff;
    border: none;
    font-size: 20px;
    cursor: pointer;
    padding: 8px 10px;
    border-left-style: none;
    box-shadow: 0 0 .2rem #fff,
                0 0 .2rem #fff,
                0 0 .5rem #ffe600,
                0 0 0.8rem #ffe600,
                inset 0 0 1.3rem #ffe600;
        &:hover {
            color: yellow;
            box-shadow: 0 0 .2rem #fff,
            0 0 .2rem #fff,
            0 0 2rem #ffe600,
            0 0 0.8rem #ffe600,
            0 0 2rem #ffe600,
            inset 0 0 1.3rem #ffe600;
        }
}
`

const Search = () => {
    const [{keywords}, handleInputChange, reset] = useForm({
        keywords: "",
    })
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const handleSearch = (e) =>{
        e.preventDefault()
        if(keywords !== ''){
            dispatch(searchResultados(keywords));
            reset()   
        }
        navigate("/resultados")
    }

    return (
        <SearchBar>
            <form onSubmit={handleSearch}>
                <Input type='search' 
                        name="keywords" 
                        onChange={handleInputChange} 
                        value={keywords} />
                
                <Button type='submit' >
                    <i className="fas fa-search"></i>
                </Button>
            </form>
        </SearchBar>
    )
}

export default Search