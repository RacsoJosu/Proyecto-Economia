// init Isotope
var $grid = $('.collection-list-auto').isotope({
    // options
  });
  // filter items on button click
  $('.filter-button-group-auto').on( 'click', 'button', function() {
    var filterValue = $(this).attr('data-filter');
    $grid.isotope({ filter: filterValue });
  });