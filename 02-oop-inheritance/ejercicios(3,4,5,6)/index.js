/*Resolucion de los ejercicios 3,4,5,6 del topico 2 */


            /*  Resolucion ejercicio 3 */
/*MovieObserver es el encargado de la accion una vez sucedido un evento
es menester para este objeto implemtentar el update(),*/
var MovieObserver = {
    update: function() {/*el evento posee 2 atributos la pelicula, y el tipo de evento*/
        if (arguments[1] === "play") {
            console.log('Now playing: ', arguments[0]);  /*resolucion ejercicio 6*/
        } else {
            console.log('Stopped: ', arguments[0]); /*resolucion ejercicio 6*/
        }
    }
};



/* Esta clase sirve de intermediario entre el observable(Movie) y el observado(MovieObserver)
Mantiene una lista de Observadores de mi objeto y cada vez que este notifica un cambio, 
avisa a los observadores que sucedio un cambio(evento).*/
var Subject = (function(window, undefined) {
    /*constructor del objeto, inicializa la lista de Observadores*/
    function Subject() {
        this._list = [];
    }
    return Subject;

})(window);


/*-----------------Prototipo Subject------------------------*/

/*agrega un Observador a la lista de Observadores */
Subject.prototype.observe = function observeObject(obj) {
    console.log('added new observer');
    this._list.push(obj);
};

/*desagrega un Observador de la lista de Observadores */
Subject.prototype.unobserve = function unobserveObject(obj) {
    for (var i = 0, len = this._list.length; i < len; i++) {
        if (this._list[i] === obj) {
            this._list.splice(i, 1);
            console.log('removed existing observer');
            return true;
        }
    }
    return false;
};

/* Segun este patron, todos los obervadores deben tener implementado el metodo update()
(dentro debe tener lo que se quiere se haga una vez que sucude el evento), entonces notify
lo unico que hace es recorrer la lista de observadores llamando a update(). Notese que los 
observados llaman a notify() cuando se interpreta que sucedio ese cambio.*/
Subject.prototype.notify = function notifyObservers() {
    var args = Array.prototype.slice.call(arguments, 0);
    for (var i = 0, len = this._list.length; i < len; i++) {
        this._list[i].update.apply(null, args);
    }
};


function Movie() {
    this._attributes = {};
    this.privateSubject = new Subject();
};

/*agrega un nuevo Observable al la pelicula*/
Movie.prototype.addObserver = function(newObserver) {
    this.privateSubject.observe(newObserver);
}

/*elimina un Observable de la pelicula*/
Movie.prototype.removeObserver = function(deleteObserver) {
    this.privateSubject.unobserve(deleteObserver);
}
/*ejecuta la reproduccion de la pelicula, lo cual dispara el evento "play"*/ 
Movie.prototype.play = function() {
    this.privateSubject.notify(this._attributes["title"], "play");
    
}

/*detiene la reproduccion de la pelicula, lo cual dispara el evento "stop"*/ 
Movie.prototype.stop = function() {
    this.privateSubject.notify(this._attributes["title"], "stop");
}

Movie.prototype.set = function(key, value) {
    this._attributes[key] = value;
}

Movie.prototype.get = function(key) {
    return this._attributes[key];
};

terminator = new Movie();
terminator.set('title', 'Terminator');
titanic = new Movie();
titanic.set('title', 'Titanic');
terminator.addObserver(MovieObserver);
titanic.addObserver(MovieObserver);
/*Resolucion ejercicio 4*/
terminator.play();
titanic.play();
/*Resolucion ejercicio 5*/
terminator.stop();
titanic.stop();
/*Puse esta linea para demostrar que la variable es accesible(no deberia ser asi)
terminator.privateAttributes['title'];*/