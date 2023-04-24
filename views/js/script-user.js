
$(document).ready(function(){
    cargarUsuario();
    
     
  }); 


    

async function cargarUsuario(){
    
    var request =  await fetch('api/usuarios', {
      method: 'GET',
      headers: {
        'Accept':'application/json',
        'Content-Type': 'application/json'
      }
    });

    

    const usuarios = await request.json();
    let listadoHTML=""
    for (let usuario of usuarios){
      
     
      let usuarioHTML = `
      <div class="card mb-4">
                  <div class="card-body">
                    <div class="row">
                      <div class="col-sm-3">
                        <p class="mb-0">Nombre Completo</p>
                      </div>
                      <div class="col-sm-9">
                        <p class="text-muted mb-0">${usuario.nombre} ${usuario.apellido}</p>
                      </div>
                    </div>
                    <hr>
                    <div class="row">
                      <div class="col-sm-3">
                        <p class="mb-0">Email</p>
                      </div>
                      <div id="email" class="col-sm-9">
                      <p class="text-muted mb-0">${usuario.email}</p>
                      </div>
                    </div>
                    <hr>
                    <div class="row">
                      <div class="col-sm-3">
                        <p class="mb-0">Telefono</p>
                      </div>
                      <div class="col-sm-9">
                        <p class="text-muted mb-0">(097) 234-5678</p>
                      </div>
                    </div>
                    <hr>
                    <div class="row">
                      <div class="col-sm-3">
                        <p class="mb-0">Celular</p>
                      </div>
                      <div class="col-sm-9">
                        <p class="text-muted mb-0">(098) 765-4321</p>
                      </div>
                    </div>
                    <hr>
                    <div class="row">
                      <div class="col-sm-3">
                        <p class="mb-0">Direccion</p>
                      </div>
                      <div class="col-sm-9">
                        <p class="text-muted mb-0">${usuario.locacion}</p>
                      </div>
                    </div>
                  </div>
              </div>
              
      `
      listadoHTML += usuarioHTML
      
    }
    
    // Agregar nuevos elementos a la lista de colección
    
    
    document.querySelector('#perfil-info').outerHTML=listadoHTML
 
  
  }
  

  