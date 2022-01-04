import React, { useEffect, useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { getAuth, onAuthStateChanged } from 'firebase/auth'
import { useDispatch } from 'react-redux'
import { login } from '../actions/auth'

import Favorites from '../components/Favorites'
import Home from '../components/Home'
import { Login } from '../components/Login'
import { Register } from '../components/Register'

export const AppRouter = () => {
    const [isLogged, setIsLogged] = useState(false);
    const dispatch = useDispatch()

    useEffect(() => {
        onAuthStateChanged(getAuth(), user => {
            if (user?.uid) {
                setIsLogged(true)
                dispatch(login(user.uid, user.displayName));
            } else {
                setIsLogged(false)
            }
        })
    }, [dispatch,setIsLogged]);
    return (
        <BrowserRouter>
            <div>
                <Routes>
                    <Route
                        path="/"
                        element={
                            <Home />
                        }
                    />
                    <Route
                        path="/login"
                        element={
                            isLogged
                                ? <Home />
                                : <Login />
                        }
                    />
                    <Route
                        path="/register"
                        element={
                            isLogged
                                ? <Home />
                                : <Register />
                        }
                    />
                    <Route
                        path="/favorites"
                        element={<Favorites />}
                    />
                </Routes>
            </div>

        </BrowserRouter>
    )
}
