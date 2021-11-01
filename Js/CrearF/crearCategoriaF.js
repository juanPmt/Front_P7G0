function crearCategoriaF(){
    let categoria = {
        name: $("#inputNombreCat").val(),
        description: $("#inputDescripcionCat").val(),
    };

    console.log("Se va a registrar la categoria", computador.name);

    $.ajax({
        url: "http://150.136.25.206:8080/api/Category/save",
        type: 'POST',
        dataType: 'json',
        headers: {
            "Content-Type": "application/json"
        },
        data: JSON.stringify(categoria),
        statusCode:{
            201:function(){
                alert('La categoria se ha registrado de manera correcta ');
            }
        },
    });
}
