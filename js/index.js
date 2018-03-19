$(document).ready(function(){
    $('.collapsible').collapsible();
  });
$('.carousel.carousel-slider').carousel({fullWidth: true});
$(document).ready(function(){
    $('.scrollspy').scrollSpy({scrollOffset:0});
  });
  $( "#ios" ).hover(function() {
    $( "#her" ).toggleClass( "indigo " );
    $("#her").removeClass("light-green darken-1")
  });
  $( "#sono" ).hover(function() {
    $( "#her" ).toggleClass( "blue " );
    $("#her").removeClass("light-green darken-1")
  });
  $( "#semp" ).hover(function() {
    $( "#her" ).toggleClass( "teal " );
    $("#her").removeClass("light-green darken-1")
  });