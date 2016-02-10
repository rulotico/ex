var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Exaris' });
});

router.get('/aviation', function(req, res, next) {
  res.render('aviation', { title: 'Aviation' });
});

router.get('/consulting', function(req, res, next) {
  res.render('consulting', { title: 'Consulting' });
});

router.get('/energy', function(req, res, next) {
  res.render('energy', { title: 'Energy' });
});

router.get('/medical', function(req, res, next) {
  res.render('medical', { title: 'Medical' });
});

router.get('/safety', function(req, res, next) {
  res.render('safety', { title: 'Safety' });
});

router.get('/aviso', function(req, res, next) {
  res.render('aviso', { title: 'Aviso' });
});

router.get('/terminos', function(req, res, next) {
  res.render('terminos', { title: 'Terminos' });
});


//---------------------------------------------AVIATION


router.get('/producto', function(req, res, next) {
  res.render('producto', { title: 'producto' });
});





module.exports = router;
