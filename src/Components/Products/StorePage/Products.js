import React, {useEffect} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import { getSlugProducts } from '../../../Redux/Products/ActionCreator'
import {Image, Button} from 'react-bootstrap'
import './Style.css'
import {baseURL} from '../../../baseURL'

function ProductsPage(props) {

    const slug = props.slug

    const dispatch = useDispatch()
    useEffect(()=> {
        dispatch(getSlugProducts(slug))
    },[slug])

    const loading = useSelector(state => state.products.loading)
    const errMess = useSelector(state => state.products.errMess)
    const allProducts = useSelector(state => state.products.AllProducts)
    const distributed = useSelector(state => state.products.Distributed)

    if(loading){
        return(
            <div>
                The Products are still Loading
            </div>
        )
    }
    else if(errMess){
        return(
            <div>
                {errMess}
            </div>
        )
    }
    else if(allProducts.length > 0){
        function RenderCards(props){
            if(props.product){
                return (
                    <div className="mainCard">
                        <div className='cardHeader'>
                            <h5>All Products</h5>
                            <Button variant='primary'>VIEW ALL</Button>
                        </div>
                        <div className='borderLine'>
                        </div>
                        <div className='cardBody'>
                            {
                                props.product.map(prod => {
                                    return(
                                        <div key={prod._id} className="productWindow">
                                            <div className='productImage'>
                                            <Image src={ baseURL + `${prod.profilePictures[0].img}`}/>
                                            </div>
                                            <div className='productInfo'>
                                            <p>{prod.name}</p>
                                            <h6><span className='fa fa-inr'></span>{prod.price}</h6>
                                            </div>
                                        </div>
                                    )
                                })
                            }
                        </div>
                    </div>
                )
            }
            else{
                return(
                    <div>
                        No Product
                    </div>
                )
            }
        }

    return (
        <div>
            this is the {slug} page
            <RenderCards product={allProducts} />
            <RenderCards product={distributed[0].under5K} />
            <RenderCards product={distributed[0].under10K} />
            <RenderCards product={distributed[0].under15K} />
            <RenderCards product={distributed[0].HeavyPrice} />
        </div>
    )
    }
    else{
        return(
            <div>
                There are no products
            </div>
        )
    }
}

export default ProductsPage
