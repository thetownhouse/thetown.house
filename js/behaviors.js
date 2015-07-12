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

// adding captions to Flickity
// http://codepen.io/desandro/pen/dPdVNM

$(document).ready( function() {
  var $gallery = $('.gallery').flickity({
    cellSelector: 'img',
    imagesLoaded: true,
    percentPosition: false
  });
  var $caption = $('.caption');
  // Flickity instance
  var flkty = $gallery.data('flickity');

  $gallery.on( 'cellSelect', function() {
    // set image caption using img's alt
    $caption.text( flkty.selectedElement.alt );
  });
});
