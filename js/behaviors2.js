$(document).ready( function() {
  $(".site-nav a").click( function() {
    console.log("CLICKIN'");
    $(".active").toggleClass("active");
    $("#"+ this.dataset.targetPage).toggleClass("active");
  });
});