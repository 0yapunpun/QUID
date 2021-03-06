const controller = {};
const service = require('../engine/apiService.js');

// Helpers
const currentDate = () => {
	let today = new Date();
	let dd = String(today.getDate()).padStart(2, '0');
	let mm = String(today.getMonth() + 1).padStart(2, '0'); 
	let yyyy = today.getFullYear();
	return today = yyyy + '/' + mm + '/' + dd;
}

const firstDayOfYear = () => {
	let today = new Date();
	let dd = String(today.getDate()).padStart(2, '0');
	let mm = String(today.getMonth() + 1).padStart(2, '0'); 
	let yyyy = today.getFullYear();
	return today = yyyy + '/01/01';
}

controller.login = async (req, res, next) => {
    res.render('login');
}

controller.loginValidate = async(req, res, next) => {
    const resp = await service.loginAutentication(req.body);

    let state;
    if (resp.data.success) {
        req.session.login = true;
        req.session.idUser = resp.data.id_usuario;
        delete resp.user;
        state = {"success": true}
    } else {
        state = {"success": false}
    }
    res.send(state);
};

controller.logout = async (req, res, next) => {
    req.session.destroy((err) => { 
        if(err) return console.error(err);
        res.redirect('/login'); return;
    });
}

controller.loginPasswordForgot = async (req, res, next) => {
    const resp = await service.loginPasswordRecovery(req.body.correo);
    res.send(resp);
}

controller.cultivos = async(req, res, next) => {
    // Validar login
    if (!req.session.login) { res.redirect('/login'); return}
    const id = req.session.idUser; 
    const userData = await service.userData(id);
    const rService = await service.getCultivos();

    res.render('catalog', {'catalogContent': rService, "userData": userData} );
}

controller.enfermedades = async(req, res, next) => {
    // Validar login
    if (!req.session.login) { res.redirect('/login'); return}
    const id = req.session.idUser; 
    const userData = await service.userData(id);

    const rService = await service.getEnfermedades();
    res.render('catalog', {'catalogContent': rService, "userData": userData} );
}

controller.malezas = async(req, res, next) => {
    // Validar login
    if (!req.session.login) { res.redirect('/login'); return}
    const id = req.session.idUser; 
    const userData = await service.userData(id);

    const rService = await service.getMalezas();
    res.render('catalog', {'catalogContent': rService, "userData": userData} );
}

controller.plagas = async(req, res, next) => {
    // Validar login
    if (!req.session.login) { res.redirect('/login'); return}
    const id = req.session.idUser; 
    const userData = await service.userData(id);

    const rService = await service.getPlagas();
    res.render('catalog', {'catalogContent': rService, "userData": userData} );
}

controller.productos = async(req, res, next) => {
    // Validar login
    if (!req.session.login) { res.redirect('/login'); return}
    const id = req.session.idUser; 
    const userData = await service.userData(id);

    const rService = await service.getProductos();
    res.render('catalog', {'catalogContent': rService, "userData": userData} );
}

controller.catalogoDetail = async(req, res, next) => {
    // Validar login
    if (!req.session.login) { res.redirect('/login'); return}
    
    const idUser = req.session.idUser; 
    const userData = await service.userData(idUser);

    res.render('detail', {"userData": userData, "id": req.params.id} );
}

controller.getCultivos = async(req, res, next) => {
    const response = await service.getCultivos();
    res.send(response)
}
controller.getEnfermedades = async(req, res, next) => {
    const response = await service.getEnfermedades();
    res.send(response)
}
controller.getMalezas = async(req, res, next) => {
    const response = await service.getMalezas();
    res.send(response)
}
controller.getPlagas = async(req, res, next) => {
    const response = await service.getPlagas();
    res.send(response)
}
controller.getProductos = async(req, res, next) => {
    const response = await service.getProductos();
    res.send(response)
}

