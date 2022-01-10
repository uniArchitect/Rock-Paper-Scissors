let possOutcomes = ['rock', 'paper', 'scissors'];

//playerSelection - User will input their move here
function playerSelection() {
    let selection = prompt("Rock, Paper or Scissors?");
    return selection; 
}

//computerPlay - Computer's random moves
function computerPlay(possOutcomes) {
    return possOutcomes[Math.floor(Math.random() * possOutcomes.length)];
}

//Single Round Game
function oneRound() {
    playerSelection();
    computerPlay(possOutcomes);
    
    //Capture Play Variables
    playerMove = playerSelection();
    computerMove = computerPlay(possOutcomes);
    
    if (playerMove === 'Rock') {
        if (computerMove === 'rock');
        return "Tie";
    }

    if (playerMove === 'Rock') {
        if (computerMove === 'paper');
        return "You lost...";
    }

    if (playerMove === 'Rock') {
        if (computerMove === 'scissors');
        return "You win!";
    }
}