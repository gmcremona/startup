var Subject = (function() {
    var _list;

    function Subject() {
        _list = [];
    }

    Subject.prototype.observe = function observeObject(obj) {
        console.log('added new observer');
        _list.push(obj);
    };

    Subject.prototype.unobserve = function unobserveObject(obj) {
        for (var i = 0, len = _list.length; i < len; i++) {
            if (_list[i] === obj) {
                _list.splice(i, 1);
                console.log('removed existing observer');
                return true;
            }
        }
        return false;
    };

    Subject.prototype.notify = function notifyObservers() {
        var args = Array.prototype.slice.call(arguments, 0);
        console.log(arguments);
        for (var i = 0, len = _list.length; i < len; i++) {
            _list[i].update.apply(null, args);
        }
    };


    // this method will handle adding observers to the internal list


    return Subject;

})(window);




var Movie = (function() { /*defini el contexto asi*/
    var privateAttributes;
    var privateSubject;


    function Movie() {
        privateAttributes = new Object();
        privateSubject = new Subject();
    }


    Movie.prototype.addObserver = function(newObserver) {
        privateSubject.observe(newObserver);
    }

    /*elimina un Observable de la pelicula*/
    Movie.prototype.removeObserver = function(deleteObserver) {
        privateSubject.unobserve(deleteObserver);
    }
    /*ejecuta la reproduccion de la pelicula, lo cual dispara el evento "play"*/
    Movie.prototype.play = function() {
        privateSubject.notify(privateAttributes["title"], "play");

    }

    /*detiene la reproduccion de la pelicula, lo cual dispara el evento "stop"*/
    Movie.prototype.stop = function() {
        privateSubject.notify(privateAttributes["title"], "stop");
    }

    Movie.prototype.set = function(key, value) {
        privateAttributes[key] = value;
    }

    Movie.prototype.get = function(key) {
        return privateAttributes[key];
    };



    return Movie;

})();


var MovieObserver = {
    update: function() {
        if (arguments[1] === "play") {
            console.log('Now playing: ', arguments[0]);
        } else {
            console.log('Stopped: ', arguments[0]);
        }
    }
};

terminator = new Movie();
terminator.set('title', 'Terminator');
titanic = new DownloadableMovie();
titanic.set('title', 'Titanic');
terminator.addObserver(MovieObserver);
terminator.play();
titanic.addObserver(MovieObserver);
titanic.play();

/*Resolucion ejercicio 8*/

DownloadableMovie.prototype = new Movie(); /*Con esta declaracion estoy diciendo que mi objeto hereda toda la funcionalidad de Movie*/
DownloadableMovie.prototype.constructor = DownloadableMovie; /*preguntar si hace falta ya que lo defino abajo, ademas como llamo al del padre es casi innecesario*/

function DownloadableMovie() {
    Movie.call(this);
}

/*Este metodo es agregado solo a las peliculas especificadas como descargables, es decir no todas las peliculas lo pueden utilizar*/
DownloadableMovie.prototype.download = function() {
    console.log("download")
};

/* Resolucion ejercicio 9 */
/*Este es mi objeto mixin que agrega 2 metodos,*/
/*preguntar si se puede prototipar o si estos duplican codigo*/
var Social = {
    share: function(friendName) {
        console.log("Sharing " + this.get('title') + " with: " + friendName);
    },
    like: function() {
        console.log("you like " + this.get('title') + "!");
    }
}

$.extend(Movie.prototype, Social); /*Aca use la libreria Underscore por eso la tengo que agregar antes de correr todo este script*/

/*Resolucion ejercicio 11 */

/* objeto Actor*/
var Actor = (function(window, undefined) {

    /*contructor del objeto*/
    function Actor() {
        this.name = "";
        this.profile = {}
        this.awards = {};
    }

    return Actor;
})(window);

/*metodos prototipados*/
Actor.prototype.setName = function(name) {
    this.name = name;
}
Actor.prototype.getName = function(movie, name) {
    return this.name;
}

Actor.prototype.setAwards = function(movie, award) {
    this.awards[movie] = name;
}
Actor.prototype.getAwards = function(movie) {
    return this.awards[movie];
}


Actor.prototype.setProfile = function(feature, value) {
    this.profile[feature] = name;
}
Actor.prototype.getProfile = function(feature) {
        return this.profile[feature];
    }
    /*instanciacion del los objetos*/
var diCaprio = new Actor();
diCaprio.setName("Leonardo Di Caprio");
diCaprio.setAwards("The Wolf of Wall Street", "Nominated Academy Awards: Best Performance by an Actor in a Leading Role");
diCaprio.setAwards("Blood Diamond", "Nominated Academy Awards: Best Performance by an Actor in a Leading Role");
diCaprio.setProfile("hair", "blond");
diCaprio.setProfile("height", "shorty");
var Winslet = new Actor();
Winslet.setName("Kate Winslet");
Winslet.setAwards("The Reader", "Winner Academy Awards: Best Performance by an Actress in a Leading Rolee");
Winslet.setAwards("Eternal Sunshine of the Spotless Mind", "Nominated Academy Awards: Best Performance by an Actress in a Leading Role");
Winslet.setProfile("hair", "blond");
Winslet.setProfile("best-role", "Slut");


terminator = new Movie();
terminator.set('title', 'Terminator');
titanic = new DownloadableMovie();
titanic.set('title', 'Titanic');
terminator.addObserver(MovieObserver);
terminator.play();
titanic.addObserver(MovieObserver);
titanic.play();


/* pruebo el download */
titanic.download();
/*Esta linea no deberia andar*/
//terminator.download();

/*Pruebo el share y el like */
terminator.share('martin');
terminator.like();
/* Por lo visto el Downloadbleovie tambien lo heredan, preguntar si esta bien y porque*/
titanic.share('martin');
titanic.like();

/* Resolucion ejercicio 12*/

/*preguntar las ideas de este punto */
titanic.Cast = {
    jack_Dawson: diCaprio,
    Rose_DeWitt Bukater: Winslet
};
