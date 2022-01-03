import React from 'react';

export const Register = () => {
    return (
        <div className='container'>
            <form  className='login-form'>
                <h2 className='neon'>Register</h2>
                <label>Ingresar nombre</label>
                <input 
                    type="text"
                    className='i-form'
                    name="name"
                ></input>
                <label>Ingresar Email</label>
                <input 
                    type="text"
                    className='i-form'
                    name="email"
                ></input>
                <label>Ingresar Password</label>
                <input 
                    type="text"
                    className='i-form'
                    name="password"
                ></input>
                <label>Reingresar Password</label>
                <input 
                    type="text"
                    className='i-form'
                    name="password2"
                ></input>
                <button>Ingresar</button>
            </form>
        </div>
    )
}
