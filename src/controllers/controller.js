const request = require('request');
const squel = require('squel');

const removeSpecialCharacters = (s) => {
    s = s.replace(/\\n/g, "\\n")  
    .replace(/\\'/g, "\\'")
    .replace(/\\"/g, '\\"')
    .replace(/\\&/g, "\\&")
    .replace(/\\r/g, "\\r")
    .replace(/\\t/g, "\\t")
    .replace(/\\b/g, "\\b")
    .replace(/\\f/g, "\\f");
    return s = s.replace(/[\u0000-\u0019]+/g,""); 
};


controller = {
    getCatalogCultivos: (req, cb) => {
		var options = {
			method: 'GET',
			url: 'http://104.236.159.193:3010/catalogoenc/1',
		};

		request(options, function(err, res, resp) {
			if (err) { console.error(err); resp = false; }
			cb(resp);
		});
	},

    getCatalogEnfermedades: (req, cb) => {
		var options = {
			method: 'GET',
			url: 'http://104.236.159.193:3010/catalogoenc/2',
		};

		request(options, function(err, res, resp) {
			if (err) { console.error(err); resp = false; }
			cb(resp);
		});
	},

    getCatalogMalezas: (req, cb) => {
		var options = {
			method: 'GET',
			url: 'http://104.236.159.193:3010/catalogoenc/3',
		};

		request(options, function(err, res, resp) {
			if (err) { console.error(err); resp = false; }
			cb(resp);
		});
	},

    getCatalogPlagas: (req, cb) => {
		var options = {
			method: 'GET',
			url: 'http://104.236.159.193:3010/catalogoenc/4',
		};

		request(options, function(err, res, resp) {
			if (err) { console.error(err); resp = false; }
			cb(resp);
		});
	},

    getCatalogProductos: (req, cb) => {
		var options = {
			method: 'GET',
			url: 'http://104.236.159.193:3010/catalogoenc/5',
		};

		request(options, function(err, res, resp) {
			if (err) { console.error(err); resp = false; }
			cb(resp);
		});
	},

    getCatalogoDetail: (id, req, cb) => {
        var request1 = {
            method: 'GET',
            url: 'http://104.236.159.193:3010/catalogodetalle/'+id,
        };

        request(request1, function(err, res, resp1) {
            if (err) { console.error(err); cb({"response": false}); }

			var request2 = {
					method: 'GET',
					url: 'http://104.236.159.193:3010/catalogodetallepropiedad/'+id,
			};
			request(request2, function(err, res, resp2) {
					if (err) { console.error(err); cb({"response": false}); }

					controller.getCatalogCultivos(req, (cultivos) => {
						if (err) { console.error(err); cb({"response": false}); }
						controller.getCatalogEnfermedades(req, (enfermedades) => {
							if (err) { console.error(err); cb({"response": false}); }
							controller.getCatalogMalezas(req, (malezas) => {
								if (err) { console.error(err); cb({"response": false}); }
								controller.getCatalogPlagas(req, (plagas) => {
									if (err) { console.error(err); cb({"response": false}); }
									controller.getCatalogProductos(req, (productos) => {
										if (err) { console.error(err); cb({"response": false}); }

										let resp = [resp1, resp2, cultivos, enfermedades, malezas, plagas, productos];
										cb(resp);

									})
								})
							})
						})
					})


			});
        });
    }
}

module.exports = controller;