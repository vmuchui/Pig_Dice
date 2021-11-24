//constructor for players
function Player(){
  this.name = "";
  this.rolledScore = 0;
  this.scoreCurrent = 0;
  this.yourScore = 0;
}
var playerOne = new Player();
var playerTwo = new Player();
var maxScore = parseInt($("#winscore").val());
//the hold method
Player.prototype.hold = function(){
  
  this.rolledScore = 0;

  this.yourScore = this.scoreCurrent;
  return this.yourScore;
};
//introducing the roll method
Player.prototype.roll = function(){
  var dice = Math.floor(1 + Math.random()*6); //since you cant roll a zero I put the plus one
  if (dice>1){
    this.rolledScore = dice;
    this.scoreCurrent += this.rolledScore;
    this.yourScore += this.rolledScore;
    
  }
  else{
    this.scoreCurrent = 0;
    this.rolledScore = 0;
    this.yourScore = 0;
  }
  return this.scoreCurrent;
};

var winGame = function(player){
  $('#show').hide();
  $(".container").append(
  `
  <div class="container-fluid">
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
    $('#max_score').text($('#winscore').val());
           
    maxScore = $("#winscore").val();
    $(".form-group").submit(
      function(event){
          event.preventDefault();
          return play();
      }
    );
    $('.form-group').hide();
  }); 
  $("#pl1-roll").click(
    function(event){
        var rolledDice=playerOne.roll();
        $("#pl1_rolled").text(playerOne.rolledScore);
        $("#pl1_dice").text(rolledDice);
        $("#pl1_score").text(playerOne.yourScore);
        if(rolledDice<1){
            return $("#pl1-hold").trigger("click");
        }
        if((playerOne.yourScore) >= maxScore){
            return winGame(playerOne);
        }
        return 0;
    }
  );
  $("#pl2-roll").click(
    function(event){
        var rolledDice=playerTwo.roll();
        $("#pl2_rolled").text(playerTwo.rolledScore);
        $("#pl2_dice").text(rolledDice);
        $("#pl2_score").text(playerTwo.yourScore);
        if(rolledDice<1){
            return $("#pl2-hold").trigger("click");
        }
        if( playerTwo.yourScore >= maxScore ){
            return winGame(playerTwo);
        }
        return 0;
    }
  );
  $("#pl1-hold").click(
    function(event){
        playerOne.hold();
        $("#pl1-roll").addClass("disabled");
        $("#pl1-hold").addClass("disabled");
        $("#pl2-roll").removeClass("disabled");
        $("#pl2-hold").removeClass("disabled");
        $("#pl1_score").text(playerOne.yourScore);
        return 0;
    }
  );
  $("#pl2-hold").click(
    function(event){
        playerTwo.hold();
        $("#pl1-roll").removeClass("disabled");
        $("#pl1-hold").removeClass("disabled");
        $("#pl2-roll").addClass("disabled");
        $("#pl2-hold").addClass("disabled");
        $("#pl2_score").text(playerTwo.yourScore);
        return 0;
    }
  );
});