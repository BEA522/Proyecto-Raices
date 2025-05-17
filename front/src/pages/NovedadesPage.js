import React, { useState, useEffect } from 'react';
import axios from 'axios';
import NovedadItem from '../components/novedades/NovedadItem';
import "../styles/layout.css";

const NovedadesPage = () => {

    const [loading, setLoading] = useState(false);
    const [novedades, setNovedades] = useState([]);

    useEffect(() => {
        const cargarNovedades = async () => {
            setLoading(true);
            try { 
            const response = await axios.get('http://localhost:3000/api/novedades');
            if (response.data.succes) {
                setNovedades(response.data.novedades);
            } else {
                console.error('Error en la API:', response.data.message);
            }
        } catch (error) {
            console.error('Error fetching novedades:', error);
        }
            setLoading(false);
        };

        cargarNovedades();
    }, []);

    return (
        <section className='holder'>
            <h2>Novedades</h2>
            {loading ? (
                <p>Cargando...</p>
            ) : (
                novedades.map(item => <NovedadItem key={item.id}
                    title={item.titulo} subtitle={item.subtitletitulo}
                    imagen={item.imagen} body={item.cuerpo} />)
            )}
        </section>
    );
}

export default NovedadesPage;
