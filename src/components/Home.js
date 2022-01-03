import React from 'react';
import useFetch from '../hooks/useFetch'
import { Header } from './Header'
import Search from './Search';

export default function Home(){ 
    
    return (
        <div>
            <Header />
            <Search />
        </div>
    )
}