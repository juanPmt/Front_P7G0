function crearAdminF(){
    let admin = {
        name:  $("#inputNombreCliente").val(),
        email: $("#correo").val(),
        password: $("#inputContraseña").val()
    };

    console.log("Se va a registrar el usuario administrativo", admin.name);

    $.ajax({
        url: "http://150.136.25.206:8080/api/Client/save",
        type: 'POST',
        dataType: 'json',
        headers: {
            "Content-Type": "application/json"
        },
        data: JSON.stringify(admin),
        statusCode:{
            201:function(){
                alert('El usuario administrativo se ha registrado de manera correcta ');
            }
        },
    });
    
}