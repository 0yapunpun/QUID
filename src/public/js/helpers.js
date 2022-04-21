const handlePermissions = (permissionsUser) => {
    for (let i = 0; i < permissionsUser.length; i++) {
        if (permissionsUser[i].codigo == "1000_Puede_ver_el_modulo_de_informes" && permissionsUser[i].contenido != "S") {
            $("#sectionInformes").hide();
        }
        if (permissionsUser[i].codigo == "1005_puede_ver_ranking_asesores" && permissionsUser[i].contenido != "S") {
            $("#sectionRanking").hide()
        }
        if (permissionsUser[i].codigo == "1010_puede_ver_movimientos" && permissionsUser[i].contenido != "S") {
            $("#sectionMovimientos").hide()
        }
        if (permissionsUser[i].codigo == "1015_puede_ver_movimientos_blancos_biologicos" && permissionsUser[i].contenido != "S") {
            $("#sectionMovimientosBB").hide()
        }
        if (permissionsUser[i].codigo == "1020_puede_ver_movimientos_productos" && permissionsUser[i].contenido != "S") {
            $("#sectionMovimientosProductos").hide()
        }
        if (permissionsUser[i].codigo == "1025_puede_ver_mapa_blancos_biologicos" && permissionsUser[i].contenido != "S") {
            $("#sectionBB").hide()
        }
        if (permissionsUser[i].codigo == "1030_puede_ver_mapa_calor" && permissionsUser[i].contenido != "S") {
            $("#sectionMapaCalor").hide()
        }
        if (permissionsUser[i].codigo == "1035_puede_ver_informe_evaluaciones" && permissionsUser[i].contenido != "S") {
            $("#sectionEvaluaciones").hide()
        }
        if (permissionsUser[i].codigo == "2000_puede_ver_el_modulo_catalogos" && permissionsUser[i].contenido != "S") {
            $("#sectionCatalogos").hide()
        }
        if (permissionsUser[i].codigo == "2005_puede_agregar_un_nuevo_catalogo" && permissionsUser[i].contenido != "S") {
            $("#newCatalogButton").hide()
        }
        if (permissionsUser[i].codigo == "2010_puede_modificar_catalogos" && permissionsUser[i].contenido != "S") {
            $("#editButton").hide()
        }
        if (permissionsUser[i].codigo == "3000_puede_ver_modulo_clientes" && permissionsUser[i].contenido != "S") {
            $("#sectionClientes").hide();
        }
        if (permissionsUser[i].codigo == "4000_puede_ver_modulo_aportes" && permissionsUser[i].contenido != "S") {
            $("#sectionAportes").hide()
        }
        if (permissionsUser[i].codigo == "4005_puede_aprobar_aportes" && permissionsUser[i].contenido != "S") {
            $("#aporteState").css("visibility", "hidden")
            $("#aporteState").hide()
        }
        if (permissionsUser[i].codigo == "5005_puede_ver_solicitud_informacion" && permissionsUser[i].contenido != "S") {
            $("#sectionSolicitudInfo").hide()
        }
        if (permissionsUser[i].codigo == "5015_puede_ver_notificaciones" && permissionsUser[i].contenido != "S") {
            $("#sectionNotificaciones").hide()
        }
        if (permissionsUser[i].codigo == "5020_puede_enviar_notificaciones" && permissionsUser[i].contenido != "S") {
            $("#newNotificationButton").hide()
        }
        if (permissionsUser[i].codigo == "6005_puede_agregar_usuarios" && permissionsUser[i].contenido != "S") {
            $("#newUserButton").hide()
            $("#newSucursalButton").hide()
        }
        if (permissionsUser[i].codigo == "7015_puede_configurar_contenido_secciones" && permissionsUser[i].contenido != "S") {
            $("#sectionConfigurarContenidoSecciones").hide();
        }
        if (permissionsUser[i].codigo == "7010_puede_crear_secciones" && permissionsUser[i].contenido != "S") {
            $("#sectionCrearSecciones").hide();
        }
        if (permissionsUser[i].codigo == "7005_puede_crear_propiedades" && permissionsUser[i].contenido != "S") {
            $("#sectionCrearPropiedades").hide();
        }
        if (permissionsUser[i].codigo == "8000_puede_ver_permisos" && permissionsUser[i].contenido != "S") {
            $("#sectionPermisos").hide();
        }
        if (permissionsUser[i].codigo == "6010_puede_modificar_usuarios" && permissionsUser[i].contenido != "S") {
            $("#updateUserButton").hide();
        }
        if (permissionsUser[i].codigo == "6000_puede_ver_modulo_usuarios" && permissionsUser[i].contenido != "S") {
            $("#sectionSucursales").hide();
            $("#sectionUsuarios").hide();
        }
    }
}