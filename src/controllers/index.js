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
    let id = req.params.id;
    controller.getCatalogoDetail(id, req, (resp) => {
        res.render('detail', {'detalleProducto': resp[0], "detallePropiedad": resp[1], "catalogoCultivos": resp[2], "catalogoEnfermedades": resp[3], "catalogoMalezas": resp[4], "catalogoPlagas": resp[5], "catalogoProductos": resp[6]} );
    })
}

const aportes = (req, res) => {
    res.render('aportes')
}

module.exports = {
	catalogoCultivos,
    catalogoEnfermedades,
    catalogoMalezas,
    catalogoPlagas,
    catalogoProductos,
    catalogoDetail,
    aportes
    
}