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

const notificaciones = (req, res) => {
    controller.getNotifications(req, (resp) => {
        res.render('notificaciones', {"notificaciones": resp})
    })
}

const usuarios = (req, res) => {
    controller.getUsuarios(req, (resp) => {
        res.render('usuarios', {"inactivos": resp[0], "activos": resp[1]})
    })
}

const usuariosExternos = (req, res) => {
    controller.getExternalUsers(req, (resp) => {
        res.render('usuariosExternos', {"usuarios": resp})
    })
}

const sucursales = (req, res) => {
    controller.getSucursales(req, (resp) => {
        res.render('sucursales', {"inactivos": resp[0], "activos": resp[1]})
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

const movimientos = (req, res) => {
    controller.getMovimientosAllInforme(req, (resp) => {
        res.render('movimientos', {"data": resp})
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
    notificaciones,
    usuarios,
    sucursales,
    usuariosExternos,
    permisos,
    ranking,
    movimientos,
    movimientosUser,
    blancosBiologicos
}