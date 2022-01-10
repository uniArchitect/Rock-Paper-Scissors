let possOutcomes = ['rock', 'paper', 'scissors'];

//playerSelection - User will input their move here
function playerSelection() {
    let selection = window.prompt("What will you choose?");
    return selection; 
}

//computerPlay - Computer's random moves
function computerPlay(possOutcomes) {
    return possOutcomes[Math.floor(Math.random() * possOutcomes.length)];
}