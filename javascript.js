//Assign button listeners
var buttons = document.querySelectorAll('.choice-container .btn');
var userChoice = "";

//const btns = document.getElementsByClassName(".choice-container .btn");
//console.log(btns.item);

for(i of buttons){
    i.addEventListener('click', function(e){

        userChoice = this.getAttribute('id');
        playGame(this.getAttribute('id'));
    });
}

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
function compareInput(user){

    var computer = computerChoice();

    console.log("Comp: "+computer+" User: "+user);

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
function playGame(userChoice){
    if(compareInput(userChoice) == "draw"){
        console.log("Draw!");
    } else if(compareInput(userChoice) == "player"){
        console.log("Player Wins!");
    } else if(compareInput(userChoice) == "computer") {
        console.log("Computer Wins!");
    } else {
        console.log("Error!");
    }
}