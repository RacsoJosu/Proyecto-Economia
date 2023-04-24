
  
  async function registrarUsuario(){
    let datos={}
    datos.nombre= document.getElementById("nombre").value
    datos.apellido= document.getElementById("apellido").value
    datos.email= document.getElementById("email").value
    datos.passw= document.getElementById("password").value
    datos.locacion= document.getElementById("locacion").value
    datos.fondos_disponibles= 2000 + Math.floor(Math.random() * 100000)
    datos.numero_cuenta= document.getElementById("numeroCuenta").value
    let repetirPassw = document.getElementById("nPassword").value

    if (datos.passw != repetirPassw){
        alert("las contraseñas no son las mismas");
        return;
    }

    

    var request =  await fetch('api/usuarios', {
      method: 'POST',
      headers: {
        'Accept':'application/json',
        'Content-Type': 'application/json'
      },

      body:JSON.stringify(datos)
    });

    const status = request.status
    if(status == 200){
        window.location.href='login.html'
    }else{
      alert("El correo Ingresado ya esta asociado a una cuenta")
      window.location.href='login.html'
    }


  
}


