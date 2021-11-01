function verComputador(){
    //Nos trae desde el servidos la base de datos de la tabla computador
        $.ajax({
            url:"https://ga61db958975b8f-alquilerpc.adb.us-ashburn-1.oraclecloudapps.com/ords/admin/computer/computer",
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
                       <td>${items[i].category_id}</td>
                       <td>
                            <button onclick="eliminar_computer(${items[i].id})">Eliminar</button>
                            <a href="detalle_computer.html?id=${items[i].id}">Editar</a>
                       </td>                   
                    </tr>`;
        }
        tablaCM +=`</table>`;
    
        $("#tablaCM").html(tablaCM);
    }