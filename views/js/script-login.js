// $(document).ready(function(){


 
// }); 
  


async function iniciarSesion(){
    let datos={}
    
    datos.email= document.getElementById("email").value;
    datos.passw= document.getElementById("password").value;


    var request =  await fetch('api/authenticacion/login', {
      method: 'POST',
      headers: {
        'Accept':'application/json',
        'Content-Type': 'application/json'
      },

      body:JSON.stringify(datos)
    });


    const status = request.status
    if(status == 200){
        window.location.href='index.html'
    }else{
        alert("El correo y/o la contraseña esta mal")
    }

  
}


  



