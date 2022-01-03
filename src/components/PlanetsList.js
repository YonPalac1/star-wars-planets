import React from 'react'
import useFetch from '../hooks/useFetch';

export const PlanetsList = () => {
    
    const { loading, data } = useFetch(`https://swapi.dev/api/planets/`);
    const loadingIco = process.env.PUBLIC_URL + './img/loading.gif'

    return (
        <>
        { loading ?
            (
                <div className="text-center">
                    <img className='loadingIco' src={loadingIco} />
                </div>
            )
            :
            (
            <div className="container grid-container">
                    {data.map((planets, i) => {
                        return (
                            <article className="c-card neonCard grid-item" key={i}>
                                <header className="c-card__header">
                                    <h2 className="c-card__title">
                                        {planets.name}
                                    <hr></hr>
                                    </h2>
                                </header>
                            
                                <div className="c-card__body">
                                    <p className="c-card__info">
                                        Diametro: 
                                        <b>{planets.diameter}</b>
                                    </p>
                                
                                    <p className="c-card__info">
                                        Clima: 
                                        <b>{planets.climate}</b> 
                                    </p>
                                    
                                    <p className="c-card__info">
                                        Terreno: 
                                        <b>{planets.terrain}</b>
                                    </p>
                                </div>
                            
                                    <hr></hr>
                                <footer className="c-card__footer">
                                    <button>
                                        <i className='fas fa-star'></i>  
                                    </button>
                                </footer>
                          </article>
                        )
                    })}
            </div>
        
        )
        }
        </>
    )
}

