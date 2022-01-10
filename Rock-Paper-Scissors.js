let possOutcomes = ['rock', 'paper', 'scissors'];

//playerSelection - User will input their move here
function playerSelection() {
    let selection = prompt("Rock, Paper or Scissors?");
    str = selection;
    let capFirstLetter = str[0].toUpperCase();
    let restOfString = str.slice(1);
    let capSelection = (capFirstLetter + restOfString);
    return capSelection; 
}

//computerPlay - Computer's random moves
function computerPlay(possOutcomes) {
    outcome = possOutcomes[Math.floor(Math.random() * possOutcomes.length)];
    return outcome;
}

//Single Round Game
function oneRound() {

    //Capture Play Variables
    playerMove = playerSelection();
    computerMove = computerPlay(possOutcomes);
    
    //Choose 'Rock'
    if (playerMove === 'Rock' && computerMove === 'rock') {
        return "Tie";
    }

    if (playerMove === 'Rock' && computerMove === 'paper') {
        return "You lost...";
    }

    if (playerMove === 'Rock' && computerMove === 'scissors') {
        return "You win!";
    }

    //Choose 'Paper'
    if (playerMove === 'Paper' && computerMove === 'rock') {
        return "You win!";
    }

    if (playerMove === 'Paper' && computerMove === 'paper') {
        return "Tie";
    }

    if (playerMove === 'Paper' && computerMove === 'scissors') {
        return "You lost...";
    }

    //Choose 'Scissors'
    if (playerMove === 'Scissors' && computerMove === 'rock') {
        return "You lost...";
    }

    if (playerMove === 'Scissors' && computerMove === 'paper') {
        return "You win!";
    }

    if (playerMove === 'Scissors' && computerMove === 'scissors') {
        return "Tie";
    }
}