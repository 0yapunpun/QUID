const controller = require('./controller');


const catalogoCultivos = (req, res) => {
    controller.getCatalogCultivos(req, (resp) => {
        res.render('catalog', {'catalogContent': resp} );
    })
}

const catalogoEnfermedades = (req, res) => {
    controller.getCatalogEnfermedades(req, (resp) => {
        res.render('catalog', {'catalogContent': resp} );
    })
}

const catalogoMalezas = (req, res) => {
    controller.getCatalogMalezas(req, (resp) => {
        res.render('catalog', {'catalogContent': resp} );
    })
}

const catalogoPlagas = (req, res) => {
    controller.getCatalogPlagas(req, (resp) => {
        res.render('catalog', {'catalogContent': resp} );
    })
}

const catalogoProductos = (req, res) => {
    controller.getCatalogProductos(req, (resp) => {
        res.render('catalog', {'catalogContent': resp} );
    })
}

const catalogoDetail = (req, res) => {
    var id = req.params.id;
    controller.getCatalogoDetail(id, req, (resp) => {
        res.render('detail', {'detalleProducto': resp[0], "detallePropiedad": resp[1], "catalogoCultivos": resp[2], "catalogoEnfermedades": resp[3], "catalogoMalezas": resp[4], "catalogoPlagas": resp[5], "catalogoProductos": resp[6], "id": id} );
    })
}

const aportes = (req, res) => {
    controller.getAportes(req, (resp) => {
        res.render('aportes', {'aportes': resp} );
    })
}

const clientes = (req, res) => {
    controller.getClients(req, (resp) => {
        res.render('clientes', {"clientes": resp})
    })
}

const solicitudInformacion = (req, res) => {
    controller.getSolicitudInformacion(req, (resp) => {
        res.render('solicitudInformacion', {"solicitudesA": resp})
    })
}

const solicitudInformacionPending = (req, res) => {
    controller.getPendingRequests(req, (resp) => {
        res.send({"data": resp});
    })
}

const solicitudInformacionClosed = (req, res) => {
    controller.getClosedRequests(req, (resp) => {
        res.send({"data": resp});
    })
}

const solicitudInformacionDetail = (req, res) => {
    var id = req.params.id;
    controller.getDetailRequest(id, req, (resp) => {
        res.send({"detalle": resp[0], "nota": resp[1]})
    })
}


const notificaciones = (req, res) => {
    controller.getNotifications(req, (resp) => {
        res.render('notificaciones', {"notificaciones": resp.notificaciones, "usuarios": resp.usuarios})
    })
}

const usuarios = (req, res) => {
    controller.getUsuarios(req, (resp) => {
        controller.getMasters(req, (respMasters) =>{
            res.render('usuarios', {"inactivos": resp[0], "activos": resp[1], "cargos": respMasters.cargos, "roles": respMasters.roles, "departamentos": respMasters.departamentos})
        })
    })
}

const usuariosExternos = (req, res) => {
    controller.getExternalUsers(req, (resp) => {
        res.render('usuariosExternos', {"usuarios": resp})
    })
}

const sucursales = (req, res) => {
    controller.getSucursales(req, (resp) => {
        controller.getMasters(req, (respMasters) =>{
            res.render('sucursales', {"inactivos": resp[0], "activos": resp[1], "cargos": respMasters.cargos, "roles": respMasters.roles, "departamentos": respMasters.departamentos})
        })
    })
}

const permisos = (req, res) => {
    controller.getPemissions(req, (resp) => {
        res.render('permisos', {"permisos": resp})
    })
}

const ranking = (req, res) => {
    controller.getRankingUsuarioAll(req, (resp) => {
        res.render('rankingAsesores', {"lista": resp})
    })
}

const rankingUser = (req, res) => {
    var id = req.params.id;
    controller.getRankingUsuario(id, req, (resp) => {
        res.send({"data": resp})
    })
}

const movimientos = (req, res) => {
    controller.getMovimientosAllInforme(req, (resp) => {
        res.render('movimientos', {"data": resp.data, "clientes": resp.clientes, "recomendaciones": resp.recomendaciones, "ficha": resp.ficha, "capacitaciones": resp.capacitaciones, "aporte": resp.aporte, "acompañamiento": resp.acompañamiento})
    })
}

const movimientosUser = (req, res) => {
    var id = req.params.id;
    controller.getMovimientosInforme(id, req, (resp) => {
        res.render('movimientos', {"data": resp})
    })
}

const blancosBiologicos = (req, res) => {
    controller.getBlancosBiologicosInforme(req, (resp) => {
        console.log(resp)
        res.render('informeBlancosBiologicos', {"data": resp[0], "data2": resp[1]})
    })
}

const informeProductos = (req, res) => {
    let date = "";
    controller.getProductosInforme(date, req, (resp) => {
        res.render('informeProductos', {"general": resp.general, "detail": resp.detail})
    })
}

const informeProductosByDate = (req, res) => {
    let date = req.params.date;
    controller.getProductosInforme(date, req, (resp) => {
        res.send({"general": resp.general, "detail": resp.detail})
    })
}

const evaluaciones = (req, res) => {
    let date = "";
    controller.getEvaluacionesInformes(date, req, (resp) => {
        res.render('informeEvaluaciones', {"evaluaciones": resp.evaluaciones, "respuestas": resp.respuestas})
    })
}

const mapaCalor = (req, res) => {
    controller.getMapaCalorInformes(req, (resp) => {
        res.render("mapaCalor", {"data": resp})

    })
}

const mapaBlancosBiologicos = (req, res)  => {
    controller.getBlancosBiologicosMapa(req, (resp) => {
        res.render("mapaBlancosBiologicos", {"data": resp})

    })
}

const seccionesCatalogo = (req, res) => {
    controller.getSeccionesCatalogo(req, (resp) => {
        res.render("seccionesCatalogo", {"data": resp[0], "dataSecciones": resp[1]})
    })
}

const crearPropiedades = (req, res) => {
    controller.getListPropiedades(req, (resp) => {
        res.render("crearPropiedades", {"data": resp})
    })
}

const contenidoSecciones = (req, res) => {
    controller.getContenidoSecciones(req, (resp) => {
        res.render("contenidoSecciones", {"catalogos": resp.catalogos, "catalogosSecciones": resp.catalogosSecciones, "catalogoSeccionesSubsecciones": resp.catalogoSeccionesSubsecciones, "subsecciones": resp.subsecciones})
    })
}



module.exports = {
	catalogoCultivos,
    catalogoEnfermedades,
    catalogoMalezas,
    catalogoPlagas,
    catalogoProductos,
    catalogoDetail,
    aportes,
    clientes,
    solicitudInformacion,
    solicitudInformacionPending,
    solicitudInformacionClosed,
    solicitudInformacionDetail,
    notificaciones,
    usuarios,
    sucursales,
    usuariosExternos,
    permisos,
    ranking,
    rankingUser,
    movimientos,
    movimientosUser,
    blancosBiologicos,
    informeProductos,
    informeProductosByDate,
    evaluaciones,
    mapaCalor,
    mapaBlancosBiologicos,
    seccionesCatalogo,
    crearPropiedades,
    contenidoSecciones
    
}