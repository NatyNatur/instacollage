$(document).ready( function () {
  $(window).resize( function () {
    var imgWidth = $(this).width()/3;
    $('.img-drag').height(imgWidth);
  }).resize();

})