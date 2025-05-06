var express = require('express');
var router = express.Router();
var novedadesModel = require('../../models/novedadesModel');

/* GET home page. */
router.get('/', async function (req, res, next) {

  var novedades = await novedadesModel.getNovedades();

  res.render('admin/novedades', {  //login.hbs
    layout: 'admin/layout',       //layout.hbs
    usuario: req.session.nombre,
    novedades
  });
});


/*agrega un elemento nuevo, formulario*/

router.get('/agregar', (req, res, next) => {
  res.render('admin/agregar', {   //agregar.hbs
    layout: 'admin/layout'
  });
});


router.post('/agregar', async (req, res, next) => {
  try {
    //console.log(req.body);

    if (req.body.titulo != "" && req.body.subtitulo != "" && req.body.cuerpo != "") {
      await novedadesModel.insertNovedad(req.body);
      res.redirect('/admin/novedades')
    } else {
      res.render('admin/agregar', {
        layout: 'admin/layout',
        error: true,
        message: 'Todos los campos son requeridos'
      })
    }
  } catch (error) {
    console.log(error)
    res.render('admin/agregar', {
      layout: 'admin/layout',
      error: true,
      message: 'No se cargó la novedad'
    })
  }
});


router.get('/eliminar/:id', async (req, res, next) => {
  var id = req.params.id;
  await novedadesModel.deleteNovedadesById(id);
  res.redirect('/admin/novedades');
});


router.get('/modificar/:id', async (req, res, next) => {
  var id = req.params.id;
  console.log(req.params.id);
  var novedad = await novedadesModel.getNovedadById(id);

  res.render('admin/modificar', {
    layout: 'admin/layout',
    novedad
  })
  
});


router.post('modificar', async (req, res, next) => {
  try {

    var id = req.body.id;
    console.log(id)

    var obj = {
      titulo: req.body.titulo,
      subtitulo: req.body.subtitulo,
      cuerpo: req.body.cuerpo,
    }
    console.log(obj)

    await novedadesModel.modificarNovedadById(obj, req.body.id);
    res.redirect('/admin/novedades');

  } catch (error) {
    console.log(error)
    res.render('admin/modificar', {
      layout: 'admin/layout',
      error: true,
      message: 'No se modifico la novedad'
    })
  }
})


module.exports = router;