$(document).ready(function () {
    let searchParams = new URLSearchParams(window.location.search)
    console.log("Entre a calificación")
    if (searchParams.has('id')){
        let id = searchParams.get('id')
        llenarid(id);
    }
});

function llenarid(item){
    $("#inputIdReserva").val(item);
}    

function crearReservaF(){
    let review = {
        score:  $("#inputCalificacion").val(),
    };

    $.ajax({
        url: "http://150.136.25.206:8080/api/Reservation/save",
        type: 'POST',
        dataType: 'json',
        headers: {
            "Content-Type": "application/json"
        },
        data: JSON.stringify(reserva),
        statusCode:{
            201:function(){
                alert('La reserva se ha calificado de manera correcta');
            }
        },
    });
}