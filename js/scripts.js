//constructor for players
function Player(){
  this.name = "";
  this.scoreCurrent = 0;
  this.yourScore = 0;
}
var playerOne = new Player();
var playerTwo = new Player();
var maxScore = $("#winscore").val();
//introducing the roll method
Player.prototype.roll = function(){
  var dice = Math.floor(1 + Math.random()*6); //since you cant roll a zero I put the plus one
  if (dice>1){
    this.scoreCurrent += dice;
    this.yourScore += this.scoreCurrent;
  }
  else{
    this.scoreCurrent = 0;
  }
  return this.yourScore;
};
//the hold method
Player.prototype.hold = function(){
  this.yourScore += this.scoreCurrent;
  this.scoreCurrent = 0;
  return this.yourScore;
};
var winGame = function(player){
  $(".container").append(
  `
  <div class="container">
      <div class="wingame alert alert-success alert-dismissible">
          <a href="" class="close" data-dismiss="alert" aria-label="close">&times;</a>
          <h3>`+player.name+` won the game with a score of `+player.yourScore+`</h3>
      </div>
  </div>
  `
);
};



//gameplay functions
var play = function(){
  $("#card2").addClass("card-disable");
  $("#pl2-roll").addClass("button-disable");
  $("#pl2-hold").addClass("button-disable");
  return this;

};
$(document).ready (function(){
  playerOne.name = $('#name1').val();
  playerTwo.name = $('#name2').val();
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
  $("#pl1-roll").click(
    function(event){
        var rolledDice=playerOne.roll();
        $("#pl1_dice").text(rolledDice);
        $(".p1-session-score").text(playerOne.scoreCurrent);
        if(rolledDice===1){
            return $("#pl1-hold").trigger("click");
        }
        if((playerOne.scoreCurrent+playerOne.yourScore) >= maxScore){
            playerOne.yourScore=playerOne.scoreCurrent;
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
  $("#pl1-hold").click(
    function(event){
        playerOne.hold();
        $("#pl2-roll").addClass("button-disable");
        $("#pl2-hold").addClass("button-disable");
        $("#pl1-roll").removeClass("button-disable");
        $("#pl1-hold").removeClass("button-disable");
        $(".pl1_score").text("Your score is: "+playerOne.totalScore);
        return 0;
    }
  );
  $("#pl2-hold").click(
    function(event){
        playerOne.hold();
        $("#pl1-roll").addClass("button-disable");
        $("#pl1-hold-button").addClass("button-disable");
        $("#pl2-roll-button").removeClass("button-disable");
        $("#pl2-hold-button").removeClass("button-disable");
        $(".pl2_score").text("Your score is: "+playerOne.totalScore);
        return 0;
    }
  );
});