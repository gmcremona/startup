var Subject = (function() {

    function Subject() {
        this._list = [];
    }

    // this method will handle adding observers to the internal list


    return Subject;

})();

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
module.exports = Subject;
