import React,{useState, useEffect, useRef} from 'react';

function Search () {
	const [planets, setPlanets] = useState([]);
	const [keyword, setKeyword] = useState('');
    const [loading, setLoading] = useState(true);
	let inputSearch = useRef();

	const url = `https://swapi.dev/api/planets/?search=${keyword}`
    const loadingIco = process.env.PUBLIC_URL + './img/loading.gif'

	useEffect(() => {
		fetch(url)
            .then( r => r.json())
            .then( data => {
                if(!data.Error){
                    setPlanets(data.results)
                    setLoading(false)
                    console.log(data.results)
                } else {				
                    setPlanets([])
                }
	    	});
	}, [keyword])

	const buscarPeli = e => {
		e.preventDefault();
		setKeyword(inputSearch.current.value)
	}

    return (
        <>
        <div className="search">
            <form method="GET" onSubmit={ buscarPeli }>
                <input 
                    type="text"
                    name="keyword"
                    ref={inputSearch} 
                    />
                <button className='btn-search'><i className='fas fa-search'></i></button>
            </form>
        </div>
        <div className="container grid-container">
            {loading 
            ?
                (
                    <div className="text-center">
                        <img className='loadingIco' src={loadingIco} />
                    </div>
                )
                :
                
				planets.length > 0 && planets.map((planet, i) => {
					return (                
                        <article className="c-card neonCard grid-item" key={i}>
                                <header className="c-card__header">
                                    <h2 className="c-card__title">
                                        {planet.name}
                                    <hr></hr>
                                    </h2>
                                </header>
                            
                                <div className="c-card__body">
                                    <p className="c-card__info">
                                        Diametro: 
                                        <b>{planet.diameter}</b>
                                    </p>
                                
                                    <p className="c-card__info">
                                        Clima: 
                                        <b>{planet.climate}</b> 
                                    </p>
                                    
                                    <p className="c-card__info">
                                        Terreno: 
                                        <b>{planet.terrain}</b>
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
			    })
			}
        </div>
        </>
    )
}

export default Search
