const request = require('request');
const squel = require('squel');

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
    },

	getClients: (req, cb) => {
		var options = {
			method: 'GET',
			url: 'http://104.236.159.193:3010/clienteall',
		};

		request(options, function(err, res, resp) {
			if (err) { console.error(err); resp = false; }
			cb(resp);
		});
	},

	getOpenRequests: (req, cb) => {
		var options = {
			method: 'GET',
			url: 'http://104.236.159.193:3010/obtener_solicitudes?estado=A',
		};

		request(options, function(err, res, resp) {
			if (err) { console.error(err); resp = false; }
			cb(resp);
		});
	},

	getPendingRequests: (req, cb) => {
		var options = {
			method: 'GET',
			url: 'http://104.236.159.193:3010/obtener_solicitudes?estado=P',
		};

		request(options, function(err, res, resp) {
			if (err) { console.error(err); resp = false; }
			cb(resp);
		});
	},

	getClosedRequests: (req, cb) => {
		var options = {
			method: 'GET',
			url: 'http://104.236.159.193:3010/obtener_solicitudes?estado=C',
		};

		request(options, function(err, res, resp) {
			if (err) { console.error(err); resp = false; }
			cb(resp);
		});
	},

	getDetailRequest: (id, req, cb) => {
		var options = {
			method: 'GET',
			url: 'http://104.236.159.193:3010/obtener_detalle_solicitud?id_solicitud='+id,
		};

		request(options, function(err, res, resp) {
			if (err) { console.error(err); resp = false; }

			var options2 = {
				method: 'GET',
				url: 'http://104.236.159.193:3010/obtener_notas_solicitud?id_solicitud='+id
			};

			request(options2, function(err, res, resp2) {
				if (err) { console.error(err); resp2 = false; }

				let response = [resp, resp2]
				cb(response);
			});
		});
	},

	getSolicitudInformacion: (req, cb) => {
		controller.getOpenRequests(req, (resp) => {
			cb(resp)
		})
	},

	getNotifications: (req, cb) => {
		var options = {
			method: 'GET',
			url: 'http://104.236.159.193:3010/obtener_notificaciones',
		};

		request(options, function(err, res, resp) {
			if (err) { console.error(err); resp = false; }
			cb(resp);
		});
	},

	getAportes: (req, cb) => {
		var options = {
			method: 'GET',
			url: 'http://104.236.159.193:3010/obtener_aportes?fecha=2016/02/29%2008:12:00',
		};

		request(options, function(err, res, resp) {
			if (err) { console.error(err); resp = false; }
			cb(resp);
		});
	}, 
	
	getUsuarios: (req, cb) => {
		var reqActiveUsers = {
			method: 'GET',
			url: 'http://104.236.159.193:3010/usuario?perfil=A&estado=1',
		};

		request(reqActiveUsers, function(err, res, activeUser) {
			if (err) { console.error(err); resp = false; }

			var reqInactiveUsers = {
				method: 'GET',
				url: 'http://104.236.159.193:3010/usuario?perfil=A&estado=0',
			};

			request(reqInactiveUsers, function(err, res, inactiveUsers) {
				if (err) { console.error(err); resp = false; }

				let resp = [inactiveUsers, activeUser]
				cb(resp)
			});
		});
	},

	getSucursales: (req, cb) => {
		var reqActiveSucursal = {
			method: 'GET',
			url: 'http://104.236.159.193:3010/usuario?perfil=S&estado=1',
		};

		request(reqActiveSucursal, function(err, res, activeSucursal) {
			if (err) { console.error(err); activeSucursal = false; }

			var reqInactiveSucursal = {
				method: 'GET',
				url: 'http://104.236.159.193:3010/usuario?perfil=S&estado=0',
			};

			request(reqInactiveSucursal, function(err, res, inactiveSucursal) {
				if (err) { console.error(err); inactiveSucursal = false; }

				let resp = [inactiveSucursal, activeSucursal]
				cb(resp)
			});
		});
	},

	getExternalUsers: (req, cb) => {
		var options = {
			method: 'GET',
			url: 'http://104.236.159.193:3010/usuario?perfil=U&estado=1',
		};

		request(options, function(err, res, resp) {
			if (err) { console.error(err); resp = false; }
			cb(resp);
		})
	},

	getPemissions: (req, cb) => {
		var options = {
			method: 'GET',
			url: 'http://104.236.159.193:3010/obtener_permisos',
		};
		request(options, function(err, res, resp) {
			if (err) { console.error(err); resp = false; }
			cb(resp);
		})
	},

	// No probadas
	getMasters: (req, cb) => {
		var cargos = {
			method: 'GET',
			url: 'http://104.236.159.193:3010/obtener_cargos',
		};

		request(cargos, function(err, res, resCargos) {
			if (err) { console.error(err); resCargos = false; }

			var roles = {
				method: 'GET',
				url: 'http://104.236.159.193:3010/obtener_roles',
			};

			request(roles, function(err, res, resRoles) {
				if (err) { console.error(err); resRoles = false; }

				var departamentos = {
					method: 'GET',
					url: 'http://104.236.159.193:3010/departamentociudad',
				};

				request(departamentos, function(err, res, resDepartamentos) {
					if (err) { console.error(err); resDepartamentos = false; }

					let response = {
						cargos: resCargos,
						roles: resRoles,
						departamentos: resDepartamentos,
					};

					cb(response);
				})

			})
		});
	},

	getRankingUsuario: (id, req, cb) => {
		var options = {
			method: 'GET',
			url: 'http://104.236.159.193:3010/obtener_ranking_usuario/'+id,
		};

		request(options, function(err, res, resp) {
			if (err) { console.error(err); resp = false; }
			cb(resp);
		})
	},

	getRankingUsuarioAll: (req, cb) => {
		var options = {
			method: 'GET',
			url: 'http://104.236.159.193:3010/obtener_ranking_general_dashboard',
		};

		request(options, function(err, res, resp) {
			if (err) { console.error(err); resp = false; }
			cb(resp);
		})
	}, 

	getMovimientosAllInforme: (req, cb) => {
		var options = {
			method: 'GET',
			url: 'http://104.236.159.193:3010/contar_principales',
		};

		request(options, function(err, res, resp) {
			if (err) { console.error(err); resp = false; }
			cb(resp);
		})
	}, 

	getMovimientosInforme: (id, res, cb) => {
		let idUser = Number(id)
		var options = {
			method: 'GET',
			url: 'http://104.236.159.193:3010/contar_principales?id_usuario='+idUser
		};

		request(options, function(err, res, resp) {
			if (err) { console.error(err); resp = false; }
			cb(resp);
		})
	}, 

	getClientesInforme: (data, req, res, cb) => {
		// http://104.236.159.193:3010/clienteall?fecha=2021-01-27&id_usuario=101&ano=true
		let url;
		if (data.user){ // Usuario en especifico
			url = "http://104.236.159.193:3010/clienteall?fecha="+data.date+"&id_usuario="+data.user+"&ano=true"
		} else { // Movimientos General
			url = "http://104.236.159.193:3010/clienteall?fecha="+data.date+"&ano=true"
		}

		var options = {
			method: 'GET',
			url: url
		};

		request(options, function(err, res, resp) {
			if (err) { console.error(err); resp = false; }
			cb(resp);
		})
	},

	getRecomendacionesInforme: (data, req, res, cb) => {
		// http://104.236.159.193:3010/recomendacion_general?fecha=2021-12-15&mes=true
		let url;
		if (data.user){ 
			url = "http://104.236.159.193:3010/recomendacion_general?fecha="+data.date+"&id_usuario="+data.user+"&ano=true"
		} else { 
			url = "http://104.236.159.193:3010/recomendacion_general?fecha="+data.date+"&ano=true"
		}

		var options = {
			method: 'GET',
			url: url
		};

		request(options, function(err, res, resp) {
			if (err) { console.error(err); resp = false; }
			cb(resp);
		})
	},

	getFichasInforme: (data, req, res, cb) => {
		// http://104.236.159.193:3010/recomendacion_general?fecha=2021-12-15&mes=true
		let url;
		if (data.user){ 
			url = "http://104.236.159.193:3010/ficha_general?fecha="+data.date+"&id_usuario="+data.user+"&ano=true"
		} else { 
			url = "http://104.236.159.193:3010/ficha_general?fecha="+data.date+"&ano=true"
		}

		var options = {
			method: 'GET',
			url: url
		};

		request(options, function(err, res, resp) {
			if (err) { console.error(err); resp = false; }
			cb(resp);
		})
	},

	getCapacitacionesInforme: (data, req, res, cb) => {
		// http://104.236.159.193:3010/recomendacion_general?fecha=2021-12-15&mes=true
		let url;
		if (data.user){ 
			url = "http://104.236.159.193:3010/capacitacion_general?fecha="+data.date+"&id_usuario="+data.user+"&ano=true"
		} else { 
			url = "http://104.236.159.193:3010/capacitacion_general?fecha="+data.date+"&ano=true"
		}

		var options = {
			method: 'GET',
			url: url
		};

		request(options, function(err, res, resp) {
			if (err) { console.error(err); resp = false; }
			cb(resp);
		})
	},

	// getAportesMovimientos //Esta aparentemente no tiene esa peticion

	getCapacitacionesInforme: (data, req, res, cb) => {
		// http://104.236.159.193:3010/recomendacion_general?fecha=2021-12-15&mes=true
		let url;
		if (data.user){ 
			url = "http://104.236.159.193:3010/acompanamiento_general?fecha="+data.date+"&id_usuario="+data.user+"&ano=true"
		} else { 
			url = "http://104.236.159.193:3010/acompanamiento_general?fecha="+data.date+"&ano=true"
		}

		var options = {
			method: 'GET',
			url: url
		};

		request(options, function(err, res, resp) {
			if (err) { console.error(err); resp = false; }
			cb(resp);
		})
	},

	getBlancosBiologicosInforme: (res, cb) => {
		var options = {
			method: 'GET',
			url: "http://104.236.159.193:3010/contar_principales_bb?fecha="+currentDate()
		};

		request(options, function(err, res, resp) {
			if (err) { console.error(err); resp = false; }

			var options2 = {
				method: 'GET',
				url: "http://104.236.159.193:3010/contar_blanco_biologico_fecha?fecha="+currentDate()
			};

			request(options2, function(err, res, resp2) {
				if (err) { console.error(err); resp2 = false; }

				let response = [resp, resp2]
				cb(response);
			})
		})
	},

	// getProductosInforme: (data, req, res, cb) => {
	// 	var options = {
	// 		method: 'GET',
	// 		url: "http://104.236.159.193:3010/contar_principales_productos?fecha="+data.id
	// 	};

	// 	request(options, function(err, res, resp) {
	// 		if (err) { console.error(err); resp = false; }
	// 		cb(resp);
	// 	})
	// },

	getProductosInforme: (data, res, cb) => {
		let date;
		if (data) {date = data}
		else {date = currentDate()}

		var options = { // Datos tarjetas
			method: 'GET',
			url: "http://104.236.159.193:3010/contar_principales_productos?fecha="+date
		};
		request(options, function(err, res, resp) {
			if (err) { console.error(err); resp = false; }

			var options2 = { // Datos mes/año + datos graficas
				method: 'GET',
				url: "http://104.236.159.193:3010/contar_productos_fecha?fecha="+date
			};
			request(options2, function(err, res, resp2) {
				if (err) { console.error(err); resp2 = false; }

				let response = {
					"general": resp,
					"detail": resp2,
				}
				cb(response);
			})
		})
	},

	getBlancosBiologicosMapa: (req, res, cb) => {
		var options = {
			method: 'GET',
			url: "http://104.236.159.193:3010/geolocalizacion_blancos_biologicos"
		};

		request(options, function(err, res, resp) {
			if (err) { console.error(err); resp = false; }
			cb(resp);
		})
	},

	getMapaCalorInformes: (data, req, res, cb) => {
		let fechaInicio = data.dateInit;
		let fechaFinal = data.dateFin;
		var options = {
			method: 'GET',
			url: "http://104.236.159.193:3010/get_analytics?fechaInicial="+fechaInicio+"&fechaFinal="+fechaFinal
		};

		request(options, function(err, res, resp) {
			if (err) { console.error(err); resp = false; }
			cb(resp);
		})
	},

	getEvaluacionesInformes: (data, res, cb) => {
		let fechaInicio;
		let fechaFinal;
		if (data) {
			fechaInicio = data.dateInit;
			fechaFinal = data.dateFin;
		} else {
			fechaInicio = firstDayOfYear();
			fechaFinal = currentDate();
		}

		fechaInicio = fechaInicio.replace(/\//g, "");
		fechaFinal = fechaFinal.replace(/\//g, "");

		var options = {
			method: 'GET',
			url: "http://104.236.159.193:3010/obtener_evaluacionesDepto?fechaInicial="+fechaInicio+"&fechaFinal="+fechaFinal
		};

		request(options, function(err, res, resp) {
			if (err) { console.error(err); resp = false; }	

			var options2 = {
				method: 'GET',
				url: "http://104.236.159.193:3010/obtener_respuestasDepto?fechaInicial="+fechaInicio+"&fechaFinal="+fechaFinal
			};
			request(options2, function(err, res, resp2) {
				if (err) { console.error(err); resp2 = false; }

				let response = {
					"evaluaciones": resp,
					"respuestas": resp2,
				}
				cb(response);
			})
		})
	},

	getListPropiedades: (req, res, cb) => { //Los titulos que van con un text area
		var options = {
			method: 'GET',
			url: "http://104.236.159.193:3010/campo_propiedad"
		};

		request(options, function(err, res, resp) {
			if (err) { console.error(err); resp = false; }
			cb(resp);
		})
	},

	getListSecciones: (req, res, cb) => { 
		var options = { // Las partes del paginador con el catalogo al que pertenecen
			method: 'GET',
			url: "http://104.236.159.193:3010/catalogo_secciones"
		};

		request(options, function(err, res, resp) {
			if (err) { console.error(err); resp = false; }

			var options2 = { // Las partes posibles del paginador
				method: 'GET',
				url: "http://104.236.159.193:3010/secciones"
			};

			request(options, function(err, res, resp2) {
				if (err) { console.error(err); resp2 = false; }

				let response = {
					"secciones": resp2,
					"seccionesCatalogo": resp
				}

				cb(resp);
			})
		})
	},

	getContenidoSecciones: (req, res, cb) => { 
		var options = { // Las partes del paginador con el catalogo al que pertenecen
			method: 'GET',
			url: "http://104.236.159.193:3010/catalogo_secciones"
		};

		request(options, function(err, res, resp) {
			if (err) { console.error(err); resp = false; }

			var options2 = { // Los tipos de catalogos
				method: 'GET',
				url: "http://104.236.159.193:3010/listacatalogo"
			};

			request(options2, function(err, res, resp2) {
				if (err) { console.error(err); resp2 = false; }

				var options3 = { // Las partes del paginador Y SUS SUBPROPIEDADES/CAMPOS con el catalogo al que pertenecen
					method: 'GET',
					url: "http://104.236.159.193:3010/catalogo_propiedad_campo"
				};

				request(options3, function(err, res, resp3) {
					if (err) { console.error(err); resp3 = false; }


					var options4 = { // las posibles subsecciones para agregar
						method: 'GET',
						url: "http://104.236.159.193:3010/campo_propiedad"
					};

					request(options4, function(err, res, resp4) {
						if (err) { console.error(err); resp4 = false; }

						let response = {
							"catalogos": resp2,
							"catalogosSecciones": resp,
							"catalogoSeccionesSubsecciones": resp3,
							"subsecciones": resp4
						}
						cb(response)
					})
				})
			})
		})
	}

}

module.exports = controller;