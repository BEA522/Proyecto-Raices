
import React from "react";
import { NavLink } from "react-router-dom";
import { Navbar } from "react-bootstrap";


const NavBar =() => {
    return (
        <Navbar bg="light" expand="lg">
            <Navbar.Brand as={NavLink} to="/">Logo</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
            <div>
                <ul className="navbar-nav me-auto">
                    <li className="nav-item"><NavLink className="nav-link" to="/">Home</NavLink></li>
                    <li className="nav-item"><NavLink className="nav-link" to="/Tradicion">Tradicion</NavLink></li>
                    <li className="nav-item"><NavLink className="nav-link" to="/Galeria">Galeria</NavLink></li>
                    <li className="nav-item"><NavLink className="nav-link" to="/Novedades">Novedades</NavLink></li>
                    <li className="nav-item"><NavLink className="nav-link" to="/Contacto">Contacto</NavLink></li>
                </ul>
            </div>
        </Navbar.Collapse>
        </Navbar>
        );
};

export default NavBar;


