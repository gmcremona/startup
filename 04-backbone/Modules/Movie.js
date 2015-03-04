/*la direccion de donde obtengo mis modelos o peliculas(luego se le agrega el prefijo)*/

var Movie = Backbone.Model.extend({
    urlRoot: '/movies'

});

module.exports = Movie;
