//Global Scope
const moves = ['rock', 'paper', 'scissors'];
let playerScore = 0;
let computerScore = 0;
const buttonSelection = document.querySelectorAll('[data-selection]')
const userScore_div = document.getElementById('player-score')
const computerScore_div = document.getElementById('computer-score')
const gameResult_div = document.getElementById('game-result')
const finalResult_div = document.getElementById('final-result')

//Define button options 
const rock = document.querySelector("#rock");
const paper = document.querySelector("#paper");
const scissors = document.querySelector("#scissors");

//playerSelection - User will input their move here - Additional UI
//Create a playerSelection function that will return the value when the button is clicked on the HTML
buttonSelection.forEach(buttonSelection => {
    buttonSelection.addEventListener('click', () => {
        const playerMove = buttonSelection.dataset.selection
        //function to create value of clicked button = game function as well
        game(playerMove)
    })
})

//computerPlay - Computer's random moves
let computerPlay = outcome => {
    outcome = moves[Math.floor(Math.random() * moves.length)];
    return outcome;
}

//checks for the winner after each game
function checkWinner() {
    if (playerScore === 5) {
        finalResult_div.innerHTML = "You won the game!"
        //console.log('You won the game!');
    }else if(computerScore === 5) {
        finalResult_div.innerHTML = "Computer won the game!"
        //console.log('Computer won the game!');
    }
}

//alters the score based on game results
function win(playerSelection, computerMove) {
    playerScore++;
    //connects playerScore to div element in HTML
    userScore_div.innerHTML = playerScore;
    //renders statement for game result
    gameResult_div.innerHTML = "You win!";
    console.log(playerScore, computerScore);
    return checkWinner();
}

function lose() {
    computerScore++;
    //connects computerScore to div element in HTML
    computerScore_div.innerHTML = computerScore;
    gameResult_div.innerHTML = "You lost...";
    console.log(playerScore, computerScore);
    return checkWinner();
}

function tie() {
    console.log(playerScore, computerScore);
    gameResult_div.innerHTML = "You tie...";
    return checkWinner();;
}

//Game to 5
function game(playerSelection) {
    
    computerMove = computerPlay();

    //Choose 'Rock'
    if (playerSelection === 'Rock' && computerMove === 'rock') {
        tie();
    } 
        else if (playerSelection === 'Rock' && computerMove === 'scissors') {
            win();
        }
        else if (playerSelection === 'Rock' && computerMove === 'paper') {
            lose();
        }
    //Choose 'Paper'
    if (playerSelection === 'Paper' && computerMove === 'rock') {
        win();
    }
        else if (playerSelection === 'Paper' && computerMove === 'paper') {
            tie();
        }
        else if (playerSelection === 'Paper' && computerMove === 'scissors') {
            lose();
        }
    //Choose 'Scissors'
    if (playerSelection === 'Scissors' && computerMove === 'rock') {
        lose();
    }
        else if (playerSelection === 'Scissors' && computerMove === 'paper') {
            win();
        }
        else if (playerSelection === 'Scissors' && computerMove === 'scissors') {
            tie();
        }
}