import React from 'react';
import { Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
//import './path/to/your/css/file.css';
import "../styles/contacto.css";

const ContactoPage = () => {
    return (
        <div>
            <Navbar bg="light" expand="lg" fixed="top">
                <div className="container-fluid">
                    <Navbar.Brand as={Link} to="/">RAICES ARGENTINAS</Navbar.Brand>
                </div>
            </Navbar>

            <main class="holder contacto">
                <div>
                    <h2>Contáctanos</h2>
                    <form action="" method="" class="formulario">
                        <p>
                            <label for="name">Nombre</label>
                            <input type="text" name="" />
                        </p>
                        <p>
                            <label for="email">Email</label>
                            <input type="text" name="" />
                        </p>
                        <p>
                            <label for="telefono">Teléfono</label>
                            <input type="text" name="" />
                        </p>
                        <p>
                            <label for="mensaje">Mensaje</label>
                            <textarea name=""></textarea>
                        </p>
                        <p class="acciones"><input type="submit" value="Enviar" /></p>
                    </form>
                </div>
                <div class="datos">
                    <h2>Otras vias de comunicación</h2>
                    <p> <strong>También puede contactarse con nosotros usando los siguientes medios</strong></p>
                    <ul>
                        <li>Telefono: 3572409702</li>
                        <li>Email: raices.argentinas.cba@gmail.com</li>
                    </ul>
                </div>

            </main>


            <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js"
                integrity="sha384-YvpcrYf0tY3lHB60NNkmXc5s9fDVZLESaAA55NDzOxhy9GkcIdslK1eN7N6jIeHz"
                crossorigin="anonymous"></script>

            <footer> Diseñado por Beatriz Gigena</footer>

        </div>
    )
}

export default ContactoPage;