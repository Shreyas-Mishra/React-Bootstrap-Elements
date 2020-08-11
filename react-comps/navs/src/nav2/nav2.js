import React, { Component } from 'react';
import { Navbar, NavDropdown, Nav, ButtonGroup } from 'react-bootstrap';
import logo from '../images/logo.jpg';
import { FiBell, FiSettings, FiUser, FiLogOut } from "react-icons/fi";
import { NavLink } from 'react-router-dom';
import './nav2.css';

class nav2 extends Component {
    render() {
        return (
            <div className="Nav-2">
                <Navbar bg="dark" variant='dark' expand="lg">
                    <Navbar.Brand href="#home">
                        <img
                            alt=""
                            src={logo}
                            width="30"
                            height="30"
                            className="d-inline-block align-top"
                        />{' '}
                 React Bootstrap
                </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="mr-auto">
                            <Nav.Link href="/">Home</Nav.Link>
                            <Nav.Link href="/page2">Nav-3</Nav.Link>
                            <NavDropdown title="Dropdown" id="basic-nav-dropdown" >
                                <NavDropdown.Item>
                                    <img className="profilePic" src={logo} alt="user pic" />
                                </NavDropdown.Item>
                                <NavDropdown.Item href="/page1"><FiUser /> Profile</NavDropdown.Item>
                                <NavDropdown.Item divider />
                                <NavDropdown.Item ><FiLogOut /> Logout</NavDropdown.Item>
                            </NavDropdown>
                        </Nav>
                        <Nav>
                            <Nav.Link href="#link1">Left</Nav.Link>
                            <Nav.Link href="#link0"><FiBell /></Nav.Link>

                            <div className="Dropleft">
                                {['left'].map((direction) => (
                                    <NavDropdown
                                        href="#link0"
                                        key={direction}
                                        drop={direction}
                                        variant="secondary"
                                        title="Profile">
                                        <NavDropdown.Item>
                                            <img className="profilePic" src={logo} alt="user pic" />
                                        </NavDropdown.Item>
                                        <NavDropdown.Item href="/page1"><FiUser /> Profile</NavDropdown.Item>
                                        <NavDropdown.Item divider />
                                        <NavDropdown.Item ><FiLogOut /> Logout</NavDropdown.Item>
                                    </NavDropdown>
                                ))}
                            </div>
                            <Nav.Link href="#link2"><FiSettings /></Nav.Link>
                            <Nav.Link href="#link3">Options</Nav.Link>
                        </Nav>


                    </Navbar.Collapse>
                </Navbar>
            </div>
        );
    }
}

export default nav2;