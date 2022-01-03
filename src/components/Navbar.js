import React from "react";
import { Link } from 'react-router-dom'

export default function Navbar() {

    const toggleMobileMenu = () => {
        document.querySelector('#menu').classList.toggle('active')
        document.querySelector('.mobile-bar').classList.toggle('active')
    }

    return (
        <>
        <nav>
            <div className="mobile-bar" onClick={toggleMobileMenu}> 
                <span></span>
                <span></span>
                <span></span>
            </div>
            <div>
                <ul id="menu">
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                </ul>
                <ul className="menu">
                    <div>
                        <li>
                            <Link to="/register">Register</Link>
                            <Link to="/login">Log in</Link>
                        </li>
                    </div>
                </ul>
            </div>
        </nav>
        
        </>
    )
}