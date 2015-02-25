/* Resolucion de ejercios 1 y 2 del topico 2*/

/*primero creamos el constructor de mi objeto Movie, con un atributo privadp(_atributes).
Se que el "_" no hace que mi variable sea privada, es solo una forma de indicar que lo es
Como mas adelante piden el module Pattern(el cual garantiza la privacidad de mi variable) 
decidi solo indicarlo por ahora*/
function Movie() {
    this._attributes = {};
  
};

/*Aca defino el prototype de mi objeto, los metodos que quiero que mi objeto posea
Son todos publicos ya que se encuentran el prototype. Todos los objetos de tipo 
Movie podran acceder a estos metodos(aun los que hereden de el). Al hacerlo de esta
forma evito que cada vez que cree un objeto se dupliquen las funciones*/

Movie.prototype.play = function() {
	/*muestra un mensaje por consola, representando la reproduccion de mi 
	pelicula*/
    console.log("Now playing: " + this._attributes["title"]);
} 

Movie.prototype.stop = function() {
	/*muestra un mensaje por consola, representando el cese de la reproduccion 
	de mi pelicula*/
    console.log("Stopped: " + this._attributes["title"]);
}

Movie.prototype.set = function(key, value) {
   	/* estable un nuevo atributo dentro de attributes, de la forma (clave,valor)
   	tambien puede ser utilizado para rescribir una clave existente*/
    this._attributes[key] = value;
}

Movie.prototype.get = function(key) {
	/* Recupera el valor de una determinada clave dentro de atributes*/
    return this._attributes[key];
};


/* Instanciasion y prueba de mis objetos */
terminator = new Movie();
terminator.set('title', 'Terminator');
terminator.play();
terminator.get('title');
titanic = new Movie();
titanic.set('title', 'titanic');
titanic.play();
titanic.get('title');