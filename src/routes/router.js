const express = require('express');
const router = express.Router();

const indexController = require('../controllers/index');

router.get('/catalogos/cultivos', indexController.catalogoCultivos);
router.get('/catalogos/enfermedades', indexController.catalogoEnfermedades);
router.get('/catalogos/malezas', indexController.catalogoMalezas);
router.get('/catalogos/plagas', indexController.catalogoPlagas);
router.get('/catalogos/productos', indexController.catalogoProductos);

router.get('/detail/:id', indexController.catalogoDetail);


router.get('/aportes', indexController.aportes);
router.get('/clientes', indexController.clientes);
router.get('/notificaciones', indexController.notificaciones);
router.get('/usuarios', indexController.usuarios);
router.get('/usuariosExternos', indexController.usuariosExternos);
router.get('/sucursales', indexController.sucursales);
router.get('/permisos', indexController.permisos);

router.get('/solicitudInformacion', indexController.solicitudInformacion);
router.get('/solicitudInformacion/pending', indexController.solicitudInformacionPending);
router.get('/solicitudInformacion/closed', indexController.solicitudInformacionClosed);


module.exports = router;