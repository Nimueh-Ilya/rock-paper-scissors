
let playerSelection =''
function playRound(getComputerChoice,playerSelection) {
    function getComputerChoice() {
        let choices = ['rock', 'paper', 'scissors']
        console.log(choices[Math.floor(Math.random()*choices.length)]+ ':computer choice');
        let computerSelection =  choices[Math.floor(Math.random()*choices.length)]
        return choices[Math.floor(Math.random()*choices.length)]
        
    }
let playerScore = 0
let computerScore = 0
// playerSelection =prompt('Choose your weapon')
// console.log(playerSelection + ':player choice');
// getComputerChoice()
playerSelection = 'paper'
computerSelection = 'rock'
if (getComputerChoice == 'paper' && playerSelection == 'rock') {
        computerScore++
        
        return  'You Lose! paper beats rock'
        
    } else if (getComputerChoice == 'rock' && playerSelection == 'scissors') {
        computerScore++
        
        return  'You Lose! rock beats scissors'
    }
    else if (getComputerChoice == 'scissors' && playerSelection == 'paper') {
        computerScore++
        
        return  'You Lose! scissors beat paper'
    }
    else if (getComputerChoice == 'rock' && playerSelection == 'rock') {
        return  'tie'
    }
    else if (getComputerChoice == 'paper' && playerSelection == 'paper') {
        return  'tie'
    }
    else if (getComputerChoice == 'scissors' && playerSelection == 'scissors') {
        return  'tie'
    }
    else if (getComputerChoice == 'scissors' && playerSelection == 'rock') {
        playerScore++

        return  'You Win! rock beats scissors'
    }
    else if (getComputerChoice == 'paper' && playerSelection == 'scissors') {
        playerScore++
        
        return  'You Win! scissors beat paper'
    }
    else if (computerSelection == 'rock' && playerSelection == 'paper') {
        playerScore++
        console.log('it works');
        return  'You Win! paper beats rock'
    }
    // else {
    //     alert('choose rock, paper or scissors')
    //     return
    // }

}
playRound()

// function game() {
//     for (let i = 0; i < 5; i++) {
//         console.log(playRound());
//     }
//     if (playerScore > computerScore) {
//         console.log('You win');
//     }
//     else {
//         console.log('You lose');
//     }
// }
// game()