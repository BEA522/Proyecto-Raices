import React from 'react';
import { Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
//import './path/to/your/css/file.css';
import "../styles/galeria.css";

const GaleriaPage = () => {
    return (
        <div>
            <Navbar bg="light" expand="lg" fixed="top">
                <div className="container-fluid">
                    <Navbar.Brand as={Link} to="/">RAICES ARGENTINAS</Navbar.Brand>
                </div>
            </Navbar>

            <main class="holder">
                <div class="galeria">
                    <h2>Bienvenido a Galeria</h2>
                    <p>
                        Bienvenido a nuestra galería de imágenes, donde te invitamos a explorar la diversidad y belleza
                        de
                        la tradición del mate argentino. A través de estas fotografías, podrás apreciar no solo el arte de
                        preparar y compartir el mate, sino también los momentos únicos y significativos que se viven
                        alrededor de esta emblemática bebida.
                    </p>
                    <img src="image/mate aventurero.jpg" alt="aventurero" width="200px" />
                    <img src="image/mate cebandose.jpg" alt="cebandose" width="200px" />
                    <img src="image/mate manos.jpg" alt="manos unidas" width="200px" />
                    <img src="image/mate gorro.jpg" alt="mate en el frio" width="200px" />
                    <img src="image/mate.jpg" alt="mate cebado" width="200px" height="300px" />
                    <img src="image/mate sombra pava.jpg" alt="sombra de pava" width="200px" />
                </div>
            </main>
            <footer> Derechos Reservados. Raices Argentinas</footer>
        </div>


    )
}

export default GaleriaPage;