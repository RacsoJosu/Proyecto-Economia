
$(document).ready(function(){
  cargarPropiedades();
  cargarVehiculos();
  
}); 

//carga dinamica de las propiedades, falta agregar valoracion 

async function cargarPropiedades(){
  
    var request =  await fetch('api/propiedades', {
      method: 'GET',
      headers: {
        'Accept':'application/json',
        'Content-Type': 'application/json'
      }
    });

    

    const propiedades = await request.json();
    let filtro=["vendidos","popular","nuevo"]
    let listadoHTML=""
    let index =0
    for (let propiedad of propiedades){
      let count=0
      let suma=0
      let eleccion = Math.floor(Math.random() * 3)
      propiedad.valoraciones.forEach(function(item) {
        
        Object.keys(item).forEach(function(key) {
          key="puntuacion"
          suma+=item[key]
          count+=1
        })
        
      })
      let  valoracion = suma/count
      let estrellas = '<span class = "text-custom"><i class = "bi bi-star-fill"></i></span>'.repeat(valoracion);
      let propiedadHTML = `
      <div  class = "col-md-6 col-lg-4 col-xl-3 p-2 ${filtro[eleccion]}">
          <div class = "collection-img position-relative">
            <img src = "images/${propiedad.id_propiedad}_.jpg" class = "w-100">
            <span class = "position-absolute bg-primary text-white d-flex align-items-center justify-content-center">sale</span>
          </div>
  
          <div class = "text-center">
              <div class = "rating mt-3">
                  ${estrellas}
              </div>
              <p class = "text-capitalize my-1">Apartamento</p>
              <p class = "text-capitalize my-1">Locacion: ${propiedad.calle} </p>
              <p class = "text-capitalize my-1">ciudad: ${propiedad.ciudad} </p>
              <span class = "fw-bold">$ ${propiedad.precio_noche}</span>
          </div>
  
  
      </div>
      `
      listadoHTML += propiedadHTML
      
    }
    
    // Agregar nuevos elementos a la lista de colección
    
    
    document.querySelector('#propiedades').outerHTML=listadoHTML
 
  
  }
  
  
  
  async function cargarVehiculos(){
    
    var request =  await fetch('api/vehiculos', {
      method: 'GET',
      headers: {
        'Accept':'application/json',
        'Content-Type': 'application/json'
      }
    });
    const vehiculos = await request.json();
  
    let listadoHTML=""
    for (let vehiculo of vehiculos){
      let vehiculoHTML = `
        <div class = "col-md-6 col-lg-4 col-xl-3 p-2">
            <div class = "special-img position-relative overflow-hidden">
                <img src = "images/auto_${vehiculo.matricula}.avif" class = "w-100">
                <span class = "position-absolute d-flex align-items-center justify-content-center text-custom fs-4">
                    <i class = "bi bi-heart-fill"></i>
                </span>
            </div>
            <div class = "text-center">
                <p class = "text-capitalize mt-3 mb-1">${vehiculo.marca}</p>
                <span class = "fw-bold d-block">modelo: ${vehiculo.modelo}</span>
                <a href = "#" class = "btn btn-primary mt-3">Add to Cart</a>
            </div>
        </div>
  
  
       
      `
      listadoHTML += vehiculoHTML
    }
    
  
    document.querySelector('#vehiculos_').outerHTML=listadoHTML

  
}


