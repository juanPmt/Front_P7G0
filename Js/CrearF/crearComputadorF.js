function crearComputador(){
    let computador = {
        brand:  $("#ValoresMarca").val(),
        name: $("#inputNombreCom").val(),
        year: +$("#inputAño").val(),
        description: $("#inputNombreCom").val(),
        category: $("#selecCatCom").val()
    };

    console.log("Se va a registrar el equipo", computador.name);

    $.ajax({
        url: "http://150.136.25.206:8080/api/Computer/save",
        type: 'POST',
        dataType: 'json',
        headers: {
            "Content-Type": "application/json"
        },
        data: JSON.stringify(computador),
        statusCode:{
            201:function(){
                alert('El computador se ha registrado de manera correcta ');
            }
        },
    });
    
}