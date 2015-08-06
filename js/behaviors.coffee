#::::::::::::::::::::::::::::::::::::::::::::::::::
# JS BEHAVIORS FOR THETOWN.HOUSE SITE
#::::::::::::::::::::::::::::::::::::::::::::::::::

class window.SB
  @init: ->
    this.initSiteNav()

  @initSiteNav: ->
    $('.site-nav a').click ->
      $('.active').toggleClass("active")
      $('#' + @.dataset.targetPage).toggleClass("active")


(($) ->
  SB.init()
) jQuery