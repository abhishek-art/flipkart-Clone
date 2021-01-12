import {combineReducers, createStore, applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
import { Category } from './Categories/Reducer'
import {Products} from './Products/Products'

function Store(){
    const store = createStore(
        combineReducers({
            categories : Category,
            products: Products
        }), applyMiddleware(thunk)
    )
    return store
}

export default Store