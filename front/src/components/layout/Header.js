import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';


const Header = () => {
    return (
        <Navbar bg="light" fixed='top' expand="lg" className='mb-4'>
            <div className="container-fluid">
                <Navbar.Brand as={Link} to="/">
                    <img src='/image/LOGO.jpg' width="100" height="60" className='rounded-logo' alt="Logo" />RAICES ARGENTINAS</Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarContent" />
                <Navbar.Collapse id="navbarContent">
                    <Nav className="ms-auto">
                        <Nav.Link as={Link} to="/">Home</Nav.Link>
                        <Nav.Link as={Link} to="/tradicion">Tradicion</Nav.Link>
                        <Nav.Link as={Link} to="/novedades">Novedades</Nav.Link>
                        <Nav.Link as={Link} to="/galeria">Galeria</Nav.Link>
                        <Nav.Link as={Link} to="/contacto">Contacto</Nav.Link>
                        <Nav.Link as="a" href="https://www.google.com.ar/?hl=es-419">Google</Nav.Link>
                    </Nav>
                    <form className="d-flex mt-3" role="search" action="/novedades" method="get">
                        <input className="form-control me-2" type="search" placeholder="Search" name="query" aria-label="Search" />
                        <button className="btn btn-outline-success" type="submit">Search</button>
                    </form>
                </Navbar.Collapse>
            </div>
        </Navbar>

    );
};

export default Header;
