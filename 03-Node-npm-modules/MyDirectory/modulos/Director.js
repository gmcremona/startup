var Director = (function() {
    function Director(name) {
        this.name = name;
        this.quotes = {};
    }

    return Director;
})();


Director.prototype.set = function(key, value) {
    this.quotes[key] = value;
}

Director.prototype.get = function(key, value) {
    return this.quotes[key];
}

Director.prototype.speak = function() {
    console.log(this.name + " says: " + this.quotes['quotes']);
}
module.exports = Director;
