
// Declare all changing elements
const rock = document.querySelector('.rock');
const paper = document.querySelector('.paper');
const scissors = document.querySelector('.scissors');
const playerChoiceMessage = document.querySelector('.playerChoiceMessage')
const playerChoiceRender = document.querySelector('.imgContainerPlayer')
const computerChoiceRender = document.querySelector('.imgContainerComputer')
const title = document.querySelector('.title')
const gameChat = document.querySelector('.chatText')
const playerScoreMessage = document.querySelector('.playerScore')
const computerScoreMessage = document.querySelector('.computerScore')


function game() {

// Reset scores and choices
let playerChoice = ''
let computerChoice = ''
let playerScore = 0
let computerScore = 0
playerChoiceRender.innerHTML = ''
computerChoiceRender.innerHTML = ''
    // Randomaly generate computer choice function
function getComputerChoice() {
    let choices = ['rock', 'paper', 'scissors']
    computerChoice = choices[Math.floor(Math.random()*choices.length)]
    if (computerChoice === 'rock') {
        computerChoiceRender.innerHTML = '<img src="assets/rock.png" frameborder="0"></img>'
    }
    else if (computerChoice === 'paper') {
        computerChoiceRender.innerHTML = '<img src="assets/paper.png" frameborder="0"></img>'

    }
    else if (computerChoice === 'scissors') {
        computerChoiceRender.innerHTML = '<img src="assets/scissors.png" frameborder="0"></img>'

    }
}
function playRound() {

    if (computerChoice == 'paper' && playerChoice == 'rock') {
        computerScore++
    } 
    else if (computerChoice == 'rock' && playerChoice == 'scissors') {
        computerScore++
    }
    else if (computerChoice == 'scissors' && playerChoice == 'paper') {
        computerScore++
    }
    
    else if (computerChoice == 'rock' && playerChoice == 'rock') {
    }
    else if (computerChoice == 'paper' && playerChoice == 'paper') {
    }
    else if (computerChoice == 'scissors' && playerChoice == 'scissors') {
    }
    
    else if (computerChoice == 'scissors' && playerChoice == 'rock') {
        playerScore++
    }
    else if (computerChoice == 'paper' && playerChoice == 'scissors') {
        playerScore++
    }
    else if (computerChoice == 'rock' && playerChoice == 'paper') {
        playerScore++
    }

}
// Function to run the game when player makes choice

function updateScore() {
    playerScoreMessage.innerText = `Player Score : ${playerScore}` 
    computerScoreMessage.innerText = `Computer Score : ${computerScore}` 
    gameChat.innerText = ''
    if (playerScore === 5 ) {
        gameChat.innerText = 'You win'
        playerScore = 0
        computerScore = 0
    }
    else if (computerScore === 5 ) {
        gameChat.innerText = 'You lose'
        playerScore = 0
        computerScore = 0
    }
}
function choice(e) {
    getComputerChoice()
    playerChoiceMessage.innerText = `You chose ${e.target.className}`
    playerChoiceRender.innerHTML = `<img src="assets/${e.target.className}.png" frameborder="0"></img>`
    playerChoice = `${e.target.className}`
    playRound()
    updateScore()
}
// Configure event listeners and what they modify
rock.addEventListener('click',choice)
paper.addEventListener('click',choice)
scissors.addEventListener('click',choice)
}
game()