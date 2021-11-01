$(document).ready(function () {
    let searchParams = new URLSearchParams(window.location.search)
    console.log("Entre a categorias")
    verCategoriaF()   
});

function verCategoriaF(){
    //Nos trae desde el servidos la base de datos de la tabla categoria
        $.ajax({
            url:"http://localhost:8010/api/Category/all",
            //url:"http://150.136.25.206:8080/api/Category/all",
            //url:"http://150.136.86.202:8080/api/Category/all",
            type: 'GET',
            dataType: 'json',
            success: function(respuesta){
                console.log(respuesta);
                mostrarRespuestaCat(respuesta);
            },
            error: function (xhr, status) {
                alert('ha sucedido un problema');
            },
            complete: function (xhr, status) {
                console.log(status);
            }        
        });    
    }

    function mostrarRespuestaCat(respuesta){
        let tablaCT = `<table border="1">
                      <tr>
                        <th>Nombre</th>
                        <th>Descripción</th>                    
                      </tr>`;                  
        
        for (let i=0; i < respuesta.length; i++) {
           
            tablaCT +=`<tr> 
                       <td>${respuesta[i].name}</td>
                       <td>${respuesta[i].description}</td>                   
                    </tr>`;
        }
        tablaCT +=`</table>`;
    
        $("#tablaCT").html(tablaCT);
    }