import React from 'react';
import { Header } from './Header'
import Navbar from './Navbar';
import Search from './Search';

export default function Home(){ 
    
    return (
        <div>
            <Navbar />
            <Header />
            <Search />
        </div>
    )
}