controller.getDetail = async(req, res, next) => {
    const id = req.params.id;
    const response = await service.getDetail(id);
    res.send(response)
}
controller.getDetailProperty = async(req, res, next) => {
    const id = req.params.id;
    const response = await service.getDetailProperty(id);
    res.send(response)
}
controller.getUserData = async(req, res, next) => {
    const idUser = req.session.idUser; 
    const response = await service.userData(idUser);
    res.send(response)
}

controller.crearPropiedades = async(req, res, next) => {
    // Validar login
    if (!req.session.login) { res.redirect('/login'); return}
    const idUser = req.session.idUser; 
    const userData = await service.userData(idUser);

        
    const rService = await service.getListPropiedades();
    res.render("crearPropiedades", {"userData": userData, "data": rService})
}

controller.seccionesCatalogo = async(req, res, next) => {
    // Validar login
    if (!req.session.login) { res.redirect('/login'); return}
    const idUser = req.session.idUser; 
    const userData = await service.userData(idUser);

    const rCatalogoSecciones = await service.getCatalogoSecciones();
    const rSecciones = await service.getSecciones();
    res.render("seccionesCatalogo", {"userData": userData, "data": rCatalogoSecciones, "dataSecciones": rSecciones})
}

controller.contenidoSecciones = async(req, res, next) => {
    // Validar login
    if (!req.session.login) { res.redirect('/login'); return}
    const idUser = req.session.idUser; 
    const userData = await service.userData(idUser);

    const catalogoPropiedadCampo = await service.getListaCatalogos();
    const catalogoSecciones = await service.getCatalogoSecciones();
    const catalogoSubsecciones = await service.getCatalogoPropiedadCampo();
    const subSecciones = await service.getListPropiedades();

    res.render("contenidoSecciones", {"userData": userData, "catalogos": catalogoPropiedadCampo, "catalogosSecciones": catalogoSecciones, "catalogoSeccionesSubsecciones": catalogoSubsecciones, "subsecciones": subSecciones})
}


// Informes
controller.ranking = async(req, res, next) => {
    // Validar login
    if (!req.session.login) { res.redirect('/login'); return}
    const idUser = req.session.idUser; 
    const userData = await service.userData(idUser);

    const rService = await service.getRanking();
    res.render('rankingAsesores', {"userData": userData, "lista": rService})
}

controller.movimientos = async(req, res, next) => {
    // Validar login
    if (!req.session.login) { res.redirect('/login'); return}
    const idUser = req.session.idUser; 
    const userData = await service.userData(idUser);

    let date = currentDate();

    const rService = await service.contarPrincipales();
    const clientes = await service.informeClientes(date);
    const recomendaciones = await service.informeRecomendaciones(date);
    const fichas = await service.informeFichas(date);
    const capacitaciones = await service.informeCapacitaciones(date);
    const aporte = await service.informeAporte(date);
    const acompa??amiento = await service.informeAcompa??amiento(date);

    res.render('movimientos', {"userData": userData, "data": rService, "clientes": clientes, "recomendaciones": recomendaciones, "ficha": fichas, "capacitaciones": capacitaciones, "aporte": aporte, "acompa??amiento": acompa??amiento})
}

controller.movimientosByDate = async (req, res, next) => {
    let date = req.params.date

    const clientes = await service.informeClientes(date);
    const recomendaciones = await service.informeRecomendaciones(date);
    const fichas = await service.informeFichas(date);
    const capacitaciones = await service.informeCapacitaciones(date);
    const aporte = await service.informeAporte(date);
    const acompa??amiento = await service.informeAcompa??amiento(date);

    res.send({"clientes": clientes, "recomendaciones": recomendaciones, "ficha": fichas, "capacitaciones": capacitaciones, "aporte": aporte, "acompa??amiento": acompa??amiento})
}

