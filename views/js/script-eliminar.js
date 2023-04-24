
async function  eliminarAlquiler(){
   
    let datos={}
    datos.email= document.getElementById("email").value
    datos.passw= document.getElementById("password").value
    datos.id_propiedad = document.getElementById("id_propiedad").value
   

    console.log(datos)
    
    var request =  await fetch('api/usuarios', {
        method: 'GET',
        headers: {
          'Accept':'application/json',
          'Content-Type': 'application/json'
        }
    });

    const usuarios = await request.json();
    console.log(usuarios)

    var request =  await fetch(`api/propiedades/${datos.id_propiedad}`, {
        method: 'GET',
        headers: {
          'Accept':'application/json',
          'Content-Type': 'application/json'
        }
    });

    const propiedades = await request.json();
    propiedades[0].estado=0
    var request =  await fetch(`api/propiedades/${propiedades[0].id_propiedad}`, {
        method: 'PUT',
        headers: {
        'Accept':'application/json',
        'Content-Type': 'application/json'
        },

        body:JSON.stringify(propiedades[0])
            });
            
    var request =  await fetch(`api/reservas/${usuarios[0].id_usuario}/${datos.id_propiedad}`, {
        method: 'DELETE',
        headers: {
          'Accept':'application/json',
          'Content-Type': 'application/json'
        }
    });
    
    const respuesta = await request.json();

    if(respuesta.success=="Registro eliminado"){
        window.location.href="alquileres.html"
    }

   
      
  
}