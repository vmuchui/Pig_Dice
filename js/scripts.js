//constructor for players
function Player(){
  this.name = "";
  this.scoreCurrent = 0;
  this.yourScore = 0;
}
var nameOne = new Player();
var nameTwo = new Player();
var maxScore = 0;
//introducing the roll method
Player.prototype.roll = function(){
  var dice = Math.floor(1 + Math.random()*6); //since you cant roll a zero I put the plus one
  if (dice>1){
    scoreCurrent += dice;
  }
  else{
    scoreCurrent = 0;
  }
  alert("you have scored "+ yourScore);
};
nameOne.name = playerOne;
nameTwo.name = playerTwo;


$(document).ready (function(){
  $('#play').submit (function(){
    (event).preventDefault();
    $('#hide').show();
    $('#show').slideDown();
    $('#disappear').hide();
    $('.jumbotron').hide();
    $('.form-group').hide();
    $('#nameOne').text(nameOne);
    $('#nameTwo').text(nameTwo);
  });
  var playerOne = $('#name1').val();
  var playerTwo = $('#name2').val();
});
