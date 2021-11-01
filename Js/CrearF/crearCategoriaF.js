function crearCategoriaF(){
    let categoria = {
        name: $("#inputNombreCat").val(),
        description: $("#inputDescripcionCat").val(),
    };

    console.log("Se va a registrar la categoria", categoria.name);

    $.ajax({
        url:"http://localhost:8010/api/Category/all",
        //url:"http://150.136.25.206:8080/api/Category/all",
        //url:"http://150.136.86.202:8080/api/Category/all",
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
