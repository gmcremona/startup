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