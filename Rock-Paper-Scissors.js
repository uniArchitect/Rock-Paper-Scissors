//Global Scope
let possOutcomes = ['rock', 'paper', 'scissors'];
let playerScore = "0";
let computerScore = "0";

//playerSelection - User will input their move here
function playerSelection() {
    let selection = prompt("Rock, Paper or Scissors?");
    let capFirstLetter = selection[0].toUpperCase();
    let restOfString = selection.slice(1).toLowerCase();
    let capSelection = (capFirstLetter + restOfString);
    return capSelection; 
}

//computerPlay - Computer's random moves
function computerPlay() {
    outcome = possOutcomes[Math.floor(Math.random() * possOutcomes.length)];
    return outcome;
}

//Single Round Game
function oneRound() {

//Captured player variables
let playerMove = playerSelection();
let computerMove = computerPlay();

    //Choose 'Rock'
    if (playerMove === 'Rock' && computerMove === 'rock') {
        return "Tie";
    } 
        else if (playerMove === 'Rock' && computerMove === 'scissors') {
            return "You win!";
        }
        else if (playerMove === 'Rock' && computerMove === 'paper') {
            return "You lost...";
        }
    //Choose 'Paper'
    if (playerMove === 'Paper' && computerMove === 'rock') {
        return "You win!";
    }
        else if (playerMove === 'Paper' && computerMove === 'paper') {
            return "Tie";
        }
        else if (playerMove === 'Paper' && computerMove === 'scissors') {
            return "You lost...";
        }
    //Choose 'Scissors'
    if (playerMove === 'Scissors' && computerMove === 'rock') {
        return "You lost...";
    }
        else if (playerMove === 'Scissors' && computerMove === 'paper') {
            return "You win!";
        }
        else if (playerMove === 'Scissors' && computerMove === 'scissors') {
            return "Tie";
        }
}

//Game function - Play to best of 5
function game() {

    //add "return" to oneRound to retrieve results
    oneRound();
    if (oneRound() === 'You win!') {
        playerScore++;
        console.log(playerScore, computerScore);
    }else if (oneRound() === 'You lost...') {
            computerScore++;
            console.log(playerScore, computerScore);
    }else if (oneRound() === 'Tie') {
            console.log(playerScore, computerScore);
        }
}