var express = require('express');
var router = express.Router();
const { getNovedades, insertNovedad, deleteNovedadesById, getNovedadesById, modificarNovedadById } = require('../models/novedadesModel');
const { getNovedadById } = require('../models/novedadesModel');
const cloudinary = require('cloudinary').v2;
const fs = require('fs').promises;

const util = require('util');
const { promisify } = util;


require('dotenv').config();
console.log(process.env.CLOUDINARY_URL)


const uploader = util.promisify(cloudinary.uploader.upload);
const destroy = util.promisify(cloudinary.uploader.destroy);

const validarNovedad = (data) => {
    const { titulo, subtitulo, cuerpo } = data;
    if (!titulo || !subtitulo || !cuerpo) {
        return { valid: false, message: 'Faltan campos requeridos' };
        }
        if (typeof titulo !== 'string' || typeof subtitulo !== 'string' || typeof cuerpo !== 'string') {
            return {valid: false, message: 'Los campos deben ser cadenas de texto' };
        }
        if (titulo.length > 255 || subtitulo.length > 255) {
            return { valid: false, message: 'Titulo o subtitulo demasiado largo' };
        }
        return { valid: true };
    };


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
                return { ...novedad, imagen: imagenUrl };
            } else {
                return { ...novedad, imagen: '' };
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
        const validacion = validarNovedad(req.body);
        if (!validacion.valid) {
            return res.status(400).json({ success: false, message: validacion.message });
        }

        let img_id = null;
        let tempFilePath = null;

        //Si se envia una imagen
        if (req.files && req.files.imagen) {
            const imagen = req.files.imagen;
            tempFilePath = imagen.tempFilePath;
            try {
            const uploadResult = await uploader(tempFilePath);
            img_id = uploadResult.public_id;
            await fs.unlink(tempFilePath);
        } catch (uploadError) {
            console.error('Error al subir Cloudinary:', uploadError);
            return res.status(500).json({ success: false, message: 'Error al subir la imagen', error: uploadError.message });
        }
    }

        //Validar Campos
        const { titulo, subtitulo, cuerpo } = req.body;
        await insertNovedad({ titulo, subtitulo, cuerpo, img_id });
        res.json({ success: true, message: 'Novedad creada' });
    } catch (error) {
        res.status(500).json({ success: false, message: 'Error al crear novedad', error:this.toString() });
    }
});


//Eliminar una novedad
router.delete('/novedades/:id', async (req, res) => {
    try {
        const id = parseInt(req.params.id);
        if (isNaN(id)) {
            return res.status(400).json({ success: false, message: 'IDinválido' });
        }

        const novedad = await getNovedadesById(id);
        if (!novedad) {
            return res.status(404).json({ success: false, message: 'Novedad no encontrada'  });
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
        const id = parseInt(req.params.id);
        if (isNaN(id)) {
            return res.status(400).json({ success: false, message: 'ID inválido' });
        }
        const validacion = validarNovedad(req.body);
        if (!validacion.valid) {
            return res.status(400).json({success: false, message: validacion.message }); 
        }
        
        const novedadOriginal = await getNovedadesById(id);
        if (!novedadOriginal) {
            return res.status(404).json({ success: false, message: 'Novedad no encontrada' });
        }

        let img_id = novedadOriginal.img_id;
        let tempFilePath = null;

        //Borrar imagen si se indica
        if (req.body.img_delete === true) {
            if (img_id) {
                await destroy(img_id);
            }
            img_id = null;
        } else if (req.files && req.files.imagen) {
            const imagen = req.files.imagen;
            tempFilePath = imagen.tempFilePath;
            const uploadResult = await uploader(tempFilePath);
            if (img_id) {
 ériel               
                await destroy(img_id);
            }
            img_id = uploadResult.public_id;
            await fs.unlink(tempFilePath);
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
