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
                    <form action="https://formsubmit.co/bea.loforte@gmail.com" método="POST" method="POST" class="formulario">
                        <p>
                            <label for="name">Nombre</label>
                            <input type="text" name="nombre" />
                        </p>
                        <p>
                            <label for="email">Email</label>
                            <input type="text" name="email" />
                        </p>
                        <p>
                            <label for="telefono">Teléfono</label>
                            <input type="text" name="telefono" />
                        </p>
                        <p>
                            <label for="mensaje">Mensaje</label>
                            <textarea name="mensaje"></textarea>
                        </p>
                        <p class="acciones"><input type="submit" value="Enviar" /></p>

                        <input type="hidden" name='_next' value="http://localhost:3000/Contacto" />
                        <input type="hidden" name='_captcha' value="false" />
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

            <footer> Diseñado por Beatriz Gigena</footer>

        </div>
    )
}

export default ContactoPage;