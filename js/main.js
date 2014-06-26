$(document).ready(function(){
   $(window).bind('scroll', function() {
   var navHeight = $('header').height() - 60;
     if ($(window).scrollTop() > navHeight) {
       $('#nav').addClass('nav-container-fixed');
       $('#nav').removeClass('nav-container');
     }
     else {
      $('#nav').addClass('nav-container');
       $('#nav').removeClass('nav-container-fixed');
     }
  });
});

$(function() {
  smoothScrool(1000);
});

// smoothScroll function is applied from the document ready function
function smoothScrool (duration) {
  $('a[href^="#"]').on('click', function(event) {

      var target = $( $(this).attr('href') );

      if( target.length ) {
          event.preventDefault();
          $('html, body').animate({
              scrollTop: target.offset().top - 60
          }, duration);
      }
  });
}