import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import { authReducer } from "../reducers/authReducer";

import thunk from 'redux-thunk'; //middleware para hacer pedidos asincrónicos

const composeEnhancers = (typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose; //para poder utilizar varios middlewares en el store

const reducers = combineReducers({
    auth: authReducer,
})

export const store = createStore(
    reducers,
    composeEnhancers(
        applyMiddleware(thunk))
)