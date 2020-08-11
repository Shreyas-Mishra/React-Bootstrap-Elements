import React, { Component } from 'react';
import { Navbar, NavDropdown, Nav, Dropdown, Button } from 'react-bootstrap';
import logo from '../images/logo-blue.jpg';
import { FiBell, FiSettings, FiUser } from "react-icons/fi";
import './nav3.css';
class nav3 extends Component {
    render() {
        return (
            <div className="Nav-3">
                <Navbar className="nav-3" expand="lg">
                    <Navbar.Brand href="#home">
                        <img
                            alt=""
                            src={logo}
                            width="200"
                            height="40"
                            className="d-inline-block align-top"
                        />
                    </Navbar.Brand>
                    {/* <Divider /> */}

                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="mr-auto">
                            <Nav.Link href="/">Home</Nav.Link>
                            <Nav.Link href="/Page1">Nav-2</Nav.Link>
                            <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                            </NavDropdown>
                        </Nav>
                        <Nav >
                            <div className="btn-drop">
                                <Dropdown>
                                    <Dropdown.Toggle id="dropdown-basic">
                                        <FiUser></FiUser>
                                    </Dropdown.Toggle>

                                    <Dropdown.Menu>
                                        <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                                        <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                                        <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                                    </Dropdown.Menu>
                                </Dropdown>
                            </div>
                            <Nav.Link href="#link1"><FiBell /></Nav.Link>
                            <Nav.Link href="#link2"><FiSettings /></Nav.Link>
                        </Nav>


                    </Navbar.Collapse>
                </Navbar>
            </div>
        );
    }
}

export default nav3;