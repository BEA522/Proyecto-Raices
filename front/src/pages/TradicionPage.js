import React from 'react';
import { Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
//import './path/to/your/css/file.css';
import "../styles/tradicion.css";

const TradicionPage = () => {
    return (
        <div>
            <Navbar bg="light" expand="lg" fixed="top">
                <div className="container-fluid">
                    <Navbar.Brand as={Link} to="/">RAICES ARGENTINAS</Navbar.Brand>
                    <button className="navbar-toggler-icon" type="button" data-bs-togle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                </div>
            </Navbar>

            <main>
                <div class="card">
                    <div class="card-body">
                        <h5 class="card-title"> Tradición</h5>
                        <p>
                            <br />La tradición del mate es mucho más que una simple bebida; es un símbolo de amistad, calidez y
                            conexión entre las personas. En cada ronda de mate se encienden conversaciones, se comparten risas y
                            se forjan lazos que trascienden el tiempo. A través de estas imágenes, queremos capturar la esencia
                            de estos momentos especiales, donde el mate se convierte en el centro de un ritual que une a amigos
                            y familiares. Te invitamos a sumergirte en esta celebración de la cultura argentina y a sentir la
                            calidez de cada encuentro. ¡Bienvenido a nuestra expresión visual de amor y compañerismo a través
                            del mate!
                        </p>
                    </div>
                </div>

                <div class="row row-cols-1 row-cols-md-3 g-4">
                    <div class="col">
                        <div class="card h-100">
                            <img src="image/mate gaucho.jpg" class="card-img-top" alt="Gaucho mateando" />
                            <div class="card-body">
                                <h5 class="card-title">El Mate Gaucho</h5>
                                <p class="card-text">En la soledad de su hogar en el campo, el gaucho encuentra en el mate un
                                    compañero silencioso y fiel. Cada sorbo lo conecta con la tierra que cuida y con las
                                    tradiciones que nutren su alma. En este momento de calma, rodeado de la vastedad de la
                                    naturaleza, el mate se convierte en un ritual sagrado que invita a la reflexión, donde el
                                    tiempo parece detenerse y la conexión con sus raíces se fortalece.</p>
                            </div>
                        </div>
                    </div>

                    <div class="col">
                        <div class="card h-100">
                            <img src="image/mate sombrero.jpg" class="card-img-top" alt="Chica con un mate" />
                            <div class="card-body">
                                <h5 class="card-title">El Mate Viajero</h5>
                                <p class="card-text">Con el sombrero desplegando su encanto, esta viajera se detiene a
                                    contemplar un paisaje que roba el aliento. En su brazo, el mate y el termo son más que
                                    accesorios; son símbolos de la aventura y la conexión con la cultura que lleva en su
                                    corazón. En este instante de pausa, rodeada de la belleza de la naturaleza, el ritual del
                                    mate se convierte en un momento de reflexión y gratitud, recordándole que cada viaje es
                                    también una oportunidad para saborear la esencia de la vida.</p>
                            </div>
                        </div>
                    </div>

                    <div class="col">
                        <div class="card h-100">
                            <img src="image/Mateando.jpg" class="card-img-top" alt="Amigos mateando" />
                            <div class="card-body">
                                <h5 class="card-title">El Mate Compartido</h5>
                                <p class="card-text">Bajo el cálido abrazo del sol, un grupo de amigos se reúne en el pasto para
                                    disfrutar de una tarde llena de risas y charlas. El mate fluye de mano en mano, simbolizando
                                    la amistad y la conexión que une a cada uno de ellos. En esos momentos sencillos, se crean
                                    recuerdos imborrables, donde cada sorbo acompaña historias y sueños compartidos. Aquí, en la
                                    simplicidad de estar juntos, el mate se convierte en el vínculo que fortalece lazos y
                                    celebra la belleza de la camaradería.</p>
                            </div>
                        </div>
                    </div>
                </div>
                <a href="index.html" class="btn btn-primary">Pagina Principal </a>

            </main>

            <footer> Derechos Reservados. Raices Argentinas</footer>
        </div>
    )
}


export default TradicionPage;
