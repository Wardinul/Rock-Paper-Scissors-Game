const item = ['rock', 'paper', 'scissors'];

const resultDisplay = document.getElementById('final-result');
const gameDisplay = document.getElementById('game');

const playerPointsDisplay = document.getElementById('player-points');
const computerPointsDisplay = document.getElementById('computer-points');
const playerChoice = document.getElementById('player-choice');
const computerChoice = document.getElementById('computer-choice');

let gameRound = 0;
let value;

let playerPoints = 0;
let computerPoints = 0;

function getComputerChoice(){
    let randomResult = item[Math.floor(Math.random() * item.length)];
    return randomResult;
}

function reply_click(clicked_id){
    value = clicked_id;
    playRound();
    if(gameRound === 5){
        resultDisplay.style.display = 'flex';
        gameDisplay.style.display = 'none';

        resultDisplay.innerHTML = game();
    }
}

function playRound(playerSelection, computerSelection){
    let result;
    
    playerSelection = value;
    computerSelection = getComputerChoice();

    playerChoice.innerHTML = playerSelection;
    computerChoice.innerHTML = computerSelection;

    if(playerSelection === computerSelection){
        result = 'Draw!';
        playerPoints++;
        computerPoints++;
    } else if(playerSelection === 'rock' && computerSelection === 'paper'){
        result = 'You Lost! Paper Beats Rock';
        computerPoints += 1;
    } else if(playerSelection === 'paper' && computerSelection === 'scissors'){
        result = 'You Lost! Scissors Beats Paper';
        computerPoints++;
    } else if(playerSelection === 'scissors' && computerSelection === 'rock'){
        result = 'You Lost! Rock Beats Scissors';
        computerPoints++;
    } else{
        result = 'You Won! ' + playerSelection + ' Beats ' + computerSelection;
        playerPoints++;
    }
    gameRound++;
    playerPointsDisplay.innerHTML = playerPoints;
    computerPointsDisplay.innerHTML = computerPoints;
}

function game(){
    let finalResult;
    
    if(gameRound === 5 && playerPoints === computerPoints && playerPoints > 0){
        finalResult = 'It\'s a Draw!';
    } else if (gameRound === 5 && playerPoints > computerPoints && playerPoints > 0){
        finalResult = 'Congratulations! You won with ' + playerPoints + ' points!';
    } else if(gameRound === 5){
        finalResult = 'You lost! Better Luck Next Time';
    }
    return finalResult;
}