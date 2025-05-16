import React from 'react';
//import Header from '../components/layout/Header';
import "../styles/layout.css";

const ContactoPage = () => {
    return (
        <div style={{ paddingTop: '100px' }}>

            <main className="holder contacto">
                <div className='mb-4'>
                    <h2>Contáctanos</h2>
                    <form action="https://formsubmit.co/raices.argentinas.cba@gmail.com" method="POST" className="formulario">
                        <p>
                            <label htmlFor="name">Nombre</label>
                            <input type="text" id='name' name="nombre" />
                        </p>
                        <p>
                            <label htmlFor="email">Email</label>
                            <input type="text" id='email' name="email" />
                        </p>
                        <p>
                            <label htmlFor="telefono">Teléfono</label>
                            <input type="text" id='telefono' name="telefono" />
                        </p>
                        <p>
                            <label htmlFor="mensaje">Mensaje</label>
                            <textarea id='mensaje' name="mensaje"></textarea>
                        </p>

                        <p className="acciones">
                            <input type="submit" value="Enviar" />
                        </p>

                        <input type="hidden" name='_next' value="http://localhost:3000/Contacto" />
                        <input type="hidden" name='_captcha' value="false" />
                    </form>
                </div>
                <div className="datos">
                    <h2>Otras vias de comunicación</h2>
                    <p> <strong>También puede contactarse con nosotros usando los siguientes medios</strong></p>
                    <ul>
                        <li>Telefono: 3572409702</li>
                        <li>Email: raices.argentinas.cba@gmail.com</li>
                    </ul>
                </div>

            </main>


        </div>
    );
};

export default ContactoPage;