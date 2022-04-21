const fetch = require('node-fetch');
const bUrl = 'http://104.236.159.193:3010/'
const service = {};
const baseOptions = { method: 'get', rejectUnauthorized: false, headers: {'Content-Type': 'application/json', 'X-TOKEN': 'UzEkdGVtYSRJZ2IyMDE1Kg=='} };

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

service.loginAutentication = async (data) => {
    const url = bUrl+'autenticar';
    const options = { 
        method: 'post', 
        body: JSON.stringify(data),
        headers: {'Content-Type': 'application/json'},
    }
    return await makeRequest(url, options);
}

service.loginPasswordRecovery = async (correo) => {
    const url = bUrl+'recuperar_clave?correo='+correo+'&usuario=&fbId=&gpId=';
    return await makeRequest(url);
}

service.userData = async (id) => {
    const url = bUrl+'obtener_datos_usuario?id_usuario='+id;
    const data =  await makeRequest(url);
    return data.data.usuario[0]
}

// Masters
service.mastersDepartamentos = async () => {
    const url = bUrl+'departamentociudad'
    const data =  await makeRequest(url);
    return JSON.stringify(data)
}

service.mastersCargos = async () => {
    const url = bUrl+'obtener_cargos'
    const data =  await makeRequest(url);
    return JSON.stringify(data)
}

service.mastersRoles = async () => {
    const url = bUrl+'obtener_roles'
    const data =  await makeRequest(url);
    return JSON.stringify(data)
}

// Catalogos
service.getCultivos = async () => {
    const url = bUrl+'catalogoenc/1';
    const data = await makeRequest(url);
    return JSON.stringify(data)
}

service.getEnfermedades = async () => {
    const url = bUrl+'catalogoenc/2';
    const data =  await makeRequest(url);
    return JSON.stringify(data)
}

service.getMalezas = async () => {
    const url = bUrl+'catalogoenc/3';
    const data =  await makeRequest(url);
    return JSON.stringify(data)
}

service.getPlagas = async () => {
    const url = bUrl+'catalogoenc/4';
    const data =  await makeRequest(url);
    return JSON.stringify(data)
}

service.getProductos = async () => {
    const url = bUrl+'catalogoenc/5';
    const data =  await makeRequest(url);
    return JSON.stringify(data)
}

service.getDetail = async (id) => {
    const url = bUrl+'catalogodetalle/'+id;
    const data =  await makeRequest(url);
    return JSON.stringify(data)
}

service.getDetailProperty = async (id) => {
    const url = bUrl+'catalogodetallepropiedad/'+id;
    const data =  await makeRequest(url);
    return JSON.stringify(data)
}

service.getListPropiedades = async (id) => {
    const url = bUrl+'campo_propiedad'
    const data =  await makeRequest(url);
    return JSON.stringify(data)
}

service.getCatalogoSecciones = async (id) => {
    const url = bUrl+'catalogo_secciones'
    const data =  await makeRequest(url);
    return JSON.stringify(data)
}

service.getSecciones = async (id) => {
    const url = bUrl+'secciones'
    const data =  await makeRequest(url);
    return JSON.stringify(data)
}

service.getCatalogoPropiedadCampo = async () => {
    const url = bUrl+'catalogo_propiedad_campo'
    const data =  await makeRequest(url);
    return JSON.stringify(data)
}

service.getListaCatalogos = async () => {
    const url = bUrl+'listacatalogo'
    const data =  await makeRequest(url);
    return JSON.stringify(data)
}

// Informes
service.getRanking = async () => {
    const url = bUrl+'obtener_ranking_general_dashboard'
    const data =  await makeRequest(url);
    return JSON.stringify(data)
}

service.getRankingUsuario = async (id) => {
    const url = bUrl+'obtener_ranking_usuario/'+id;
    const data =  await makeRequest(url);
    return JSON.stringify(data)
}

service.contarPrincipales = async () => {
    const url = bUrl+'contar_principales'
    const data =  await makeRequest(url);
    return JSON.stringify(data)
}

