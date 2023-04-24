
async function cerrarSesion(){
   

    var request =  await fetch('api/usuarios/logout', {
      method: 'POST',
      headers: {
        'Accept':'application/json',
        'Content-Type': 'application/json'
      },

    });

    const respuesta = request
    
    const status = request.status
    if(status == 200){
        window.location.href='login.html'
        alert("ADIOS")
    }

  
}
