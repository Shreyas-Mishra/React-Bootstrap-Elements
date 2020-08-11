import React, { Component } from 'react';
import { Navbar, NavDropdown, Nav } from 'react-bootstrap';
import logo from '../images/logo.jpg';
import { FiBell, FiSettings, FiUser } from "react-icons/fi";

class nav3 extends Component {
    render() {
        return (
            <Navbar className="nav-3" bg="primary" variant='dark' expand="lg">
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
                        <Nav.Link href="#link1"><FiBell /></Nav.Link>
                        <Nav.Link href="#link2"><FiSettings /></Nav.Link>
                        <Nav.Link href="#link3"><FiUser /></Nav.Link>
                    </Nav>


                </Navbar.Collapse>
            </Navbar>
        );
    }
}

export default nav3;