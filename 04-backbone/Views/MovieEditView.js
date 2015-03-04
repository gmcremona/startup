
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
