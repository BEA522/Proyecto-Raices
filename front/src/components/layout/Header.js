import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';


const Header = (props) => {
    return (
        <Navbar bg="light" expand="lg" fixed="top">
            <div className="container-fluid">
                <Navbar.Brand as={Link} to="/">
                    <img src='/image/LOGO.jpg' width="100" height="60" className='rounded-logo' alt="Logo" />RAICES ARGENTINAS</Navbar.Brand>
                <Navbar.Toggle aria-controls="offcanvasNavbar" />
                <Navbar.Collapse id="offcanvasNavbar">
                    <Nav className="ml-auto">
                         <Nav.Link as={Link} to="/">Home</Nav.Link>
                         <Nav.Link as={Link} to="/Tradicion">Tradicion</Nav.Link>
                         <Nav.Link as={Link} to="/Novedades">Novedades</Nav.Link>
                         <Nav.Link as={Link} to="/Galeria">Galeria</Nav.Link>
                         <Nav.Link as={Link} to="/Contacto">Contacto</Nav.Link>
                         <Nav.Link href="https://www.google.com.ar/?hl=es-419">Google</Nav.Link>

                         </Nav>

                         <form class="d-flex mt-3" role="search" action="/novedades" method="get">
                            <input className="form-control me-2" type="search" placeholder="Search" name="query" aria-label="Search" />
                            <button className="btn btn-outline-success" type="submit">Search</button>
                            </form>
                    </Navbar.Collapse>
                    </div> 
                </Navbar>            

    )
}

export default Header;
