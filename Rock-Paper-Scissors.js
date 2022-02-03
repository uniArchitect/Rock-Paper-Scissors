//Global Scope
const moves = ['rock', 'paper', 'scissors'];
let playerScore = 0;
let computerScore = 0;

//playerSelection - User will input their move here - Additional UI
function playerSelection(selection) {
    selection = prompt("Rock, Paper or Scissors?");
    let capFirstLetter = selection[0].toUpperCase();
    let restOfString = selection.slice(1).toLowerCase();
    let capSelection = (capFirstLetter + restOfString);
    return capSelection; 
}

//computerPlay - Computer's random moves
let computerPlay = outcome => {
    outcome = moves[Math.floor(Math.random() * moves.length)];
    return outcome;
}

//Captured player variables
let playerMove = playerSelection();
let computerMove = computerPlay();

//Single Round Game
let oneRound = (playerMove,computerMove) => {

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
const rock = document.querySelector("#rock");
const paper = document.querySelector("#paper");
const scissors = document.querySelector("#scissors");

rock.addEventListener('click', () => {
    console.log(oneRound());
    return true;
});

paper.addEventListener('click', () => {
    console.log('Paper');
    return true;
});

scissors.addEventListener('click', () => {
    console.log('Scissors');
    return true;
});