$(document).ready(function () {
    let searchParams = new URLSearchParams(window.location.search)
    console.log("Entre a usuarios A")
    verAdminF()   
});

function verAdminF(){
    //Nos trae desde el servidos la base de datos de la tabla admin
        $.ajax({
            url:"http://150.136.25.206:8080/api/Client/all",
            type: 'GET',
            dataType: 'json',
            success: function(respuesta){
                console.log(respuesta.items);
                mostrarRespuestaAd(respuesta.items);
            },
            error: function (xhr, status) {
                alert('ha sucedido un problema');
            },
            complete: function (xhr, status) {
                console.log(status);
            }        
        });    
    }
    
    function mostrarRespuestaAd(items){
        let tablaAd = `<table border="1">
                      <tr>
                        <th>Nombre</th>
                        <th>Correo</th>                   
                      </tr>`;                  
        
        for (let i=0; i < items.length; i++) {
           
            tablaAd +=`<tr> 
                       <td>${items[i].name}</td>
                       <td>${items[i].email}</td>                   
                    </tr>`;
        }
        tablaAd +=`</table>`;
    
        $("#tablaAd").html(tablaAd);
    }