controller.movimientosByDateUser = async (req, res, next) => {
    const idUser = req.session.idUser; 
    const userData = await service.userData(idUser);

    let date = req.params.date
    date = date.replace("-", "/")
    let user = req.params.user

    const rService = await service.contarPrincipalesByUser(user);
    const clientes = await service.informeClientesByUser(date, user);
    const recomendaciones = await service.informeRecomendacionesByUser(date, user);
    const fichas = await service.informeFichasByUser(date, user);
    const capacitaciones = await service.informeCapacitacionesByUser(date, user);
    const aporte = await service.informeAporteByUser(date, user);
    const acompa??amiento = await service.informeAcompa??amientoByUser(date, user);

    res.render('movimientos', {"userData": userData, "data": rService,"clientes": clientes, "recomendaciones": recomendaciones, "ficha": fichas, "capacitaciones": capacitaciones, "aporte": aporte, "acompa??amiento": acompa??amiento})
}

controller.informeProductos = async(req, res, next) => {
    // Validar login
    if (!req.session.login) { res.redirect('/login'); return}
    const idUser = req.session.idUser; 
    const userData = await service.userData(idUser);

    let date = currentDate()
    const tarjetas = await service.informeProductosTarjetas(date);
    const graficas = await service.informeProductosGraficas(date);

    res.render('informeProductos', {"userData": userData, "general": tarjetas, "detail": graficas})
}

controller.informeProductosByDate = async(req, res, next) => {
    let date = req.params.date;
    const tarjetas = await service.informeProductosTarjetas(date);
    const graficas = await service.informeProductosGraficas(date);

    res.send({"general": tarjetas, "detail": graficas})
}

controller.getInformeBB = async(req, res, next) => {
    // Validar login
    if (!req.session.login) { res.redirect('/login'); return}
    const idUser = req.session.idUser; 
    const userData = await service.userData(idUser);

    let date = currentDate();
    const tarjetasBB = await service.informeBBtarjetas(date);
    const detailBB = await service.informeBB(date);

    res.render('informeBlancosBiologicos', {"userData": userData, "data": tarjetasBB, "data2": detailBB})
}

controller.mapBB = async(req, res, next) => {
    // Validar login
    if (!req.session.login) { res.redirect('/login'); return}
    const idUser = req.session.idUser; 
    const userData = await service.userData(idUser);

    const dataBB = await service.getMapBB();
    const mastersDpto = await service.mastersDepartamentos();

    res.render("mapaBlancosBiologicos", {"userData": userData, "data": dataBB, "dptos": mastersDpto})
}