service.informeClientes = async (date) => {
    const url = bUrl+'contar_clientes_fecha?fecha='+date;
    const data =  await makeRequest(url);
    return JSON.stringify(data)
}

service.informeRecomendaciones = async (date) => {
    const url = bUrl+'contar_recomendaciones_fecha?fecha='+date;
    const data =  await makeRequest(url);
    return JSON.stringify(data)
}

service.informeFichas = async (date) => {
    const url = bUrl+'contar_ficha_fecha?fecha='+date;
    const data =  await makeRequest(url);
    return JSON.stringify(data)
}

service.informeCapacitaciones = async (date) => {
    const url = bUrl+'contar_capacitacion_fecha?fecha='+date;
    const data =  await makeRequest(url);
    return JSON.stringify(data)
}

service.informeAporte = async (date) => {
    const url = bUrl+'contar_aporte_fecha?fecha='+date;
    const data =  await makeRequest(url);
    return JSON.stringify(data)
}

service.informeAcompañamiento = async (date) => {
    const url = bUrl+'contar_acompanamientos_fecha?fecha='+date;
    const data =  await makeRequest(url);
    return JSON.stringify(data)
}

service.contarPrincipalesByUser = async (id) => {
    const url = bUrl+'contar_principales?id_usuario='+id;
    const data =  await makeRequest(url);
    return JSON.stringify(data)
}

service.informeClientesByUser = async (date, id) => {
    const url = bUrl+'contar_clientes_fecha?fecha='+date+"&id_usuario="+id;
    const data =  await makeRequest(url);
    return JSON.stringify(data)
}

service.informeRecomendacionesByUser = async (date, id) => {
    const url = bUrl+'contar_recomendaciones_fecha?fecha='+date+"&id_usuario="+id;
    const data =  await makeRequest(url);
    return JSON.stringify(data)
}

service.informeFichasByUser = async (date, id) => {
    const url = bUrl+'contar_ficha_fecha?fecha='+date+"&id_usuario="+id;
    const data =  await makeRequest(url);
    return JSON.stringify(data)
}

service.informeCapacitacionesByUser = async (date, id) => {
    const url = bUrl+'contar_capacitacion_fecha?fecha='+date+"&id_usuario="+id;
    const data =  await makeRequest(url);
    return JSON.stringify(data)
}

service.informeAporteByUser = async (date, id) => {
    const url = bUrl+'contar_aporte_fecha?fecha='+date+"&id_usuario="+id;
    const data =  await makeRequest(url);
    return JSON.stringify(data)
}

service.informeAcompañamientoByUser = async (date, id) => {
    const url = bUrl+'contar_acompanamientos_fecha?fecha='+date+"&id_usuario="+id;
    const data =  await makeRequest(url);
    return JSON.stringify(data)
}

service.movimientosPorUsuario = async (userID) => {
    userID = Number(userID);
    const url = bUrl+'contar_principales?id_usuario='+userID;
    const data =  await makeRequest(url);
    return JSON.stringify(data)
}

service.informeProductosTarjetas = async (date) => {
    const url = bUrl+'contar_principales_productos?fecha='+date;
    const data =  await makeRequest(url);
    return JSON.stringify(data)
}

service.informeProductosGraficas = async (date) => {
    const url = bUrl+'contar_productos_fecha?fecha='+date;
    const data =  await makeRequest(url);
    return JSON.stringify(data)
}

service.informeBBtarjetas = async (date) => {
    const url = bUrl+'contar_principales_bb?fecha='+date
    const data =  await makeRequest(url);
    return JSON.stringify(data)
}

service.informeBB = async (date) => {
    const url = bUrl+'contar_blanco_biologico_fecha?fecha='+date
    const data =  await makeRequest(url);
    return JSON.stringify(data)
}

service.getMapBB = async () => {
    const url = bUrl+'geolocalizacion_blancos_biologicos'
    const data =  await makeRequest(url);
    return JSON.stringify(data)
}

