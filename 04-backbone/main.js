(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
/*la direccion de donde obtengo mis modelos o peliculas(luego se le agrega el prefijo)*/

var Movie = Backbone.Model.extend({
    urlRoot: '/movies'

});

module.exports = Movie;

},{}],2:[function(require,module,exports){
/*la direccion de donde obtengo mi collecion o lista de peliculas(luego se le agrega el prefijo)*/
var MovieList = Backbone.Collection.extend({
    url: '/movies',

});


module.exports = MovieList;

},{}],3:[function(require,module,exports){
var Router = Backbone.Router.extend({ //El router escucha mi barra de direcciones y establece las rutas predefinidas
    routes: {
        "": "home",
        "edit/:id": "edit",
        "new": "edit"
    }
});
module.exports = Router;
},{}],4:[function(require,module,exports){

var Movie = require('../Modules/Movie.js');
var Router = require('../Router/Router.js');
var router = new Router();
/*la vista para los detalles y edicion de una pelicula */
var MovieEditView = Backbone.View.extend({
    el: '.page', //el selector donde lo voy a mostrar
    events: { //captura los eventos que sucedan dentro de la vista
        'submit .edit-movie-form': 'saveMovie', //si realizo un submit en mi formulario llamo a la funcion saveMovie
        'click .delete': 'deleteMovie' //si clickeo en el boton de borrado llamo a la funcion deleteMovie
    },
    saveMovie: function(ev) { // manda a guardar una nueva pelicula
        var movieDetails = $(ev.currentTarget).serializeObject(); //obtengo el objetivo de mi evento(formulario) y lo serializo(lo transformo en un object)

        var movie = new Movie();
        movie.save(movieDetails, { //Realiza un llamado POST con los datos de la pelicula
            success: function(movie) {
                router.navigate('', { //vuelvo a la vista principal
                    trigger: true // obliga a la vista a la que navego a ejecutar el render nuevamente
                });
            }
        });
        return false;
    },
    deleteMovie: function(ev) { // manda a eliminar una pelicula, tambien lo hace localmente
        var that = this;
        this.movie.destroy({ // hace una llamada DELETE
            success: function() {
                console.log('destroyed');
                localStorage.removeItem(that.movie.attributes._id); //remueve la pelicula del localstorage, que coincida con la id
                router.navigate('', { //vuelvo a la vista principal
                    trigger: true // obliga a la vista a la que navego a ejecutar el render nuevamente
                });
            }
        });
        return false;
    },
    render: function(options) { //render se ejecuta cuando llaman a la vista, el paramentro puede ser la id o nada
        var that = this;
        if (options.id) { // si hay id, significa que la pelicula existe y queremos una vista de edicion
            that.movie = new Movie({ // creo un model movie, y le agrego la id
                id: options.id
            });
            that.movie.fetch({ //hago una llamada PUT 
                success: function(movie) {
                    var template = Handlebars.templates.editmovie; // agarro mi template(codigo html precompilado) para una pelicula
                    obj = JSON.parse(JSON.stringify(movie)); //parseo el modelo retornado, antes los tuve que pasar a json plano
                    that.$el.html(template(obj)); // instacio mi template con los datos de la pelicula
                }
            })
        } else { //si no hay id, significa que estoy creando una nueva pelicula
            var template = Handlebars.templates.editmovie; // agarro mi template(codigo html precompilado) para una pelicula
            that.$el.html(template); // no instacio el template ya que no hay datos
        }
    }
});

module.exports = MovieEditView;

},{"../Modules/Movie.js":1,"../Router/Router.js":3}],5:[function(require,module,exports){
var MovieList = require('../Modules/MovieList.js');

/*la vista para mi lista de peliculas*/
var MovieListView = Backbone.View.extend({
    el: '.page', //el selector donde lo voy a mostrar
    render: function() { //render se ejecuta cuando llaman a la vista
        var that = this; // hack para tener guardar ese contexto
        var movieList = new MovieList();
        movieList.fetch({ //Esta funcion se encarga de hacer el GET a mi server
            success: function(movieList) { //si la llamada tuvo exito, y el formato devuelto era el correcto

                var template = Handlebars.templates.movielist; // agarro mi template(codigo html precompilado) para la lista de peliculas
                obj = JSON.parse(JSON.stringify(movieList.models)); //parseo los modelos dentro de mi collection, antes los tuve que pasar a json plano
                for (var i = obj.length - 1; i >= 0; i--) { // recorro mi objeto guardando cada pelicula en el localstorage con su id como key
                    localStorage.setItem(obj[i]._id, obj[i]);
                };
                that.$el.html(template(obj)); //instancio mi template con los datos de las peliculas
            }
        })
    }
});

module.exports=MovieListView;
},{"../Modules/MovieList.js":2}],6:[function(require,module,exports){

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

},{"../Router/Router.js":3,"../Views/MovieEditView.js":4,"../Views/MovieListView.js":5}]},{},[6]);
