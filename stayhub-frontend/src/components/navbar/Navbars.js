import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import './Navbars.css';
import { useNavigate } from "react-router-dom";

const Navbars = () => {
    const navigate = useNavigate();
    return (
        <>
            <Navbar className='navbar' bg="light" data-bs-theme="light">
                <Container>
                    <Navbar.Brand onClick={() => navigate("/")}>StayHub</Navbar.Brand>
                    <Nav className="me-auto">
                        <Nav.Link onClick={() => navigate("/home")}>Home</Nav.Link>
                        <Nav.Link onClick={() => navigate("/home")}>Ricerca</Nav.Link>
                        <Nav.Link onClick={() => navigate("/home")}>Prenota</Nav.Link>
                    </Nav>
                    <Nav>
                    
                        <Nav.Link onClick={() => navigate("/login")}>Login</Nav.Link>
                       
                    </Nav>
                </Container>
            </Navbar>
        </>
    )
}

export default Navbars