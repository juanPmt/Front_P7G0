$(document).ready(function () {
    let searchParams = new URLSearchParams(window.location.search)
    console.log("Entre a computadores")
    verComputadorF()   
});

function verComputadorF(){
    //Nos trae desde el servidos la base de datos de la tabla computador
        $.ajax({
            url:"http://150.136.25.206:8080/api/Computer/all",
            type: 'GET',
            dataType: 'json',
            success: function(respuesta){
                console.log(respuesta.items);
                mostrarRespuestaCom(respuesta.items);
            },
            error: function (xhr, status) {
                alert('ha sucedido un problema');
            },
            complete: function (xhr, status) {
                console.log(status);
            }        
        });    
    }
    
    function mostrarRespuestaCom(items){
        let tablaCM = `<table border="1">
                      <tr>
                        <th>Marca</th>
                        <th>Nombre</th>
                        <th>Año</th>
                        <th>Categoría</th>
                        <th>Descripción</th>                    
                      </tr>`;                  
        
        for (let i=0; i < items.length; i++) {
           
            tablaCM +=`<tr>
                       <td>${items[i].brand}</td> 
                       <td>${items[i].name}</td>
                       <td>${items[i].year}</td>
                       <td>${items[i].category}</td>
                       <td>${items[i].description}</td>                   
                    </tr>`;
        }
        tablaCM +=`</table>`;
    
        $("#tablaCM").html(tablaCM);
    }