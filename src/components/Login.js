import React from 'react'

export const Login = () => {
    return (
        <div className='container'>
            <form className='login-form'>
                <h2 className='neon'>Login</h2>
                <label>Ingresar nombre</label>
                <input 
                type="text"
                className='i-form'
                ></input>
                <label>Ingresar Email</label>
                <input 
                type="text"
                className='i-form'
                ></input>
                <button>Ingresar</button>
            </form>
        </div>
    )
}
