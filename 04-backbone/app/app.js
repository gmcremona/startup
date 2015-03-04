
var MovieEditView = require('../Views/MovieEditView.js');
var MovieListView = require('../Views/MovieListView.js');
var Router = require('../Router/Router.js')

/*agrego un prefijo a cualquier llamado ajax, con la direccion de mi server*/
$.ajaxPrefilter(function(options, originalOptions, jqXHR) {
    options.url = 'http://localhost:8000/api' + options.url;
});

/*serializo mi formulario, o sea lo transformo la info de mi formulario
en un object*/
$.fn.serializeObject = function() {
    var o = {};
    var a = this.serializeArray();
    $.each(a, function() {
        if (o[this.name] !== undefined) {
            if (!o[this.name].push) {
                o[this.name] = [o[this.name]];
            }
            o[this.name].push(this.value || '');
        } else {
            o[this.name] = this.value || '';
        }
    });
    return o;
};

var movieListView = new MovieListView(); //inicializo la vista de lista de peliculas
var movieEditView = new MovieEditView();




var router = new Router();
router.on("route:home", function() { // si la ruta es el home
    movieListView.render(); //mando a renderizar la vista para la lista de peliculas
});
router.on('route:edit', function(id) { // si la ruta es la de edicion(se le pasa un parametro ya que puede tener el id)
    movieEditView.render({ //mando a renderizar la vista para una pelicula
        id: id
    });
})

Backbone.history.start(); //obkigatorio
