
// init Isotope
var $grid = $('.collection-list').isotope({
    // options
  });
  // filter items on button click
  $('.filter-button-group').on( 'click', 'button', function() {
    var filterValue = $(this).attr('data-filter');
    $grid.isotope({ filter: filterValue });
  });


//carga dinamica de las propiedades, falta agregar valoracion 
$(document).ready(function(){
  cargarPropiedades()
});  




async function cargarPropiedades(){
  
  var request =  await fetch('api/propiedades', {
    method: 'GET',
    headers: {
      'Accept':'application/json',
      'Content-Type': 'application/json'
    }
  });
  const propiedades = await request.json();

  let valoracion = 4
  let listadoHTML=""
  for (let propiedad of propiedades){
    let estrellas = '<span class = "text-custom"><i class = "bi bi-star-fill"></i></span>'.repeat(valoracion);
    let propiedadHTML = `
    <div  class = "col-md-6 col-lg-4 col-xl-3 p-2 vendidos">
        <div class = "collection-img position-relative">
        <img src = "images/Propuesta.jpg" class = "w-100">
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
  

  document.querySelector('#propiedades').outerHTML=listadoHTML
  console.log(propiedades)

}