const express = require('express');
const router = express.Router();

const indexController = require('../controllers/index');
const viewController = require('../controllers/viewController.js');

// Catalogos
router.get('/catalogos/cultivos', viewController.cultivos);
router.get('/catalogos/enfermedades', viewController.enfermedades);
router.get('/catalogos/malezas', viewController.malezas);
router.get('/catalogos/plagas', viewController.plagas);
router.get('/catalogos/productos', viewController.productos);
router.get('/detail/:id', viewController.catalogoDetail);

// Configuraciones Catalogo
router.get('/catalogo/crearPropiedades', viewController.crearPropiedades);
router.get('/catalogo/seccionesCatalogo', viewController.seccionesCatalogo);
router.get('/catalogo/contenidoSecciones', viewController.contenidoSecciones);

// Informes
router.get('/informes/ranking', viewController.ranking);
router.get('/informes/movimientos', viewController.movimientos);
router.get('/informes/movimientos/:date', viewController.movimientosByDate);
router.get('/informes/movimientos/:date/:user', viewController.movimientosByDateUser);

// router.get('/informes/movimientos/:id', viewController.movimientosUsuario); //TODO controlar caso


router.get('/informes/productos', viewController.informeProductos);
router.get('/informes/productosDate/:date', viewController.informeProductosByDate);
router.get('/informes/blancosBiologicos', viewController.getInformeBB);
router.get('/informes/mapaBlancosBiologicos', viewController.mapBB);
router.get('/informes/evaluaciones', viewController.evaluaciones);
router.get('/informes/mapaCalor', viewController.mapaCalor);


router.get('/aportes', viewController.aportes);
router.get('/clientes', viewController.clientes);
router.get('/notificaciones', viewController.notificaciones);
router.get('/usuariosExternos', viewController.usuariosExternos);
router.get('/permisos', viewController.permisos);

// Usuarios
router.get('/usuarios', viewController.usuarios);
router.get('/usuarios/:id', viewController.rankingUser);
router.get('/sucursales', viewController.sucursales);

// Solicitud Informacion
router.get('/solicitudInformacion', viewController.solicitudesInformacion);
router.get('/solicitudInformacion/pending', viewController.solicitudInformacionPending);
router.get('/solicitudInformacion/closed', viewController.solicitudInformacionClosed);
router.get('/solicitudInformacion/:id', viewController.solicitudInformacionDetail);

// Login
router.get('/login', viewController.login);
router.post('/login/loginValidate', viewController.loginValidate);
router.get('/login/logout', viewController.logout);


module.exports = router;