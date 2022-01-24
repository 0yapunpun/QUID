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
	}
}

module.exports = controller;