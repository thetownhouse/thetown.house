$( function() {
  // init Isotope
  var $container = $('.js-isotope').isotope({
    itemSelector: 'li',
    layoutMode: 'masonry',
    sortBy: 'random'
  });

  // filter on click
  $('#filters li').on('click', function() {
    var filterValue = $(this).attr('data-filter');
    console.log('filter fire!');
    console.log(filterValue);
    $container.isotope({ filter: filterValue });
  });

  // sort on click
  $('#sorts li').on('click', function() {
    var sortValue = $(this).attr('data-sort');
    console.log('sort fire!');
    console.log(sortValue);
    $container.isotope({ sortBy: sortValue });
  });
});

$(document).ready(function() {
  $("#container").tinycarousel({
    bullets   : true,
    buttons   : false,
    animation : true,
    animationTime : 1000,
    start     : 1
  });
});