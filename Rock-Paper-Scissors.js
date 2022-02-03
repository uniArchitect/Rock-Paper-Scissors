//Global Scope
const moves = ['rock', 'paper', 'scissors'];
let playerScore = 0;
let computerScore = 0;

//playerSelection - User will input their move here
let playerSelection = selection => {
    selection = prompt("Rock, Paper or Scissors?");
    let capFirstLetter = selection[0].toUpperCase();
    let restOfString = selection.slice(1).toLowerCase();
    let capSelection = (capFirstLetter + restOfString);
    console.log(capSelection);
    return true; 
}

//computerPlay - Computer's random moves
let computerPlay = outcome => {
    outcome = moves[Math.floor(Math.random() * moves.length)];
    console.log(outcome);
    return true;
}

//Captured player variables
let playerMove = playerSelection();
let computerMove = computerPlay();

//Single Round Game
function oneRound(playerMove,computerMove) {

    playerMove = playerSelection();
    computerMove = computerPlay();
    
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

//oneRound in variable
//let gameOutcome = oneRound();

function checkWinner() {
    if (playerScore === 5) {
        return 'You won the game!';
    }else if(computerScore === 5) {
        return 'Computer won the game!';
    }
}

//Game function - Play to best of 5
function game() {

    gameOutcome = oneRound();
    if (gameOutcome === 'You win!') {
        playerScore++;
        console.log(playerScore, computerScore);
        //return 'You win!';
        return checkWinner();
    }else if (gameOutcome === 'You lost...') {
            computerScore++;
            console.log(playerScore, computerScore);
            //return 'You lost...';
            return checkWinner();
    }else if (gameOutcome === 'Tie') {
            console.log(playerScore, computerScore);
            //return 'Tie';
            return checkWinner();
        }
}

// Define button options 
const startGame = document.querySelector("#startGame");
const rock = document.querySelector("#rock");
const paper = document.querySelector("#paper");
const scissors = document.querySelector("#scissors");

startGame.addEventListener('click', () => {
    console.log('Pick your move...');
});

rock.addEventListener('click', () => {
    oneRound(playerMove, computerMove);
    return true;
});

paper.addEventListener('click', () => {
    console.log('Paper');
});

scissors.addEventListener('click', () => {
    console.log('Scissors');
});