var Router = Backbone.Router.extend({ //El router escucha mi barra de direcciones y establece las rutas predefinidas
    routes: {
        "": "home",
        "edit/:id": "edit",
        "new": "edit"
    }
});
module.exports = Router;