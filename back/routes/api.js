var express = require('express');
var router = express.Router();

const { 
    getNovedades, 
    insertNovedad, 
    deleteNovedadesById, 
    getNovedadesById, 
    modificarNovedadById 
} = require('../models/novedadesModel');

var util = require('util');
const { getNovedadById } = require('../models/novedadesModel');
var cloudinary = require('cloudinary').v2;
const { promisify } = util;

const uploader = util.promisify(cloudinary.uploader.upload);
const destroy = util.promisify(cloudinary.uploader.destroy);


router.get('/novedades', async (req, res) => {
    try {
        let novedades = await getNovedades();

        //Agregar URL de una imagen a cada novedad
        const novedadesConImagen = await Promise.all(novedades.map(async (novedad) => {
            if (novedad.img_id) {
                const imagenUrl = cloudinary.url(novedad.img_id, {
                    width:100,
                    height:100,
                    crop: 'fill'
                });
                return {
                    ...novedad,
                    imagen: imagenUrl
                };
            } else {
                return {
                    ...novedad,
                    imagen: ''
                };
            }
        }));

        res.json({ success: true, novedades: novedadesConImagen });
    } catch (error) {
        res.status(500).json({ success: false, message: 'Error fetching novedades', error: error.toString() });
    }
});

//Crear una novedad
router.post('/novedades', async (req, res) => {
    try {
        let img_id = null;

        //Si se envia una imagen
        if (req.files && req.files.imagen) {
            const imagen = req.files.imagen;
            const uploadResult = await uploader(imagen.tempFilePath);
            img_id = uploadResult.public_id;
        }

        //Validar Campos
        const { titulo, subtitulo, cuerpo } = req.body;
    if (!titulo || !subtitulo || !cuerpo) {
        return res.status(400).json({ success: false, message: 'Faltan campos requeridos' });
    }

    await insertNovedad({ titulo, subtitulo, cuerpo, img_id });
    res.json({ success: true, message: 'Novedad creada' });
} catch (error) {
    res.status(500).json({ success: false, message: 'Error al crear novedad', error: error.toString() });
}
});

//Eliminar una novedad
router.delete('/novedades/:id', async (req, res) => {
    try {
        const id = req.params.id;
        const novedad = await getNovedadById(id);

        if (novedad.img_id) {
            await destroy(novedad.img_id);
        }

        await deleteNovedadesById(id);
        res.json({ success: true, message: 'Novedad eliminada' });
    } catch (error) {
        res.status(500).json({ success: false, message: 'Error eliminando novedad', error: error.toString() });
    }
});


//Modificar una novedad
router.put('/novedades/:id', async (req, res) => {
    try {
        const id = req.params.id;
        const novedadOriginal = await novedadesModel.getNovedadesById(id);

        let img_id = novedadOriginal.img_id;
        let borrar_img_vieja = false;

        //Borrar imagen si se indica
        if (req.body.img_delete === '1') {
            if (img_id) {
                await destroy(img_id);
            }
            img_id = null;
        } else if (req.files && req.files.imagen) {
            const imagen = req.files.imagen;
            const uploadResult = await uploader(imagen.tempFilePath);
            if (img_id) {
                await destroy(img_id);
            }
            img_id = uploadResult.public_id;
        }
    
    // Datos a actualizar
    const { titulo, subtitulo, cuerpo } = req.body;
    
    await modificarNovedadById({ titulo, subtitulo, cuerpo, img_id}, id);
    res.json({ success: true, message: 'Novedad actualizada' });
} catch (error) {
    res.status(500).json({ success: false, message: 'Error actualizando novedad', error: error.toString() });
}
});

module.exports = router;
