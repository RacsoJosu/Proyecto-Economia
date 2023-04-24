
$(document).ready(function(){
  cargarReservas();
    
     
  }); 


async function cargarReservas(){
    
    var request =  await fetch('api/usuarios/listarReservas', {
      method: 'GET',
      headers: {
        'Accept':'application/json',
        'Content-Type': 'application/json'
      }
    });

    

    const usuarios = await request.json();

    const reservas = usuarios[0].reservas
    let listadoHTML=""
    for (let reserva of reservas){
          let estado =reserva.estado_propiedad
          if(estado==0){estado="Disponible"}else{estado="Ocupado"}
          let reservaHTML = `
          <div class = "col-md-6 col-lg-4 col-xl-3 p-2 m-2" style="background: white; border: 2px solid rgba(252, 20, 20, 0.1);">
                            <div class = "collection-img position-relative">
                                <img src = "images/${reserva.propiedade.id_propiedad}_.jpg" class = "w-100">
                            </div>
                            <div class = "text-center">
            
                                <p class = "text-capitalize my-1"><span class = "fw-bold">Apartamento</span></p>
                                <p class = "text-capitalize my-1"><span class = "fw-bold">Fecha inicial:</span>${reserva.fecha_inicio}</p>
                                <p class = "text-capitalize my-1"><span class = "fw-bold">Fecha final:</span> ${reserva.fecha_final}</p>
                                <p class = "text-capitalize my-1"><span class = "fw-bold">Estado:</span> ${estado}</p>
                                <p class = "text-capitalize my-1"><span class = "fw-bold">Identificador:</span> ${reserva.propiedade.id_propiedad}</p>
                                
                                <span class = "fw-bold">$${reserva.propiedade.precio_noche}</span>
                                <div class = "text-center">
                                    <a   href="eliminar.html" class = "btn btn-primary alquilar-btn  mt-3">Eliminar</a>
                                 </div>
                            </div>
                        </div>

          `
          listadoHTML += reservaHTML
      
    }
    
    // Agregar nuevos elementos a la lista de colección
    
    
    document.querySelector('#propiedades').outerHTML=listadoHTML
 
  
  }
  
 