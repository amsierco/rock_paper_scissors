//Variables
const rock = document.getElementById("rock");
const paper = document.getElementById("paper");
const scissors = document.getElementById("scissors");
//const body = document.getElementsByTagName("BODY")[0];
var game_count = 0;
var player_wins = 0;

var score = document.getElementById("score-id");


//Button events
rock.addEventListener('click', function(e) {
  playGame(this.getAttribute('id'), this);
});
paper.addEventListener('click', function(e) {
  playGame(this.getAttribute('id'), this);
});
scissors.addEventListener('click', function(e) {
  playGame(this.getAttribute('id'), this);
});

//Random computer choice
function computerChoice(){
    switch(Math.floor(Math.random() * 3)){
        case 0:
            return "rock";
            break;
        case 1:
            return "paper";
            break;
        case 2:
            return "scissors";
            break;
    } 
}

//Returns winner
function compareInput(user, computer){

    if(user == computer){
        return "draw";
    } else if(user == "rock" && computer == "scissors"
    || user == "paper" && computer == "rock"
    || user == "scissors" && computer == "paper"){
        return "player";
    } else {
        return "computer";
    }
}

//Main game function
function playGame(userChoice, obj){
//console.log(obj.getAttribute('id'));
	if(game_count < 10000){
      let computer = computerChoice();
      if(compareInput(userChoice, computer) == "draw"){
          //console.log("Draw!");
          //body.style.backgroundColor = 'gray';
          obj.style.backgroundColor = 'gray';
      } else if(compareInput(userChoice, computer) == "player"){
          //console.log("Player Wins!");
          player_wins++;
          //body.style.backgroundColor = 'green';
          obj.style.backgroundColor = 'green';
      } else if(compareInput(userChoice, computer) == "computer") {
          //console.log("Computer Wins!");
          //body.style.backgroundColor = 'red';
          obj.style.backgroundColor = 'red';
      } else {
          //console.log("Error!");
          //body.style.backgroundColor = 'purple';
      }
      
      let lose_count = (game_count-player_wins);
      let percentage = 0;
      if(lose_count < 0){
      	lose_count = 0;
      }
      if(game_count != 0){
      	percentage = (((player_wins/game_count).toFixed(2))*100);
      }
 			score.innerHTML = "Wins: " + player_wins + " Loses: " + lose_count + " Win Percentage: " + percentage + "%";	
      game_count++;
      
      //Resets the button's color
      setTimeout(() => {
				obj.style.backgroundColor = 'black';
      }, 1000);
	} else {
  	console.log("You won: " + player_wins + " games!");
  }
}

//Restart button
const restart = document.getElementById('restart-id');
restart.addEventListener('click', function(e){
	game_count = 0;
  player_wins = 0;
  score.innerHTML = "Wins: 0 Loses: 0 Win Percentage: 0%";
});