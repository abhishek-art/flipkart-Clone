import React from 'react'
import {Navbar, Nav, Image, NavItem, Row, Col} from 'react-bootstrap'
import BrandLogo from '../../Images/Flipkart-New-Logo.jpg'
import {NavLink} from 'react-router-dom'

function Header() {
    return (
        <div>
                <Row>
                    <Col>
                    <Navbar expand='sm' style={{backgroundColor: '#1c95da'}}>
                        <Navbar.Brand style={{flex:1, padding: 0}}><NavLink to="/"><Image src={BrandLogo} style={{maxWidth: '100%', maxHeight: '100%'}} /></NavLink></Navbar.Brand>
                        <div style={{flex: 6}}>
                        </div>
                        <Nav style={{flexDirection: "row", flex: 3, justifyContent: "space-around"}}>
                            <NavItem><NavLink style={{color: 'white'}} to="/">Home</NavLink></NavItem>
                            <NavItem><NavLink style={{color: 'white'}} to="#">Products</NavLink></NavItem>
                            <NavItem><NavLink style={{color: 'white'}} to="#">Logout</NavLink></NavItem>
                        </Nav>
                    </Navbar>
                    </Col>
                </Row>
        </div>
    )
}

export default Header
