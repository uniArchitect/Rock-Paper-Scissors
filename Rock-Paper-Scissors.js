//Global Scope
const moves = ['rock', 'paper', 'scissors'];
let playerScore = 0;
let computerScore = 0;
const buttonSelection = document.querySelectorAll('[data-selection]')

// Define button options 
const rock = document.querySelector("#rock");
const paper = document.querySelector("#paper");
const scissors = document.querySelector("#scissors");

//playerSelection - User will input their move here - Additional UI
//Create a playerSelection function that will return the value when the button is clicked on the HTML
buttonSelection.forEach(buttonSelection => {
    buttonSelection.addEventListener('click', () => {
        const playerMove = buttonSelection.dataset.selection
        //function to create value of clicked button = game function as well
        gameRPS(playerMove)
    })
})

//computerPlay - Computer's random moves
let computerPlay = outcome => {
    outcome = moves[Math.floor(Math.random() * moves.length)];
    return outcome;
}

//Single Round Game
function gameRPS(playerSelection) {
    
    computerMove = computerPlay();

    //Choose 'Rock'
    if (playerSelection === 'Rock' && computerMove === 'rock') {
        console.log("Tie");
    } 
        else if (playerSelection === 'Rock' && computerMove === 'scissors') {
            console.log("You win!");
        }
        else if (playerSelection === 'Rock' && computerMove === 'paper') {
            console.log("You lost...");
        }
    //Choose 'Paper'
    if (playerSelection === 'Paper' && computerMove === 'rock') {
        console.log("You win!");
    }
        else if (playerSelection === 'Paper' && computerMove === 'paper') {
            console.log("Tie");
        }
        else if (playerSelection === 'Paper' && computerMove === 'scissors') {
            console.log("You lost...");
        }
    //Choose 'Scissors'
    if (playerSelection === 'Scissors' && computerMove === 'rock') {
        console.log("You lost...");
    }
        else if (playerSelection === 'Scissors' && computerMove === 'paper') {
            console.log("You win!");
        }
        else if (playerSelection === 'Scissors' && computerMove === 'scissors') {
            console.log("Tie");
        }
}

function checkWinner() {
    if (playerScore === 5) {
        console.log('You won the game!');
    }else if(computerScore === 5) {
        console.log('Computer won the game!');
    }
}

//Game function - Play to best of 5
function game() {

    gameOutcome = gameRPS(playerSelection);
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