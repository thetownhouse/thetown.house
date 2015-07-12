$( function() {
  
  // init Isotope
  var $container = $('#isotope').isotope({
    itemSelector: '.person',
    layoutMode: 'masonry',
    getSortData: {
      name: '.person__name',
      floor: '[data-floor]'
    },
    sortAscending: {
      name: true,
      floor: false
    },
    sortBy: 'random'
  });

  // filter on click
  $('#filters li').on('click', function() {
    var filterValue = $(this).attr('data-filter');
    $container.isotope({ filter: filterValue });
  });

  // sort on click
  $('#sorts li').on('click', function() {
    var sortValue = $(this).attr('data-sort');
    $container.isotope({ sortBy: sortValue });
  });
  
});

$(document).ready(function() {
  $("#carousel").tinycarousel({
    bullets   : true,
    buttons   : false,
    animation : true,
    animationTime : 1000,
    start     : 1
  });
});