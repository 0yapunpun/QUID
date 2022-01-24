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
    res.render('detail');
}

module.exports = {
	catalogoCultivos,
    catalogoEnfermedades,
    catalogoMalezas,
    catalogoPlagas,
    catalogoProductos,
    catalogoDetail
}