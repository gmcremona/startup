var MovieObserver = {
    update: function() {
        if (arguments[1] === "play") {
            console.log('Now playing: ', arguments[0]); 
        } else {
            console.log('Stopped: ', arguments[0]); 
        }
    }
};




var Subject = (function(window, undefined) {
   
    function Subject() {
        this._list = [];
    }
    return Subject;

})(window);


Subject.prototype.observe = function observeObject(obj) {
    console.log('added new observer');
    this._list.push(obj);
};


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


Subject.prototype.notify = function notifyObservers() {
    var args = Array.prototype.slice.call(arguments, 0);
    for (var i = 0, len = this._list.length; i < len; i++) {
        this._list[i].update.apply(null, args);
    }
};

				/*Resolucion ejercicio 7*/
/*En este objeto las dos variables no son alcanzables desde el scope global, pero 
tampoco puede prototipar sus metodos ya que necesitan acceso a esas variables, las
cuales ahora son privadas.*/
var Movie = (function() {
	    var privateAttributes = {};
	    var privateSubject = new Subject();

	    function publicAddObserver(newObserver) {
	        privateSubject.observe(newObserver);
	    }

	    function publicRemoveObserver(deleteObserver) {
	       privateSubject.unobserve(deleteObserver);
	    }

	    function publicplay() {
	        privateSubject.notify(privateAttributes["title"], "play");
	        //console.log("now playing" + this.attributes["title"]);
	    }

	    function publicStop() {
	        privateSubject.notify(privateAttributes["title"], "stop");
	    }

	    function publicSet(key, value) {
	        privateAttributes[key] = value;
	    }

	    function publicGet(key) {
	        return privateAttributes[key];
	    };

	    return {
	    	addObserver: publicAddObserver,
	    	removeObserver: publicRemoveObserver,
	    	play: publicplay,
	    	stop: publicStop,
	    	set: publicSet,
	    	get: publicGet
	    }

	})

terminator = new Movie();
terminator.set('title', 'Terminator');
titanic = new Movie();
titanic.set('title', 'Titanic');
terminator.addObserver(MovieObserver);
titanic.addObserver(MovieObserver);

terminator.play();
titanic.play();

terminator.stop();
titanic.stop();
/* Esta linea da error ya que ahora la variable es privada*/
/*terminator.privateAttributes['title'];*/