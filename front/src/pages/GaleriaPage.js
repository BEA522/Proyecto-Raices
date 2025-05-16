import React from 'react';
import { Container } from 'react-bootstrap';
//import Header from '../components/layout/Header';
import "../styles/layout.css";

const GaleriaPage = () => {
    return (
        <div style={{ paddingTop: '100px' }}>

            <main className="holder">
                <Container className='mt-3'>
                    <div className="galeria">
                        <h2>Bienvenido a Galeria</h2>
                        <p>
                            Bienvenido a nuestra galería de imágenes, donde te invitamos a explorar la diversidad y belleza
                            de
                            la tradición del mate argentino. A través de estas fotografías, podrás apreciar no solo el arte de
                            preparar y compartir el mate, sino también los momentos únicos y significativos que se viven
                            alrededor de esta emblemática bebida.
                        </p>
                        <img src="image/mate aventurero.jpg" alt="aventurero" width="200px" className='img-fluid m-2' />
                        <img src="image/mate cebandose.jpg" alt="cebandose" width="200px" className='img-fluid m-2' />
                        <img src="image/mate manos.jpg" alt="manos unidas" width="200px" className='img-fluid m-2' />
                        <img src="image/mate gorro.jpg" alt="mate en el frio" width="200px" className='img-fluid m-2' />
                        <img src="image/mate.jpg" alt="mate cebado" width="200px" height="300px" className='img-fluid m-2' />
                        <img src="image/mate sombra pava.jpg" alt="sombra de pava" width="200px" className='img-fluid m-2' />
                    </div>
                </Container>
            </main>
        </div>


    );
};

export default GaleriaPage;