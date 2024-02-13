import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import './Navbars.css';
import { useNavigate } from "react-router-dom";

const Navbars = () => {
    const navigate = useNavigate();
    return (
        <Navbar className='navbar' bg="white" variant="light" expand="md">
            <Container>
                <Navbar.Brand onClick={() => navigate("/")}>StayHub</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link onClick={() => navigate("/home")}>Home</Nav.Link>
                        <Nav.Link onClick={() => navigate("/search")}>Ricerca</Nav.Link>
                        <Nav.Link onClick={() => navigate("/booking")}>Prenota</Nav.Link>
                    </Nav>
                    <Nav>
                        <Nav.Link onClick={() => navigate("/login")} className="login-link">Login</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default Navbars;
