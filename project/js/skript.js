$(document).ready(function(){
  $("#header__menu_toggle").click(function(event){
    $("#header__nav").toggleClass("active");
  });
  // Intro slider
  $(".intro__slider").slick({
    arrows: false,
    dots: true,
    autoplay: true
  });
});