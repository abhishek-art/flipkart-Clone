import React from 'react'
import {useDispatch, useSelector} from 'react-redux'
import { Navbar, Nav, NavItem, Row } from 'react-bootstrap'
import {NavLink} from 'react-router-dom'
import './Style.css'
import { useEffect } from 'react'
import { fetchCategories } from '../../Redux/Categories/ActionCreator'

function MenuHeader() {

    const dispatch = useDispatch()
    
    useEffect(()=>{
        dispatch(fetchCategories())
    },[])

    const categories = useSelector(state => state.categories.categories)
    const errMess = useSelector(state=> state.categories.errMess)
    const loading = useSelector(state => state.categories.loading)

    if(loading){
        return(
            <div>The Menu is Still Loading</div>
        )
    }
    else if(errMess){
        return(
            <div>{errMess}</div>
        )
    }
    else{
        if(categories.Categories){

            function DropDowns({categ}){
                var categList = []
                if(categ.categories.length > 0){
                    for(let cate of categ.categories){
                        categList.push(<li><NavLink to ={`${cate.slug}?id=${cate._id}&type=${cate.categoryType}`}>{cate.name}</NavLink>
                            <DropDowns categ = {cate} />
                        </li>)
                    }
                }
                return <ul>{categList}</ul>
            }

            const mainList = categories.Categories.map(cate => {
                return <NavItem>{cate.name}
                <DropDowns categ={cate} /></NavItem>
            })
            return(
                <Row className='menuHeader'>
                    <div className='col-md-8 offset-md-2'>
                        <Navbar>
                        <Nav style={{width: '100%', justifyContent: 'space-between'}}>{mainList}</Nav>
                        </Navbar>
                    </div>
                </Row>
                
            )
        }
        else{
            return(
                <div>There are no Categories</div>
            )
        }
    } 
}

export default MenuHeader
