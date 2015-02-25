/*function Movie() {
    var privateAttributes = {};
    //this.privateSubject = new Subject();


    function addObserver(newObserver) {
        this.privateSubject.observe(newObserver);
    }

    function removeObserver(deleteObserver) {
        this.privateSubject.unobserve(deleteObserver);
    }

    function play() {
        //this.privateSubject.notify(this.privateAttributes["title"], "play");
        console.log("now playing: " + privateAttributes["title"]);
    }

    function stop() {
       // this.privateSubject.notify(this.privateAttributes["title"], "stop");
    }

    function set(key, value) {
        privateAttributes[key] = value;
    }

    function get(key) {
        return privateAttributes[key];
    };

  return {
    play: play,
    stop: stop,
    set: set,
    get: get
  } 

};

module.exports= new Movie();*/
var Subject =  require('./Subject.js');
var Director = require('./Director.js')
var Movie = (function( ){
    
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


var alien = new Movie();
alien.set('title', 'Alien');
var MovieObserver = {
    update: function() {
        if (arguments[1] === "play") {
            console.log('Now playing: ', arguments[0]);
        } else {
            console.log('Stopped: ', arguments[0]);
        }
     }
};

alien.addObserver(MovieObserver);
alien.play();
var ridleyScott = new Director("Ridley Scott");
ridleyScott.set('quotes', "['Cast is everything.', 'Do what ...']");
alien.set('director', ridleyScott);
alien.get('director').speak(); //output: Ridley Scott says: 'Cast is...'

var $ =  require('./jquery.js');
$(document).ready(function(){
     $(".algo").append("<p>"+ridleyScott.get('quotes')+"</p>");
})

   