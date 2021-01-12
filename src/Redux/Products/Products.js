import * as ActionTypes from './ActionTypes'

const initialState = {
    AllProducts : [],
    Distributed: {},
    loading: true,
    errMess: null,
    productPage: {}
}

export const Products = (state = initialState, action) => {
    switch(action.type){
        case ActionTypes.PRODUCTS_FAILED_SLUG:
            return {
                ...initialState, errMess: action.payload, loading: false
            }
        case ActionTypes.PRODUCTS_LOADING_SLUG:
            return {
                ...initialState
            }
        case ActionTypes.PRODUCTS_SUCCESS_SLUG:
            return {
                ...initialState, loading: false, errMess : null, AllProducts : action.payload.products,
                Distributed : action.payload.distributed
            }
        case ActionTypes.PAGE_DETAILS_LOADING:
            return {...initialState}
        case ActionTypes.PAGE_DETAILS_FAILED:
            return {
                ...initialState, errMess: action.payload, loading: false
            }
        case ActionTypes.PAGE_DETAILS_SUCCESS:
            return{
                ...initialState, loading: false, productPage: action.payload
            }
        default:
            return state
    }
}