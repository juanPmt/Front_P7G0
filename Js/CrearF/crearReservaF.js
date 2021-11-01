function crearReservaF(){
    let reserva = {
        computer:  $("#selecCom").val(),
        client: +$("#inputIdCliente").val(),
        startDate: $("#inputFechaInicio").val(),
        devolutionDate: $("#inputFechaEntrega").val()
    };

    console.log("Se va a registrar la reserva para el cliente", reserva.client);

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
                alert('La reserva se ha registrado de manera correcta');
            }
        },
    });
}