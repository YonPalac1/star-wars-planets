import React from 'react'

const logo = process.env.PUBLIC_URL + './img/img-header.png'
export const Header = () => {
    return (
        <header className='container'>
            <div className='header'>
                <img className='header-logo' src={ logo } />
            </div>
        </header>
    )
}
