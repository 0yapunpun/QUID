const express = require('express');
const router = express.Router();

const indexController = require('../controllers/index');

router.get('/catalogos/cultivos', indexController.catalogoCultivos);
router.get('/catalogos/enfermedades', indexController.catalogoEnfermedades);
router.get('/catalogos/malezas', indexController.catalogoMalezas);
router.get('/catalogos/plagas', indexController.catalogoPlagas);
router.get('/catalogos/productos', indexController.catalogoProductos);

// router.get('/catalogos/detail', indexController.catalogoDetail);
router.get('/detail/:id', indexController.catalogoDetail);

module.exports = router;