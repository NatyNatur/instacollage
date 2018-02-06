$(document).ready( function () {
  $('.img-drag').resize( function () {
    var imgWidth = $(this).width();
    $(this).height(imgWidth);
  }).resize();
})