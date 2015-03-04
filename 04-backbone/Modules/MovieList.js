/*la direccion de donde obtengo mi collecion o lista de peliculas(luego se le agrega el prefijo)*/
var MovieList = Backbone.Collection.extend({
    url: '/movies',

});


module.exports = MovieList;
