import React, {useEffect} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import { getPageDetails } from '../../../Redux/Products/ActionCreator'
import {Card, Row, Carousel, CarouselItem} from 'react-bootstrap'
import { baseURL } from '../../../baseURL'
import 'react-responsive-carousel/lib/styles/carousel.min.css'

function ProductFormat(props) {

    const dispatch = useDispatch()

    useEffect(()=> {
        dispatch(getPageDetails(props.id))
    },[])

    const pageDetails = useSelector(state => state.products.productPage[0])
    const errMess = useSelector(state => state.products.errMess)
    const loading = useSelector(state => state.products.loading)

    if(loading){
        return(
            <div>
                Page is Still Loading
            </div>
        )
    }
    else if(errMess){
        <div>
            {errMess}
        </div>
    }
    else if(pageDetails){

        return (
            <div>
                <Row style={{justifyContent: 'center', flexDirection: 'column', alignItems: 'center'}}>
                    <h5>{pageDetails.title}</h5>
                    <p>{pageDetails.description}</p>
                </Row>
                <Row style={{margin: 10}}>
                <Carousel >
                {
                    pageDetails.banners.map(ban => {
                        return (
                            <CarouselItem>
                                <img src={baseURL + ban.img} />
                            </CarouselItem>
                        )
                    })
                }
                </Carousel>
                </Row>
                <Row style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                    {pageDetails.products && pageDetails.products.map(prod => {
                        return(
                            <Card>
                                <Card.Body style={{justifyContent: 'center', alignItems: 'center'}}>
                                    <img src={baseURL + prod.img} style={{maxWidth: '20vw'}} />
                                </Card.Body>
                            </Card>
                        )
                    })}
                </Row>
            </div>
        )
    }
    else{
        return(<div>
            THere is nothing
        </div>)
    }
}

export default ProductFormat
