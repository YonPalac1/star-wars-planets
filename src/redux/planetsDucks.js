import axios from 'axios'

// Const
const dataInicial = {
    array:[],
    count : 1 ,
    favorite:[],
    searchResult:[],
    keywords:''

}
const OBTENER_PLANETAS_EXITO ='OBTENER_PLANETAS_EXITO'
const NEXT_PAGE ='NEXT_PAGE'
const PREV_PAGE = 'PREV_PAGE'
const ADD_TO_FAVORITE = 'ADD_TO_FAVORITE'
const REMOVE_TO_FAVORITE = 'REMOVE_TO_FAVORITE'
const ALL_PLANETS_EXITO =  'ALL_PLANETS_EXITO' 
const SEARCH_RESULT = 'SEARCH_RESULT'

//Reducer
export default function planetReducer (state = dataInicial,action){
    switch (action.type) {
        case OBTENER_PLANETAS_EXITO:
            return{...state , array:action.payload}

        case NEXT_PAGE:
            return{...state,array:action.payload.array , count: action.payload.count}

        case PREV_PAGE:
            return{...state,array:action.payload.array , count: action.payload.count}
       
        case ADD_TO_FAVORITE:
            return{...state ,favorite:[...state.favorite,action.payload]}
        
        case REMOVE_TO_FAVORITE:
            return {...state, favorite: state.favorite.filter(element => element.name !== action.payload.name)}
        
        case ALL_PLANETS_EXITO:
            return {...state,allPlanets:action.payload}
        case SEARCH_RESULT:
            return {...state,searchResult:action.payload}
        default:
            return state
    }
}

//Acciones
export const obtenerPlanetasAccion = () => async (dispatch, getState) =>{

    const count = getState().planetas.count
    
    try {
        const res = await axios.get(`https://swapi.dev/api/planets/?page=${count}`)
        dispatch({
            type:'OBTENER_PLANETAS_EXITO',
            payload: res.data.results
            
        })
        
    }catch(error){
        console.log(error)
    }
}

export const nextPage = () => async (dispatch,getState) =>{

    const count = getState().planetas.count
    const siguiente = count + 1

    try {
        const res = await axios.get(`https://swapi.dev/api/planets/?page=${siguiente}`)
        dispatch({
            type: NEXT_PAGE,
            payload: {
                array : res.data.results,
                count: siguiente
            }
        })
    }catch(error){
        console.log(error)
    }
}

export const prevPage = () => async (dispatch,getState) =>{

    const count = getState().planetas.count
    const anterior = count - 1

    try {
        const res = await axios.get(`https://swapi.dev/api/planets/?page=${anterior}`)
        dispatch({
            type: PREV_PAGE,
            payload: {
                array : res.data.results,
                count: anterior
            }
        })
    }catch(error){
        console.log(error)
    }
}

export const addToFavorite =(favorito) => (dispatch,getState) =>{

    dispatch({
        type: ADD_TO_FAVORITE,
        payload:favorito
    })
    
}
export const deleteFavorite = (removeFavorite) => (dispatch,getState) =>{
    dispatch({
        type:REMOVE_TO_FAVORITE,
        payload:removeFavorite
    })
}

export const searchResultados = (keywords) => async (dispatch,getState) =>{
    try{
        const res = await axios.get(`https://swapi.dev/api/planets/?search=${keywords}`);
        const data = await res.data;
        console.log('la data',data.results)
        dispatch({
            type:SEARCH_RESULT,
            payload: data.results,
            keywords
        })
        
    }  catch(error){
        console.log(error)
    }
}  
