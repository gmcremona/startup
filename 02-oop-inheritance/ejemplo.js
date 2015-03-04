var Movie = (function() { 
    var privateAttributes;
    this.ver;


    function Movie(name) {
       privateAttributes = new Object();
       ver=name;
    }



    Movie.prototype.set = function(key, value) {
        privateAttributes[key] = value;
    }

    Movie.prototype.get = function(key) {
        return privateAttributes[key];
    };

    return Movie;

})();

terminator = new Movie();
terminator.set('title', 'Terminator');
titanic = new Movie();
titanic.set('title', 'Titanic');
terminator.get('title');