$(function() {
  
  // initialize Isotope
  var $container = $('.js-isotope').isotope({
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
  
  // show and hide cards
  $('.person').on('click', function() {
    $('.cards').fadeIn();
  });
  $('.card__close').on('click', function() {
    $('.cards').fadeOut();
  });

});
