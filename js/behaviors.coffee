#::::::::::::::::::::::::::::::::::::::::::::::::::
# JS BEHAVIORS FOR THETOWN.HOUSE SITE
#::::::::::::::::::::::::::::::::::::::::::::::::::

class window.SB
  @init: ->
    this.initSiteNav()
    this.initAboutPage()
    this.initPeoplePage()

  @initSiteNav: ->
    $('.site-nav a').click ->
      $('.active').toggleClass("active")
      $('#' + @.dataset.targetPage).toggleClass("active")

  @initAboutPage: ->
    $gallery = $('.gallery').flickity
      cellSelector: 'img',
      imagesLoaded: true,
      percentPosition: false

    $caption = $('.caption')

    # Flickity instance
    flkty = $gallery.data('flickity')

    $gallery.on 'cellSelect', ->
      # Set image caption using img's alt
      $caption.text( flkty.selectedElement.alt )

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

    # Sort on click
    $('#sorts li').click ->
      sortValue = $(this).attr('data-sort')
      $container.isotope({ sortBy: sortValue })

    # Show and hide cards
    $('.person').click ->
      $('.cards').fadeIn()
    $('.card__close').click ->
      $('.cards').fadeOut()


(($) ->
  SB.init()
) jQuery