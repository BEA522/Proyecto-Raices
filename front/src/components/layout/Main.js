const Main =() => {
    return (
        <div className="container">
            <div className="row">
            <div className="col">
            <img src="image/Un campo de yerba mate agroecológica..jpg" class="d-block w-100" alt="Yerba en una mesa" />
            </div>
        </div>
        <main>
        <div class="row">
            <div class="col">
                <div class="accordion" id="accordionExample">
                    <div class="accordion-item">
                        <h2 class="accordion-header">
                            <button class="accordion-button" type="button" data-bs-toggle="collapse"
                                data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                AGROECOLÓGICA
                            </button>
                        </h2>
                        <div id="collapseOne" class="accordion-collapse collapse show"
                            data-bs-parent="#accordionExample">
                            <div class="accordion-body">
                                <p>
                                    <strong> Los beneficios de la yerba Agroecológica </strong> incluyen que no produce
                                    acidez ni malestar gástrico, no tiene sabor metálico y fomenta la producción.
                                    Además,
                                    <code> desde su plantación hasta su elaboración, </code> no se expone a
                                    insecticidas,
                                    plaguicidas o agrotóxicos.
                                </p>

                            </div>
                        </div>
                    </div>
                    <div class="accordion-item">
                        <h2 class="accordion-header">
                            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                VARIEDAD
                            </button>
                        </h2>
                        <div id="collapseTwo" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
                            <div class="accordion-body">
                                <h2>1. Yerba Mate Ahumada</h2>
                                <p><strong>Descripción:</strong> Esta variedad agroecológica se caracteriza por su sabor
                                    distintivo y ahumado, que proviene de su proceso de secado.</p>
                                <p><strong>Proceso de Secado:</strong> Las hojas de yerba mate se secan al fuego de
                                    leña,
                                    utilizando madera de especies locales (como el algarrobo). Este método de secado al
                                    fuego imparte un aroma y sabor característicos, resaltando notas ahumadas que muchos
                                    aficionados consideran únicas y deliciosas.</p>
                                <p><strong>Proceso de Estacionamiento:</strong> Se realiza un periodo de estacionamiento
                                    de
                                    24 meses, lo que permite que los sabores se asienten y maduren, ofreciendo una
                                    experiencia de sabor más compleja y equilibrada.</p>

                                <h2>2. Yerba Mate Disecada con Hojas de Naranja</h2>
                                <p><strong>Descripción:</strong> Esta variedad agroecológica es una mezcla de yerba mate
                                    con
                                    hojas de naranjo, lo que le otorga un sabor y aroma cítrico refrescante.</p>
                                <p><strong>Proceso de Secado:</strong> Las hojas de yerba mate se secan al sol o en
                                    secaderos controlados, cuidando que se mantenga su frescura. Durante el proceso de
                                    secado, se añaden hojas secas de naranjo, que se combinan con la yerba. Esta
                                    combinación
                                    infunde a la yerba mate un toque refrescante y dulce, muy apreciado por quienes
                                    buscan
                                    una experiencia diferente.</p>

                                <h2>Proceso de Secado de la Yerba</h2>
                                <p><strong>Disecada:</strong> El proceso lleva a cabo mediante secado al sol o en
                                    secaderos
                                    controlados, manteniendo la frescura de las hojas y asegurando una calidad óptima.
                                </p>

                            </div>
                        </div>
                    </div>
                    <div class="accordion-item">
                        <h2 class="accordion-header">
                            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                TIPOS DE MOLIENDA
                            </button>
                        </h2>
                        <div id="collapseThree" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
                            <div class="accordion-body">
                                <h1>Tipos de Moliendas de Yerba Mate</h1>
                                <ul>
                                    <li><strong>Molienda gruesa:</strong> Textura áspera, trozos grandes. Ideal para
                                        mate
                                        tradicional.</li>
                                    <li><strong>Molienda media:</strong> Textura intermedia entre gruesa y fina. Sabor
                                        equilibrado, buena extracción.</li>
                                    <li><strong>Molienda fina:</strong> Partículas pequeñas, menos ramas. Sabor intenso,
                                        mejor para infusiones.</li>
                                    <li><strong>Molienda con palos:</strong> Incluye ramas. Sabor suave, permite una
                                        mayor
                                        duración de la bebida.</li>
                                    <li><strong>Molienda sin palos:</strong> Solo hojas. Sabor fuerte y concentrado.
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </main>

    <a href="tradicion.html" class="btn btn-primary">Comienzo y Tradición</a>

        </div>    )
}

export default Main;