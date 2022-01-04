import React, { useEffect, useState } from 'react'
import { getAuth, onAuthStateChanged } from 'firebase/auth'
import { Link } from 'react-router-dom'
import { login } from '../actions/auth'
import { useDispatch, useSelector } from 'react-redux';
import { startLogout } from '../actions/auth';

export default function Navbar() {
    const dispatch = useDispatch()
    const [isLogged, setIsLogged] = useState(false)
    const {name} = useSelector(state => state.auth)

    const handleLogout = () => {
        dispatch(startLogout())
    }
    
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
    
    const toggleMobileMenu = () => {
        document.querySelector('#menu').classList.toggle('active')
        document.querySelector('.mobile-bar').classList.toggle('active')
    }
    const showAlert = () => {
        document.querySelector('.alert').classList.toggle('active')
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
                    <li>
                        <button onClick={handleLogout}>
                            Salir
                        </button>
                    </li>
                    
                    
                </ul>
                <ul className="menu">
                    <div>
                        {
                            !isLogged ?
                        <>
                            <li>
                                <Link to="/register">Register</Link>
                            </li>
                            <li>
                                <Link to="/login">Log in</Link>
                            </li>
                        </>
                        :
                        <>
                        <li>
                            <b>{name}</b>
                        </li>
                            <li>
                                {
                                isLogged ?
                                <Link to="/favorites">Favoritos</Link>
                                : 
                                <button onClick={showAlert}>Favoritos</button>
                                }
                            </li>
                            
                        </>
                        }
                    </div>
                </ul>
            </div>
        </nav>

        {/* Modal */}
        <div className='alert'>
            <div className='mensaje' >
                <h3>Debes 
                    <Link to="/Login"> ingresar </Link>
                    para ver tus favoritos</h3>
                <div className='buttons'>
                    <button className='btn'>
                        <Link to="/Login">ingresar</Link>
                    </button>                
                    <button onClick={showAlert} className='btn'>Cancelar</button>
                </div>
            </div>
        </div>
        
        </>
    )
}