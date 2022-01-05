import {createStore , combineReducers,applyMiddleware} from 'redux';
import thunk from 'redux-thunk'
import {composeWithDevTools} from 'redux-devtools-extension'

import planetReducer from './planetsDucks';

const rootReducer = combineReducers({
    planetas : planetReducer
})

export default function generateStore(){
    const store = createStore(rootReducer,composeWithDevTools(applyMiddleware(thunk)))
    return store
}