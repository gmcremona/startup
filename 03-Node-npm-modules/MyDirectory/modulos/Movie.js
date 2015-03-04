var Subject = require('./Subject.js');
var Director = require('./Director.js')
var Movie = (function() {

    function Movie() {
        this.privateAttributes = {};
        this.privateSubject = new Subject();
    }
    return Movie;

})();

Movie.prototype.addObserver = function(newObserver) {
    this.privateSubject.observe(newObserver);
}

Movie.prototype.removeObserver = function(deleteObserver) {
    this.privateSubject.unobserve(deleteObserver);
}

Movie.prototype.play = function() {
    this.privateSubject.notify(this.privateAttributes["title"], "play");
    //console.log("now playing" + this.attributes["title"]);
}

Movie.prototype.stop = function() {
    this.privateSubject.notify(this.privateAttributes["title"], "stop");
}

Movie.prototype.set = function(key, value) {
    this.privateAttributes[key] = value;
}

Movie.prototype.get = function(key) {
    return this.privateAttributes[key];
};

var MovieObserver = {
    update: function() {
        if (arguments[1] === "play") {
            console.log('Now playing: ', arguments[0]);
        } else {
            console.log('Stopped: ', arguments[0]);
        }
    }
};



var alien = new Movie();
alien.set('title', 'Alien');

alien.addObserver(MovieObserver);
alien.play();
var ridleyScott = new Director("Ridley Scott");
ridleyScott.set('quotes', ['Cast is everything.', 'Do what ...']);
alien.set('director', ridleyScott);
alien.get('director').speak(); //output: Ridley Scott says: 'Cast is...'

/*----Agrego en el html los comentarios del director usando jquery ------*/
var $ = require('./jquery.js');
$(document).ready(function() {
    $(".algo").append("<p>" + ridleyScott.get('quotes') + "</p>");
})
