$(document).ready(function () {
    let searchParams = new URLSearchParams(window.location.search)
    console.log("Entre a reservas")
    verReservaF()   
});

function verReservaF(){
    //Nos trae desde el servidos la base de datos de la tabla reservas
        $.ajax({
            url:"http://150.136.25.206:8080/api/Reservation/all",
            type: 'GET',
            dataType: 'json',
            success: function(respuesta){
                console.log(respuesta.items);
                mostrarRespuestaR(respuesta.items);
            },
            error: function (xhr, status) {
                alert('ha sucedido un problema');
            },
            complete: function (xhr, status) {
                console.log(status);
            }        
        });    
    }
    
    function mostrarRespuestaR(items){
        let tablaR = `<table border="1">
                      <tr>
                        <th>Id</th>
                        <th>Computador</th>
                        <th>Id Cliente</th>
                        <th>Nombre Cliente</th>
                        <th>Correo Cliente</th>
                        <th>Calificación</th>                     
                      </tr>`;                  
        
        for (let i=0; i < items.length; i++) {
           
            tablaR +=`<tr>
                       <td>${items[i].idReservation}</td> 
                       <td>${items[i].computer.name}</td>
                       <td>${items[i].client.idClient}</td>
                       <td>${items[i].client.name}</td>
                       <td>${items[i].client.email}</td>
                       <td>${items[i].score}</td>
                       <td>
                        <a href="../Crear/crearReview.html?id=${items[i].id}">Calificar</a>
                   </td>                
                    </tr>`;
        }
        tablaR +=`</table>`;
    
        $("#tablaR").html(tablaR);
    }