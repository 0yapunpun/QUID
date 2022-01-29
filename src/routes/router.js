const express = require('express');
const router = express.Router();

const indexController = require('../controllers/index');

// Catalogos
router.get('/catalogos/cultivos', indexController.catalogoCultivos);
router.get('/catalogos/enfermedades', indexController.catalogoEnfermedades);
router.get('/catalogos/malezas', indexController.catalogoMalezas);
router.get('/catalogos/plagas', indexController.catalogoPlagas);
router.get('/catalogos/productos', indexController.catalogoProductos);
router.get('/detail/:id', indexController.catalogoDetail);

// Informes
router.get('/informes/ranking', indexController.ranking);
router.get('/informes/movimientos', indexController.movimientos);
router.get('/informes/movimientos/:id', indexController.movimientosUser);
router.get('/informes/blancosBiologicos', indexController.blancosBiologicos);



router.get('/aportes', indexController.aportes);
router.get('/clientes', indexController.clientes);
router.get('/notificaciones', indexController.notificaciones);
router.get('/usuarios', indexController.usuarios);
router.get('/usuariosExternos', indexController.usuariosExternos);
router.get('/sucursales', indexController.sucursales);
router.get('/permisos', indexController.permisos);


// Solicitud Informacion
router.get('/solicitudInformacion', indexController.solicitudInformacion);
router.get('/solicitudInformacion/pending', indexController.solicitudInformacionPending);
router.get('/solicitudInformacion/closed', indexController.solicitudInformacionClosed);
router.get('/solicitudInformacion/:id', indexController.solicitudInformacionDetail);


module.exports = router;