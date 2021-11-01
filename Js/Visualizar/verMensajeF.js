$(document).ready(function () {
    let searchParams = new URLSearchParams(window.location.search)
    console.log("Entre a mensajes")
    verMensajeF()   
});

function verMensajeF(){
    //Nos trae desde el servidos la base de datos de la tabla mensajes
        $.ajax({
            url:"http://150.136.25.206:8080/api/Message/all",
            type: 'GET',
            dataType: 'json',
            success: function(respuesta){
                console.log(respuesta.items);
                mostrarRespuestaM(respuesta.items);
            },
            error: function (xhr, status) {
                alert('ha sucedido un problema');
            },
            complete: function (xhr, status) {
                console.log(status);
            }        
        });    
    }
    
    function mostrarRespuestaM(items){
        let tablaM = `<table border="1">
                      <tr>
                        <th>Mensaje</th>
                        <th>Computador</th>
                        <th>Cliente</th>                
                      </tr>`;                  
        
        for (let i=0; i < items.length; i++) {
           
            tablaM +=`<tr>
                       <td>${items[i].messageText}</td> 
                       <td>${items[i].computer}</td>
                       <td>${items[i].client}</td>                  
                    </tr>`;
        }
        tablaM +=`</table>`;
    
        $("#tablaM").html(tablaM);
    }