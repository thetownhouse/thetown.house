#::::::::::::::::::::::::::::::::::::::::::::::::::
# JS BEHAVIORS FOR THETOWN.HOUSE SITE
#::::::::::::::::::::::::::::::::::::::::::::::::::

class window.SB
  @init: ->
    this.initSiteNav()
    this.initPeoplePage()

  @initSiteNav: ->
    $('.site-nav a').click ->
      $('.active').toggleClass("active")
      $('#' + @.dataset.targetPage).toggleClass("active")

  @initPeoplePage: ->
    console.log("People!")

(($) ->
  SB.init()
) jQuery