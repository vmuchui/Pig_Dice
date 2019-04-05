$(document).ready (function(){
  $('#play').click (function(){
    $('#hide').show();
    $('#show').slideDown();
    $('#disappear').hide();
    $('.jumbotron').hide();
    $('#nameOne').text(nameOne);
    $('#nameTwo').text(nameTwo);
  });
});
var nameOne = new Player(document.getElementById('#name1').value);
var nameTwo = new Player(document.getElementById('#name1').value);
function Player(value){
  this.name = name;
}