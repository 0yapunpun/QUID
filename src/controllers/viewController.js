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

controller.loginAutentication = async (req, res, next) => {
    let data = req.params;

    console.log(data)
    // const rService = await service.getCultivos(data);
    // res.render("login");
}

controller.cultivos = async(req, res, next) => {
    const rService = await service.getCultivos();
    res.render('catalog', {'catalogContent': rService} );
}

controller.enfermedades = async(req, res, next) => {
    const rService = await service.getEnfermedades();
    res.render('catalog', {'catalogContent': rService} );
}

controller.malezas = async(req, res, next) => {
    const rService = await service.getMalezas();
    res.render('catalog', {'catalogContent': rService} );
}

controller.plagas = async(req, res, next) => {
    const rService = await service.getPlagas();
    res.render('catalog', {'catalogContent': rService} );
}

controller.productos = async(req, res, next) => {
    const rService = await service.getProductos();
    res.render('catalog', {'catalogContent': rService} );
}

controller.crearPropiedades = async(req, res, next) => {
    const rService = await service.getListPropiedades();
    res.render("crearPropiedades", {"data": rService})
}

controller.seccionesCatalogo = async(req, res, next) => {
    const rCatalogoSecciones = await service.getCatalogoSecciones();
    const rSecciones = await service.getSecciones();
    res.render("seccionesCatalogo", {"data": rCatalogoSecciones, "dataSecciones": rSecciones})
}

controller.contenidoSecciones = async(req, res, next) => {
    const catalogoPropiedadCampo = await service.getListaCatalogos();
    const catalogoSecciones = await service.getCatalogoSecciones();
    const catalogoSubsecciones = await service.getCatalogoPropiedadCampo();
    const subSecciones = await service.getListPropiedades();

    res.render("contenidoSecciones", {"catalogos": catalogoPropiedadCampo, "catalogosSecciones": catalogoSecciones, "catalogoSeccionesSubsecciones": catalogoSubsecciones, "subsecciones": subSecciones})
}

controller.catalogoDetail = async(req, res, next) => {
    const id = req.params.id;

    const rDetail = await service.getDetail(id);
    const rDetailProperty = await service.getDetailProperty(id);

    const rcultivos = await service.getCultivos();
    const rEnfermedades = await service.getEnfermedades();
    const rMalezas = await service.getMalezas();
    const rPlagas = await service.getPlagas();
    const rProductos = await service.getProductos();


    res.render('detail', {'detalleProducto': rDetail, "detallePropiedad": rDetailProperty, "catalogoCultivos": rcultivos, "catalogoEnfermedades": rEnfermedades, "catalogoMalezas": rMalezas, "catalogoPlagas": rPlagas, "catalogoProductos": rProductos, "id": id} );
}

// Informes
controller.ranking = async(req, res, next) => {
    const rService = await service.getRanking();
    res.render('rankingAsesores', {"lista": rService})
}

controller.movimientos = async(req, res, next) => {
    let date = currentDate();

    const rService = await service.contarPrincipales();
    const clientes = await service.informeClientes(date);
    const recomendaciones = await service.informeRecomendaciones(date);
    const fichas = await service.informeFichas(date);
    const capacitaciones = await service.informeCapacitaciones(date);
    const aporte = await service.informeAporte(date);
    const acompañamiento = await service.informeAcompañamiento(date);

    res.render('movimientos', {"data": rService, "clientes": clientes, "recomendaciones": recomendaciones, "ficha": fichas, "capacitaciones": capacitaciones, "aporte": aporte, "acompañamiento": acompañamiento})
}

controller.movimientosUsuario = async(req, res, next) => {
    var id = req.params.id;
    const rService = await service.movimientosPorUsuario(id);
    res.render('movimientos', {"data": rService})
}

controller.informeProductos = async(req, res, next) => {
    let date = currentDate()
    const tarjetas = await service.informeProductosTarjetas(date);
    const graficas = await service.informeProductosGraficas(date);

    res.render('informeProductos', {"general": tarjetas, "detail": graficas})
}

