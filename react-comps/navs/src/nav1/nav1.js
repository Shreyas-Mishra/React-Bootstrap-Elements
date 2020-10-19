import React, { Component } from 'react';
import { Navbar, NavDropdown, Nav } from 'react-bootstrap';
// import { Route, Switch, BrowserRouter as Router } from "react-router-dom";
// import Nav2 from '../nav2/nav2';
import './nav1.css';
import logo from '../images/logo-white.jpg';
import { FiShoppingCart, FiLogOut } from "react-icons/fi";
import { BsHeartHalf } from 'react-icons/bs';

class nav1 extends Component {

    render() {

        return (
            <div className="Nav-1">
                <Navbar variant='dark' >
                    <Navbar.Brand href="/">
                        <img
                            alt=""
                            src={logo}
                            width="200"
                            height="40"
                            className="d-inline-block align-top"
                        />{' '}
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="mr-auto">
                            <Nav.Link href="#page1">Nav-2</Nav.Link>
                            <Nav.Link href="#page2">Nav-3</Nav.Link>
                            <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                                {/* <Link exact path="/Nav1/" component={Nav2} className="dropdown-item" >Nav1</Link> */}
                                <NavDropdown.Item >Action</NavDropdown.Item>
                                <NavDropdown.Item >Another action</NavDropdown.Item>
                                <NavDropdown.Item >Something</NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item > <FiLogOut />Logout</NavDropdown.Item>
                            </NavDropdown>
                        </Nav>

                        <Nav.Link href="#link2">Contact Us</Nav.Link>
                        <Nav.Link href="#link2"><BsHeartHalf /></Nav.Link>
                        <Nav.Link href="#link2"><FiShoppingCart /></Nav.Link>
                    </Navbar.Collapse>
                </Navbar>
            </div>
        );
    }
}

export default nav1;