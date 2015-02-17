$(document).ready(function() {
    
    $(document).ready(function() {
        $(".appers").fadeIn("slow");// ejercicio 2.5 //

    });

    $("button").click(function() { // ejercicio 2.7 //
        $.get('http://bootcamp.aws.af.cm/welcome/yourname', function(Response) {
            var input = document.getElementById("textbox");
            input.value = Response.response; // ejercicio 2.8 //
            input.setSelectionRange(8, 16);//ejercicio 2.10 //
            input.focus(); //ejercicio 2.10 //
        }).fail(function() { // ejercicio 2.9
            $("section").css("background-color", "red");
        });
    });


    $("input[name='boton']").click(function() { // ejercicio 2.12 //

        $.get("https://api.spotify.com/v1/search", {
                query: $("input[name='artist']").val(),
                type: "album"
            })
            .done(function(data) {
                $.each(data.albums.items, function(idx, obj) {
                    $(".conteiner").append("<article><header>" + obj.name + "</header><p>album type: " + obj.album_type + "</p><br><a href=" + "\"" + obj.external_urls.spotify + "\"" + "><img src=" + "\"" + obj.images[1].url + "\"" + " alt=" + "\"" + "tapa del disco" + "\"" + " /></a></article>");
                });
            });
    });
});
