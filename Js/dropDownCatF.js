$(document).ready(function () {
    let searchParams = new URLSearchParams(window.location.search)
    console.log("Entre a DD Cat")
    verCategoriaFDd(); 
});

function verCategoriaFDd(){
    //Nos trae desde el servidos la base de datos de la tabla categoria
        $.ajax({
            url:"http://150.136.25.206:8080/api/Category/all",
            type: 'GET',
            dataType: 'json',
            success: function(respuesta){
                console.log(respuesta.items);
                mostrarRespuestaCatDd(respuesta.items);
            },
            error: function (xhr, status) {
                alert('ha sucedido un problema');
            },
            complete: function (xhr, status) {
                console.log(status);
            }        
        });    
    }

    function mostrarRespuestaCatDd(items){
        let select = document.getElementById("selectCat");
 
    for (let i = 0; i < items.length; i++) {
         let opt = items[i].name;
         let el = document.createElement("option");
         el.text = opt;
         el.value = opt;
        select.add(el);
    }
    }