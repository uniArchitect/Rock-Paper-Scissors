let possOutcomes = ['rock', 'paper', 'scissors'];

function computerPlay(possOutcomes) {
    return possOutcomes[Math.floor(Math.random() * possOutcomes.length)];
}