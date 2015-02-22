$(document).ready(function() { //espera hasta que el documento este listo y aplica el script
    

    $(".appers").fadeIn("slow");// ejercicio 2.5 cambia la propiedad  display de la clase appers de none a block  //

 

    $("button").click(function() { // ejercicio 2.7 se ejecuta el script si hacen click en el boton//
        var input = document.getElementById("textbox");
        var name = input.value;  /*Obtengo el input del textbox(seria el nombre ingresado)*/ 
        $.get('http://bootcamp.aws.af.cm/welcome/'+name,{ //hago el request a la url+nombre
        })
        .done(function(Response) { //si obtengo una respuesta correcta(http 200)
            input.value = Response.response; // ejercicio 2.8 seteo el textbox con la respuesta //
            var init=Response.response.indexOf(" "); 
            var fin=Response.response.indexOf("!");
            input.setSelectionRange(init+1, fin);//ejercicio 2.10  selecciono la zona a resaltar, osea el nombre, con los indices que calcule anteriormente //
            input.focus();//la funcion que lo resalta
        })  //ejercicio 2.10 //
        .fail(function() { // ejercicio 2.9 si obtuve una respuesta incorrecta(http error >400 o >500)
            $("section").css("background-color", "red"); //coloreo de rojo la section 
         });
    });


    $("input[name='boton']").click(function() { // ejercicio 2.12 se ejecuta el script si hacen click en el boton dentro del formulario //

        $.get("https://api.spotify.com/v1/search", { //hago el request con 2 parametros
                query: $("input[name='artist']").val(),  //el nombre del artista en el textbox
                type: "album"// lo que quiero, en este caso sus albumes
            })
            .done(function(data) { //si obtengo una respuesta correcta(http 200)
                $.each(data.albums.items, function(idx, obj) { //Para cada elemento uno de los elementos dentro de items agrego un articulo con el siguiente formato en el html
                    $(".conteiner").append("<article><header>" + obj.name + "</header><p>album type: " + obj.album_type + "</p><br><a href=" + "\"" + obj.external_urls.spotify + "\"" + "><img src=" + "\"" + obj.images[1].url + "\"" + " alt=" + "\"" + "tapa del disco" + "\"" + " /></a></article>");
                });
            });
    });
});
