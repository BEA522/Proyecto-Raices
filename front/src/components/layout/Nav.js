import React from "react";
import { Link } from "react-router-dom";
import { Navbar, Nav, Container } from "react-bootstrap";


const NavBar = () => {
    return (
        <Navbar bg="light" expand="lg" fixed="top">
            <Container>
                <Navbar.Brand as={Link} to="/">RAICES ARGENTINAS</Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">
                    <Nav className="me-auto">
                        <Nav.Link as={Link} to="/">Home</Nav.Link>
                        <Nav.Link as={Link} to="/Tradicion">Tradicion</Nav.Link>
                        <Nav.Link as={Link} to="/Galeria">Galeria</Nav.Link>
                        <Nav.Link as={Link} to="/Novedades">Novedades</Nav.Link>
                        <Nav.Link as={Link} to="/Contacto">Contacto</Nav.Link>
                        <Nav.Link href="https://www.google.com.ar/?hl=es-419" target="_blank" rel="noopener noreferrer">Google</Nav.Link>
                    </Nav>
                    <form className="d-flex mt-3" role="search" action="/novedades" method="get">
                        <input className="form-control me-2" type="search" placeholder="Search" name="query" aria-label="Search" />
                        <button className="btn btn-outline-success" type="submit">Search</button>
                    </form>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default NavBar; 