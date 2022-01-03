import React from "react";  
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from '../components/Navbar';
import Home from '../components/Home';
import Favorites from "../components/Favorites";
import {Login} from "../components/Login";
import {Register} from "../components/Register";

export default function AppRouter () {
  
    return (
        <BrowserRouter>
        <Navbar />
        <div className='container' >
          <Routes>
            <Route exact path="/"element={<Home /> } />
            <Route exact path="/favorites"element={<Favorites /> } />
            <Route exact path="/login"element={<Login /> } />
            <Route exact path="/register"element={<Register /> } />
          </Routes>
        </div>
      </BrowserRouter>
    )
}