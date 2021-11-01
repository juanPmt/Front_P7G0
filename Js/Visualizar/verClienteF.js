$(document).ready(function () {
    let searchParams = new URLSearchParams(window.location.search)
    console.log("Entre a clientes")
    verClienteF()   
});

function verClienteF(){
    //Nos trae desde el servidos la base de datos de la tabla cliente
        $.ajax({
            url:"http://150.136.25.206:8080/api/Client/all",
            type: 'GET',
            dataType: 'json',
            success: function(respuesta){
                console.log(respuesta.items);
                mostrarRespuestaCli(respuesta.items);
            },
            error: function (xhr, status) {
                alert('ha sucedido un problema');
            },
            complete: function (xhr, status) {
                console.log(status);
            }        
        });    
    }
    
    function mostrarRespuestaCli(items){
        let tablaCL = `<table border="1">
                      <tr>
                        <th>Nombre</th>
                        <th>Correo</th>
                        <th>Edad</th>                    
                      </tr>`;                  
        
        for (let i=0; i < items.length; i++) {
           
            tablaCM +=`<tr> 
                       <td>${items[i].name}</td>
                       <td>${items[i].email}</td>
                       <td>${items[i].age}</td>                   
                    </tr>`;
        }
        tablaCL +=`</table>`;
    
        $("#tablaCL").html(tablaCL);
    }