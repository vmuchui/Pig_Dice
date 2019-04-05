$(document).ready (function(){
  $('#play').click (function(){
    $('#hide').show();
    $('#show').slideDown();
    $('#disappear').hide();
    $('.jumbotron').hide();
  });
});