import React from 'react';
import { Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
//import './path/to/your/css/file.css';
import "../styles/novedades.css";

const NovedadesPage = () => {
    return (
        <div>
            <Navbar bg="light" expand="lg" fixed="top">
                <div className="container-fluid">
                    <Navbar.Brand as={Link} to="/">RAICES ARGENTINAS</Navbar.Brand>
                </div>
            </Navbar>


            <main className="holder">
                <div className="novedades">
                    <h2>Bombillas</h2>
                    <h2>Varios Modelos!!</h2>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sit ut iusto perferendis porro corrupti
                        recusandae ea tenetur impedit inventore sunt excepturi expedita odit adipisci, deleniti doloribus
                        nobis
                        labore necessitatibus quasi!
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore eaque ex temporibus nulla,
                        praesentium
                        velit libero incidunt error accusantium laudantium omnis fugit assumenda amet asperiores sequi! Sit
                        dignissimos vitae voluptas.
                    </p>

                </div>
                <div class="novedades">
                    <h2>Mates</h2>
                    <h2> Nuevo Diseño!!</h2>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sit ut iusto perferendis porro corrupti
                        recusandae ea tenetur impedit inventore sunt excepturi expedita odit adipisci, deleniti doloribus
                        nobis
                        labore necessitatibus quasi!
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore eaque ex temporibus nulla,
                        praesentium
                        velit libero incidunt error accusantium laudantium omnis fugit assumenda amet asperiores sequi! Sit
                        dignissimos vitae voluptas.
                    </p>
                </div>
            </main >
            <footer> Diseñado por Beatriz Gigena</footer>
        </div>
    )
}

export default NovedadesPage;
