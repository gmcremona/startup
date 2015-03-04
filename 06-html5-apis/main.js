
var request = indexedDB.open("myDB",3);
request.onupgradeneeded = function(e) {
    var db = e.target.result;
    var store = db.createObjectStore("values", {keyPath: "id", autoIncrement: true});
    
}
request.onsuccess = function(e) {
    db = e.target.result;
};



$(document).ready(function() {
    $("#btn").click(function() {
        var value = $("input[name='text']").val();
        window.localStorage.setItem('value', value);
        var tx = db.transaction(["values"], "readwrite");
        var store = tx.objectStore("values");
        var data = {
        	val: value
        };
		store.put(data);
        tx.oncomplete = function() {
        	console.log("lo lograaste");
		};
    });
    $("#btn").click(function() {
        var value = $("input[name='text']").val();
        window.localStorage.setItem('value', value);
        var tx = db.transaction(["values"], "readwrite");
        var store = tx.objectStore("values");
        var data = {
        	val: value
        };
		store.put(data);
        tx.oncomplete = function() {
        	console.log("lo lograaste");
		};
    });
});

