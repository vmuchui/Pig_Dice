//constructor for players
function Player(){
  this.name = "";
  this.scoreCurrent = 0;
  this.yourScore = 0;
}
var playerOne = new Player();
var playerTwo = new Player();
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
  return dice;
};
//the hold method
Player.prototype.hold = function(){
  this.yourScore += this.scoreCurrent;
  this.scoreCurrent = 0;
  return this.yourScore;
};
$("#pl1-roll").click(
  function(event){
      var rolledDice=playerOne.roll();
      $("#pl1_dice").text(rolledDice);
      $(".p1-session-score").text(playerOne.scoreCurrent);
      if(rolledDice===1){
          return $("#pl1-hold").trigger("click");
      }
      if((playerOne.scoreCurrent+playerOne.yourScore) >= maxScore){
          playerOne.yourScore=playerOne.scoreCurrent+playerOne.yourScore;
          return winGame(playerOne);
      }
      return 0;
  }
);
$("#pl2-roll").click(
  function(event){
      var rolledDice=playerTwo.roll();
      $("#pl2_dice").text(rolledDice);
      $(".p1-session-score").text(playerTwo.scoreCurrent);
      if(rolledDice===1){
          return $("#pl2-hold").trigger("click");
      }
      if((playerTwo.scoreCurrent+playerTwo.yourScore) >= maxScore){
          playerTwo.yourScore=playerTwo.scoreCurrent+playerTwo.yourScore;
          return winGame(playerTwo);
      }
      return 0;
  }
);
//gameplay functions
var play = function(){
  $("#card2").addClass("card-disable");
  $("#pl2-roll").addClass("button-disable");
  $("#pl2-hold").addClass("button-disable");
  return this;

};
$(document).ready (function(){
  $('#play').click (function(){
    event.preventDefault();
    $('#hide').show();
    $('#show').slideDown();
    $('#disappear').hide();
    $('.jumbotron').hide();
    $('#nameOne').text($('#name1').val());
    $('#nameTwo').text($('#name2').val());
    $(".form-group").submit(
      function(event){
          event.preventDefault();       
          maxScore = $("#winscore").val();
          return play();
      }
    );
    $('.form-group').hide();
  }); 
});