service.evaluacionesDpto = async (fechaInicio, fechaFinal) => {
    const url = bUrl+"obtener_evaluacionesDepto?fechaInicial="+fechaInicio+"&fechaFinal="+fechaFinal;
    const data =  await makeRequest(url);
    return JSON.stringify(data);
}

service.respuestasDpto = async (fechaInicio, fechaFinal) => {
    const url = bUrl+"obtener_respuestasDepto?fechaInicial="+fechaInicio+"&fechaFinal="+fechaFinal;
    const data =  await makeRequest(url);
    return JSON.stringify(data);
}

service.getMapaCalor = async (fechaInicio, fechaFinal) => {
    const url = bUrl+"get_analytics?fechaInicial="+fechaInicio+"&fechaFinal="+fechaFinal;
    const data =  await makeRequest(url);
    return JSON.stringify(data);
}

service.getAportes = async () => {
    const url = bUrl+'obtener_aportes?fecha=2016/02/29%2008:12:00'
    const data =  await makeRequest(url);
    return JSON.stringify(data);
}

service.getClientes = async () => {
    const url = bUrl+'clienteall';
    const data =  await makeRequest(url);
    return JSON.stringify(data);
}

service.getNotifiaciones = async () => {
    const url = bUrl+'obtener_notificaciones';
    const data =  await makeRequest(url);
    return JSON.stringify(data);
}

service.getNotifiacionesUsuarios = async () => {
    const url = bUrl+'obtener_usuarios_notificacion';
    const data =  await makeRequest(url);
    return JSON.stringify(data);
}

service.getUsuariosExternos = async () => {
    const url = bUrl+'usuario?perfil=U&estado=1';
    const data =  await makeRequest(url);
    return JSON.stringify(data);
}

service.sucursalesActivas = async () => {
    const url = bUrl+'usuario?perfil=S&estado=1';
    const data =  await makeRequest(url);
    return JSON.stringify(data);
}

service.sucursalesInactivas = async () => {
    const url = bUrl+'usuario?perfil=S&estado=0';
    const data =  await makeRequest(url);
    return JSON.stringify(data);
}

service.usuariosActivos = async () => {
    const url = bUrl+'usuario?perfil=A&estado=1';
    const data =  await makeRequest(url);
    return JSON.stringify(data);
}

service.usuariosInactivos = async () => {
    const url = bUrl+'usuario?perfil=A&estado=0';
    const data =  await makeRequest(url);
    return JSON.stringify(data);
}

service.getPermissions = async () => {
    const url = bUrl+'obtener_permisos';
    const data =  await makeRequest(url);
    return JSON.stringify(data);
}

service.solicitudesDeInformacion = async () => {
    const url = bUrl+'obtener_solicitudes?estado=A';
    const data =  await makeRequest(url);
    return JSON.stringify(data);
}

service.getPendingRequests = async () => {
    const url = bUrl+'obtener_solicitudes?estado=P';
    const data =  await makeRequest(url);
    return JSON.stringify(data);
}

service.getClosedRequests = async () => {
    const url = bUrl+'obtener_solicitudes?estado=C';
    const data =  await makeRequest(url);
    return JSON.stringify(data);
}


service.getDetalleSolicitud = async (id) => {
    const url = bUrl+'obtener_detalle_solicitud?id_solicitud='+id;
    const data =  await makeRequest(url);
    return JSON.stringify(data);
}

service.getNotasSolicitud = async (id) => {
    const url = bUrl+'obtener_notas_solicitud?id_solicitud='+id;
    const data =  await makeRequest(url);
    return JSON.stringify(data);
}

const makeRequest = async (url, options) => {
    try {
        var resp = await fetch(url, options || {});
        if (!resp.ok) return {'err': 'Error obteniendo los datos'};
        
        const json = await resp.json();
        return {'data': json};
    } catch(error) {
        return {'err': 'Error obteniendo los datos', 'err_service': error};
    }
}

module.exports = service