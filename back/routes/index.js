var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.redirect('/admin/login')
});

router.get('/home', (req,res,) => {
  res.render('home');
});

router.get('/tradicion', (req,res,) => {
  res.render('tradicion');
});

router.get('/galeria', (req,res,) => {
  res.render('galeria');
});

router.get('/novedades', (req,res,) => {
  res.render('novedades');
});

router.get('/contacto', (req,res,) => {
  res.render('contacto');
});


module.exports = router;
