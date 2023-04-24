
async function iniciarSesion(){
   
    let datos={}
    
    datos.email= document.getElementById("email").value;
    datos.passw= document.getElementById("password").value;
    // miObjetoGlobal.emailUser=datos.email

    var request =  await fetch('api/usuarios/aut', {
      method: 'POST',
      headers: {
        'Accept':'application/json',
        'Content-Type': 'application/json'
      },

      body:JSON.stringify(datos)
    });

    const respuesta = request
    
    const status = request.status
    if(status == 200){
        window.location.href='user.html'
    }else if(status==403){
      alert("La contraseña no es correcta")
    }else{
      window.location.href='registro.html'
      alert("necesita registrarse")
    }

  
}