controller.evaluaciones = async(req, res, next) => {
    // Validar login
    if (!req.session.login) { res.redirect('/login'); return}
    const idUser = req.session.idUser; 
    const userData = await service.userData(idUser);

    let fechaInicio = firstDayOfYear().replace(/\//g, "");
    let fechaFinal = currentDate().replace(/\//g, "");

    const rEvaluaciones = await service.evaluacionesDpto(fechaInicio, fechaFinal);
    const rResponse = await service.respuestasDpto(fechaInicio, fechaFinal);

    res.render('informeEvaluaciones', {"userData": userData, "evaluaciones": rEvaluaciones, "respuestas": rResponse})
}

controller.mapaCalor = async(req, res, next) => {
    // Validar login
    if (!req.session.login) { res.redirect('/login'); return}
    const idUser = req.session.idUser; 
    const userData = await service.userData(idUser);

    let fechaInicio = firstDayOfYear().replace(/\//g, "");
    let fechaFinal = currentDate().replace(/\//g, "");

    const rmapaCalor = await service.getMapaCalor(fechaInicio, fechaFinal);

    res.render("mapaCalor", {"userData": userData, "data": rmapaCalor})
}

// Vistas
controller.aportes = async(req, res, next) => {
    // Validar login
    if (!req.session.login) { res.redirect('/login'); return}
    const idUser = req.session.idUser; 
    const userData = await service.userData(idUser);

    const rService = await service.getAportes();
    res.render('aportes', {"userData": userData, 'aportes': rService} );
}

controller.clientes = async(req, res, next) => {
    // Validar login
    if (!req.session.login) { res.redirect('/login'); return}
    const idUser = req.session.idUser; 
    const userData = await service.userData(idUser);

    const rService = await service.getClientes();
    res.render('clientes', {"userData": userData, "clientes": rService})
}

controller.notificaciones = async(req, res, next) => {
    // Validar login
    if (!req.session.login) { res.redirect('/login'); return}
    const idUser = req.session.idUser; 
    const userData = await service.userData(idUser);

    const rNotificaciones = await service.getNotifiaciones();
    const rUsuariosNotificaciones = await service.getNotifiacionesUsuarios();
    res.render('notificaciones', {"userData": userData, "notificaciones": rNotificaciones, "usuarios": rUsuariosNotificaciones})
}

controller.usuariosExternos = async(req, res, next) => {
    // Validar login
    if (!req.session.login) { res.redirect('/login'); return}
    const idUser = req.session.idUser; 
    const userData = await service.userData(idUser);
    
    const rUsuarios = await service.getUsuariosExternos();
    res.render('usuariosExternos', {"userData": userData, "usuarios": rUsuarios})
}

controller.usuarios = async (req, res, next) => {
    // Validar login
    if (!req.session.login) { res.redirect('/login'); return}
    const idUser = req.session.idUser; 
    const userData = await service.userData(idUser);

    const rActivos = await service.usuariosActivos();
    const rInactivos = await service.usuariosInactivos();
    const cargos = await service.mastersCargos();
    const roles = await service.mastersRoles();
    const dpts = await service.mastersDepartamentos();

    res.render('usuarios', {"userData": userData, "inactivos": rInactivos, "activos": rActivos, "cargos": cargos, "roles": roles, "departamentos": dpts})
}

controller.sucursales = async(req, res, next) => {
    // Validar login
    if (!req.session.login) { res.redirect('/login'); return}
    const idUser = req.session.idUser; 
    const userData = await service.userData(idUser);

    const rActivos = await service.sucursalesActivas();
    const rInactivos = await service.sucursalesInactivas();
    const dpts = await service.mastersDepartamentos();
    const roles = await service.mastersRoles();
    const cargos = await service.mastersCargos();

    res.render('sucursales', {"userData": userData, "inactivos": rInactivos, "activos": rActivos, "cargos": cargos, "roles": roles, "departamentos": dpts})
}

controller.rankingUser = async (req, res, next) => {
    var id = req.params.id;
    const rService = await service.getRankingUsuario(id);
    res.send({"data": rService})
}

controller.permisos = async(req, res, next) => {
    // Validar login
    if (!req.session.login) { res.redirect('/login'); return}
    const idUser = req.session.idUser; 
    const userData = await service.userData(idUser);

    const rService = await service.getPermissions();
    res.render('permisos', {"userData": userData, "permisos": rService})
}

controller.solicitudesInformacion = async (req, res, next) => {
    // Validar login
    if (!req.session.login) { res.redirect('/login'); return}
    const idUser = req.session.idUser; 
    const userData = await service.userData(idUser);

    const rService = await service.solicitudesDeInformacion();
    res.render('solicitudInformacion', {"userData": userData, "solicitudesA": rService})
}

controller.solicitudInformacionPending = async (req, res, next) => {
    const rService = await service.getPendingRequests();
    res.send({"data": rService});
}

controller.solicitudInformacionClosed = async (req, res, next) => {
    const rService = await service.getClosedRequests();
    res.send({"data": rService});
}

controller.solicitudInformacionDetail = async (req, res, next) => {
    var id = req.params.id;
    const rDetalle = await service.getDetalleSolicitud(id);
    const rNota = await service.getNotasSolicitud(id);

    res.send({"detalle": rDetalle, "nota": rNota})
}



module.exports = controller