controller.informeProductosByDate = async(req, res, next) => {
    let date = req.params.date;
    const tarjetas = await service.informeProductosTarjetas(date);
    const graficas = await service.informeProductosGraficas(date);

    res.send({"general": tarjetas, "detail": graficas})
}

controller.getInformeBB = async(req, res, next) => {
    let date = currentDate();
    const tarjetasBB = await service.informeBBtarjetas(date);
    const detailBB = await service.informeBB(date);

    res.render('informeBlancosBiologicos', {"data": tarjetasBB, "data2": detailBB})
}

controller.mapBB = async(req, res, next) => {
    const dataBB = await service.getMapBB();
    const mastersDpto = await service.mastersDepartamentos();

    res.render("mapaBlancosBiologicos", {"data": dataBB, "dptos": mastersDpto})
}

controller.evaluaciones = async(req, res, next) => {
    let fechaInicio = firstDayOfYear().replace(/\//g, "");
    let fechaFinal = currentDate().replace(/\//g, "");

    const rEvaluaciones = await service.evaluacionesDpto(fechaInicio, fechaFinal);
    const rResponse = await service.respuestasDpto(fechaInicio, fechaFinal);

    res.render('informeEvaluaciones', {"evaluaciones": rEvaluaciones, "respuestas": rResponse})
}

controller.mapaCalor = async(req, res, next) => {
    let fechaInicio = firstDayOfYear().replace(/\//g, "");
    let fechaFinal = currentDate().replace(/\//g, "");

    const rmapaCalor = await service.getMapaCalor(fechaInicio, fechaFinal);

    res.render("mapaCalor", {"data": rmapaCalor})
}


// Cosas que no son ni informes ni catalogos
controller.aportes = async(req, res, next) => {
    const rService = await service.getAportes();
    res.render('aportes', {'aportes': rService} );
}

controller.clientes = async(req, res, next) => {
    const rService = await service.getClientes();
    res.render('clientes', {"clientes": rService})
}

controller.notificaciones = async(req, res, next) => {
    const rNotificaciones = await service.getNotifiaciones();
    const rUsuariosNotificaciones = await service.getNotifiacionesUsuarios();
    res.render('notificaciones', {"notificaciones": rNotificaciones, "usuarios": rUsuariosNotificaciones})
}

controller.usuariosExternos = async(req, res, next) => {
    const rUsuarios = await service.getUsuariosExternos();
    res.render('usuariosExternos', {"usuarios": rUsuarios})
}

controller.sucursales = async(req, res, next) => {
    const rActivos = await service.sucursalesActivas();
    const rInactivos = await service.sucursalesInactivas();
    const dpts = await service.mastersDepartamentos();
    const roles = await service.mastersRoles();
    const cargos = await service.mastersCargos();

    res.render('sucursales', {"inactivos": rInactivos, "activos": rActivos, "cargos": cargos, "roles": roles, "departamentos": dpts})
}

controller.permisos = async(req, res, next) => {
    const rService = await service.getPermissions();
    res.render('permisos', {"permisos": rService})
}

controller.usuarios = async (req, res, next) => {
    const rActivos = await service.usuariosActivos();
    const rInactivos = await service.usuariosInactivos();
    const cargos = await service.mastersCargos();
    const roles = await service.mastersRoles();
    const dpts = await service.mastersDepartamentos();

    res.render('usuarios', {"inactivos": rInactivos, "activos": rActivos, "cargos": cargos, "roles": roles, "departamentos": dpts})
}

controller.rankingUser = async (req, res, next) => {
    var id = req.params.id;
    const rService = await service.getRankingUsuario(id);
    res.send({"data": rService})
}

controller.solicitudesInformacion = async (req, res, next) => {
    const rService = await service.solicitudesDeInformacion();
    res.render('solicitudInformacion', {"solicitudesA": rService})
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