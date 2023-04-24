

async function  alquilarPropiedad(){
   
    let datos={}
    datos.email= document.getElementById("email").value
    datos.passw= document.getElementById("password").value
    datos.id_propiedad = document.getElementById("id_propiedad").value
    datos.cantidadDias = document.getElementById("dias").value

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
    console.log(propiedades)
    let monto = propiedades[0].precio_noche * datos.cantidadDias
   if(monto <= usuarios[0].fondos_disponibles){
            let reserva ={}
            let fechaActual = new Date();

            fechaActual=fechaActual.setDate(fechaActual.getDate() + datos.cantidadDias);
            reserva.fecha_final=fechaActual
            reserva.estado_propiedad = 1
            reserva.id_usuario = usuarios[0].id_usuario
            reserva.id_propiedad = datos.id_propiedad
            var request =  await fetch('api/reservas', {
                method: 'POST',
                headers: {
                'Accept':'application/json',
                'Content-Type': 'application/json'
                },
        
                body:JSON.stringify(reserva)
            });
            
            propiedades[0].estado=1
            var request =  await fetch(`api/propiedades/${propiedades[0].id_propiedad}`, {
                method: 'PUT',
                headers: {
                'Accept':'application/json',
                'Content-Type': 'application/json'
                },
        
                body:JSON.stringify(propiedades[0])
            });
            usuarios[0].fondos_disponibles=usuarios[0].fondos_disponibles - monto
            var request =  await fetch(`api/propiedades/${usuarios[0].id_usuario}`, {
                method: 'PUT',
                headers: {
                'Accept':'application/json',
                'Content-Type': 'application/json'
                },
        
                body:JSON.stringify(usuarios[0])
            });
            alert("transaccion exitosa")
            window.location.href ="propiedades.html"




   }else{
    alert("no tiene fondos suficientes")
   }
    
  
      
  
}





async function  alquilarVehiculo(){
   
    let datos={}
    datos.email= document.getElementById("email").value
    datos.passw= document.getElementById("password").value
    datos.id_propiedad = document.getElementById("id_propiedad").value
    datos.cantidadDias = document.getElementById("dias").value

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
    console.log(propiedades)
    let monto = propiedades[0].precio_noche * datos.cantidadDias
   if(monto <= usuarios[0].fondos_disponibles){
            let reserva ={}
            let fechaActual = new Date();

            fechaActual=fechaActual.setDate(fechaActual.getDate() + datos.cantidadDias);
            reserva.fecha_final=fechaActual
            reserva.estado_propiedad = 1
            reserva.id_usuario = usuarios[0].id_usuario
            reserva.id_propiedad = datos.id_propiedad
            var request =  await fetch('api/reservas', {
                method: 'POST',
                headers: {
                'Accept':'application/json',
                'Content-Type': 'application/json'
                },
        
                body:JSON.stringify(reserva)
            });
            
            propiedades[0].estado=1
            var request =  await fetch(`api/propiedades/${propiedades[0].id_propiedad}`, {
                method: 'PUT',
                headers: {
                'Accept':'application/json',
                'Content-Type': 'application/json'
                },
        
                body:JSON.stringify(propiedades[0])
            });
            usuarios[0].fondos_disponibles=usuarios[0].fondos_disponibles - monto
            var request =  await fetch(`api/propiedades/${usuarios[0].id_usuario}`, {
                method: 'PUT',
                headers: {
                'Accept':'application/json',
                'Content-Type': 'application/json'
                },
        
                body:JSON.stringify(usuarios[0])
            });
            alert("transaccion exitosa")
            window.location.href ="propiedades.html"




   }else{
    alert("no tiene fondos suficientes")
   }
    
  
      
  
}