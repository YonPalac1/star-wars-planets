import React from 'react'
import { Routes, Route } from 'react-router-dom'
import { Login } from '../components/Login'
import { Register } from '../components/Register'

export const AuthRoutes = () => {
    return (
        <div className="auth__main">
            <div className="auth__box-container">
                <Routes>
                    <Route path="/login" element={<Login />} />
                    <Route path="/register" element={<Register />} />
                </Routes>
            </div>
        </div>
    )
}
