import React, { Component } from 'react';
import { Navbar, NavDropdown, Nav, Form, FormControl, Button } from 'react-bootstrap';
// import { Route, Switch, BrowserRouter as Router } from "react-router-dom";
import Nav2 from '../nav2/nav2';
import { Link } from "react-router-dom";

class nav1 extends Component {

    render() {

        const mystyle = {
            color: "white",
            backgroundColor: "DodgerBlue",
            padding: "10px",
            fontFamily: "Arial"
        };
        return (
            <Navbar bg="dark" variant='dark' expand="lg">
                <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                        <Nav.Link href="/page1">Nav-2</Nav.Link>
                        <Nav.Link href="/page2">Nav-3</Nav.Link>
                        <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                            {/* <Link exact path="/Nav1/" component={Nav2} className="dropdown-item" >Nav1</Link> */}
                            <NavDropdown.Item >Action</NavDropdown.Item>
                            <NavDropdown.Item >Another action</NavDropdown.Item>
                            <NavDropdown.Item >Something</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item >Separated link</NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                    <Form inline>
                        <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                        <Button variant="outline-success">Search</Button>
                    </Form>
                </Navbar.Collapse>
            </Navbar>
        );
    }
}

export default nav1;