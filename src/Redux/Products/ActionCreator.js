import {baseURL} from '../../baseURL'
import * as ActionTypes from './ActionTypes'

export const slugProductLoading = () => ({
    type: ActionTypes.PRODUCTS_LOADING_SLUG
})

export const slugProductSuccess = (product) => ({
    type: ActionTypes.PRODUCTS_SUCCESS_SLUG,
    payload: product
})

export const slugProductFailed = errMess => ({
    type : ActionTypes.PRODUCTS_FAILED_SLUG,
    payload : errMess.message
})

export const getSlugProducts = (slug) => (dispatch) => {
    dispatch(slugProductLoading())
    return fetch(baseURL + `product/${slug}`)
    .then(res=> {
        if(res.ok){
            return res
        }
        else{
            var error = new Error('Error '+res.status + ':' + res.statusText)
            error.response = res
            throw error
        }
    },
        error => {
            throw error
        })
    .then(res=> res.json())
    .then(res=> {
        dispatch(slugProductSuccess(res))
    })
    .catch(err=> {
        dispatch(slugProductFailed(err))
    })
}

{/*     GETTING PAGE DETAILS        */}

export const pageDetailsLoading = () => ({
    type: ActionTypes.PAGE_DETAILS_LOADING
})

export const pageDetailsSuccess = (pageDetails) => ({
    type: ActionTypes.PAGE_DETAILS_SUCCESS,
    payload: pageDetails
})

export const pageDetailsFailed = (err) => ({
    type: ActionTypes.PAGE_DETAILS_FAILED,
    payload: err.message
})

export const getPageDetails = (categId) => dispatch => {
    dispatch(pageDetailsLoading())
    return fetch(baseURL + `page/${categId}`)
    .then(res => {
        if(res.ok){
            return res
        }
        else{
            var error = new Error('Error ' + res.status + ': ' + res.statusText)
            error.response = res
            throw error
        }
    }, err => {
        throw err
    })
    .then(res => res.json())
    .then(res => dispatch(pageDetailsSuccess(res)))
    .catch(err => dispatch(pageDetailsFailed(err)))
}