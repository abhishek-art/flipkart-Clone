import React from 'react'
import ProductFormat from '../../Components/Products/ProductPage/ProductFormat'
import StoreFormat from '../../Components/Products/StorePage/Products'

function CategoryPages(props) {

    const slug = props.location.pathname.split('/')[1]

    let search = props.location.search 
    
    search = search.split('&')

    const cid = search[0].split('=')[1]

    const type = search[1].split('=')[1]

    switch(type){
        case 'page':
            return (
                <div>
                    This is for the PAGE format.
                </div>
            )
        case 'product':
            return (
                <ProductFormat id={cid} />
            )
        default:
            return (
                <StoreFormat slug={slug}/>
            )
    }
}

export default CategoryPages
