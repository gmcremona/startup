var db;
$(document).ready(function() {
    var request = indexedDB.open("myDB", 4);

    request.onerror = function(e) {
        console.log("Error opening db");
        console.dir(e);
    }

    request.onupgradeneeded = function(e) {
        console.log("running onupgradeneeded");
        var thisDb = e.target.result;
        if(!thisDb.objectStoreNames.contains("note")) {
            console.log("I need to make the note objectstore");
            var objectStore = thisDb.createObjectStore("note", { keyPath: "id", autoIncrement:true });  
           
        }

    }
    request.onsuccess = function(e) {
        db = e.target.result;
        db.onerror = function(event) {
            // Generic error handler for all errors targeted at this database's
            // requests!
            alert("Database error: " + event.target.errorCode);
            console.dir(event.target);
        };

        displayNotes();

    };

    function displayNotes(filter) {

        var transaction = db.transaction(["note"], "readonly");
        var content = "<table class='table table-bordered'><thead><tr><th>Title</th><th>Updated</th><th>&nbsp;</td></thead><tbody>";

        transaction.oncomplete = function(event) {
            $("#noteList").html(content);
        };

        transaction.onerror = function(event) {
            // Don't forget to handle errors!
            console.dir(event);
        };

        var handleResult = function(event) {
            var cursor = event.target.result;
            if (cursor) {
                content += "<tr data-key=\"" + cursor.key + "\"><td class=\"notetitle\">" + cursor.value.title + "</td>";


                content += "<td> <a class=\"btn btn-danger delete\">Delete</a></td>";
                content += "</tr>";
                cursor.continue();
            } else {
                content += "</tbody></table>";
            }
        };

        var objectStore = transaction.objectStore("note");       
        objectStore.openCursor().onsuccess = handleResult;
        

        

    }

    $("#noteList").on("click", "a.delete", function(e) {
        var thisId = $(this).parent().parent().data("key");
        console.log(thisId);
		var t = db.transaction(["note"], "readwrite");
		var request = t.objectStore("note").delete(thisId);
        
		t.oncomplete = function(event) {
			displayNotes();
		}
        return false;
    });


    $("#addNoteButton").click(function() {

        var title = $("#title").val();       
        var key = $("#key").val();
		var t = db.transaction(["note"], "readwrite");		
        if(key === "") {
            var request = t.objectStore("note")
                            .add({title:title,updated:new Date()});
        } else {
            var request = t.objectStore("note")
                            .put({title:title,updated:new Date(),id:Number(key)});
        }
        request.onsuccess = function(event) {
            $("#key").val("");
            $("#title").val("");
            displayNotes();
        };

		t.oncomplete = function(event) {
			displayNotes();
		}
        return false;
    });


});
