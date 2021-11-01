function crearMensajeF(){
    let mensaje = {
        computer: $("#selecComt").val(),
        messageText: $("#Mensaje").val(),
    };

    console.log("Se va a registrar el mensaje para el computador", mensaje.computer);

    $.ajax({
        url: "http://150.136.25.206:8080/api/Message/save",
        type: 'POST',
        dataType: 'json',
        headers: {
            "Content-Type": "application/json"
        },
        data: JSON.stringify(mensaje),
        statusCode:{
            201:function(){
                alert('El mensaje se ha registrado de manera correcta ');
            }
        },
    });
}