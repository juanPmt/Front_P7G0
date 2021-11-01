$(document).ready(function () {
    let searchParams = new URLSearchParams(window.location.search)
    console.log("Entre a DD Com")
    verComputadorFDd(); 
});

function verComputadorFDd() {
    $.ajax({
        url: "http://150.136.25.206:8080/api/Computer/all",
        type: 'GET',
        dataType: 'json',
        success: function (respuesta) {
            console.log(respuesta.items);
            mostrarRespuestaComDd(respuesta.items);
        },
        error: function (xhr, status) {
            alert('ha sucedido un problema');
        },
        complete: function (xhr, status) {
            console.log(status);
        }
    });
}

function mostrarRespuestaComDd(items) {
    let select = document.getElementById("selectCom");
 
    for (let i = 0; i < items.length; i++) {
         let opt = items[i].name;
         let el = document.createElement("option");
         el.text = opt;
         el.value = opt;
        select.add(el);
    }
}