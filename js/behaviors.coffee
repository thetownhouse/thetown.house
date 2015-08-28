#::::::::::::::::::::::::::::::::::::::::::::::::::
# JS BEHAVIORS FOR THETOWN.HOUSE SITE
#::::::::::::::::::::::::::::::::::::::::::::::::::

class window.SB
  @init: ->
    this.initSiteNav()
    this.initPeoplePage()

  @initSiteNav: ->
    $('.list--sitenav a').click ->
      $('.is-selected').toggleClass("is-selected")
      $('.' + @.dataset.targetPage).toggleClass("is-selected")

  @initPeoplePage: ->
    $container = $('.js-isotope').isotope
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

    # Filter on click
    $('#filters li').click ->
      filterValue = $(this).attr('data-filter')
      $container.isotope({ filter: filterValue })
      $('#filters .is-active').toggleClass("is-active")
      $(this).toggleClass("is-active")

    # Sort on click
    $('#sorts li').click ->
      sortValue = $(this).attr('data-sort')
      $container.isotope({ sortBy: sortValue })
      $('#sorts .is-active').toggleClass("is-active")
      $(this).toggleClass("is-active")

    # Show and hide cards
    $('.person').click ->
      cardValue = $(this).attr('data-name')
      $('.cards').fadeIn()
    $('.card__close').click ->
      $('.cards').fadeOut()


(($) ->
  SB.init()
) jQuery