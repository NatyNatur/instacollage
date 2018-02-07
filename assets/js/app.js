$(document).ready(function() {
  $('#collagepage').hide();

  function showSite() {
    $('#logpage').show();
  }
  // comprobando inicio de sesión
  $('#btnSign').click(function() {
    var mailVal = $('#mailInput').val();
    var passVal = $('#passInput').val();

    if (mailVal !== '' && passVal.length >= 6 && passVal !== '123456') {
      $('#logpage').hide();
      $('#collagepage').show();
    } else {
      alert('No se pudo iniciar sesión.');
    }
  });

  $(window).resize(function() {
    var imgWidth = $(this).width();
    // Imagenes con height responsivo
    $('.img-drag').height(imgWidth / 3);
    // Contenedor con height responsivo
    $('.receiver-cont').height(imgWidth / 2);
  }).resize();
});

function allowDrop(ev) {
  ev.preventDefault();
}

function drag(ev) {
  ev.dataTransfer.setData('text', ev.target.id);
  $(ev.target.id).parent().remove();
}
function drop(ev) {
  ev.preventDefault();
  var data = ev.dataTransfer.getData('text');
  ev.target.appendChild(document.getElementById(data));
}
