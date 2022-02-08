//Global Scope
const moves = ['rock', 'paper', 'scissors'];
let playerScore = 0;
let computerScore = 0;
const buttonSelection = document.querySelectorAll('[data-selection]')
const userScore_div = document.getElementById('player-score')
const computerScore_div = document.getElementById('computer-score')
const gameResult_div = document.getElementById('round-result')
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
    let capFirstLetter = outcome[0].toUpperCase();
    let restOfString = outcome.slice(1).toLowerCase();
    let capSelection = (capFirstLetter + restOfString);
    return capSelection;
}

//checks for the winner after each game
function checkWinner() {
    if (playerScore === 5) {
        finalResult_div.innerHTML = "You won the game!"
    }else if(computerScore === 5) {
        finalResult_div.innerHTML = "Computer won the game!"
    }
}

//alters the score based on game results
function win(playerSelection, computerMove) {
    playerScore++;
    //connects playerScore to div element in HTML
    userScore_div.innerHTML = playerScore;
    //renders statement for game result
    gameResult_div.innerHTML = "You win! " + playerSelection + " beats " + computerMove;
    console.log(playerScore, computerScore);
    return checkWinner();
}

function lose(playerSelection, computerMove) {
    computerScore++;
    //connects computerScore to div element in HTML
    computerScore_div.innerHTML = computerScore;
    gameResult_div.innerHTML = "You lost... " + computerMove + " beats " + playerSelection;
    console.log(playerScore, computerScore);
    return checkWinner();
}

function tie() {
    console.log(playerScore, computerScore);
    gameResult_div.innerHTML = "You tied";
    return checkWinner();;
}

//Game to 5
function game(playerSelection) {
    
    computerMove = computerPlay();

    //Choose 'Rock'
    if (playerSelection === 'Rock' && computerMove === 'Rock') {
        tie(playerSelection, computerMove);
    } 
        else if (playerSelection === 'Rock' && computerMove === 'Scissors') {
            //add inputs to executed 'win' function that will translate into the defined 'win' function
            win(playerSelection, computerMove);
        }
        else if (playerSelection === 'Rock' && computerMove === 'Paper') {
            lose(playerSelection, computerMove);
        }
    //Choose 'Paper'
    if (playerSelection === 'Paper' && computerMove === 'Rock') {
        win(playerSelection, computerMove);
    }
        else if (playerSelection === 'Paper' && computerMove === 'Paper') {
            tie(playerSelection, computerMove);
        }
        else if (playerSelection === 'Paper' && computerMove === 'Scissors') {
            lose(playerSelection, computerMove);
        }
    //Choose 'Scissors'
    if (playerSelection === 'Scissors' && computerMove === 'Rock') {
        lose(playerSelection, computerMove);
    }
        else if (playerSelection === 'Scissors' && computerMove === 'Paper') {
            win(playerSelection, computerMove);
        }
        else if (playerSelection === 'Scissors' && computerMove === 'Scissors') {
            tie(playerSelection, computerMove);
        }
}