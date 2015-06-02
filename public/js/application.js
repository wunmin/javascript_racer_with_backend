$(document).ready(function() {
  var player1 = 1;
  var player2 = 1;

  function movePlayer(playerNum, playerMove) {
    playerNum += 1
    return playerNum
    // playerNum += playerMove;
    // return playerNum;
  }

  function restartGame() {
    var userResponse = prompt("Do you want to restart the game? Enter yes or no.");
    if (userResponse === "yes") {
      if (player1 > 30)
        {
          $("#1_30").removeClass("active");
        }
      else
        {
          $("#1_" + player1).removeClass("active");
        }
      if (player2 > 30)
        {
          $("#2_30").removeClass("active");
        }
      else
        {
          $("#2_" + player2).removeClass("active");
        }
      player1 = 1;
      player2 = 1;
      $("#1_1").addClass("active");
      $("#2_1").addClass("active");
    }
    else {
      alert("Thanks for playing!");
    }
  }
  $(document).keyup(function(event) {
      var rand = Math.floor((Math.random() * 10) + 1);
      if (event.which === 81) {
        $("#1_" + player1).removeClass("active");
        player1 = movePlayer(player1, rand);
        if (player1 > 30) {
          $("#1_30").addClass("active");
          alert("Player 1 wins!");

          restartGame();
        }
        else {
          $("#1_" + player1).addClass("active");
        }
        console.log("Player 1 playing");
      }
      else if (event.which === 80) {
        $("#2_" + player2).removeClass("active");
        player2 = movePlayer(player2, rand);
        if (player2 > 30) {
          $("#2_30").addClass("active");
          alert("Player 2 wins!");
          restartGame();
        }
        else {
          $("#2_" + player2).addClass("active");
        }
        console.log("Player 2 playing");
      }
      else {
        confirm("Please enter only 'p' or 'q'.");
      }
  });
});