$(function(){var o=$(".js-isotope").isotope({itemSelector:"li",layoutMode:"masonry",sortBy:"random"});$("#filters li").on("click",function(){var t=$(this).attr("data-filter");console.log("filter fire!"),console.log(t),o.isotope({filter:t})}),$("#sorts li").on("click",function(){var t=$(this).attr("data-sort");console.log("sort fire!"),console.log(t),o.isotope({sortBy:t})})}),$(document).ready(function(){$("#carousel").tinycarousel({bullets:!0,buttons:!1,animation:!0,animationTime:1e3,start:1})});