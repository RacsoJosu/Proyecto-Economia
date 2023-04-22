
  
  async function registrarUsuarios(){
    let datos={}
    datos.nombre= document.getElementById("#").value
    datos.apellido= document.getElementById("#").value
    datos.email= document.getElementById("#").value
    datos.passw= document.getElementById("#").value
    datos.locacion= document.getElementById("#").value
    datos.register_date= document.getElementById("#").value
    datos.fondos_disponibles= document.getElementById("#").value
    datos.numero_cuenta= document.getElementById("#").value
    let repetirPassw = document.getElementById("#").value

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

  
}
