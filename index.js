
let playerSelection =''
let computerSelection=''
let playerScore = 0
let computerScore = 0
function playRound(getComputerChoice,playerSelection) {
    function getComputerChoice() {
        let choices = ['rock', 'paper', 'scissors']
        computerSelection =  choices[Math.floor(Math.random()*choices.length)]
        return choices[Math.floor(Math.random()*choices.length)]
        
    }

    playerSelection =prompt('Choose your weapon')
    getComputerChoice()
    if (computerSelection == 'paper' && playerSelection == 'rock') {
        computerScore++
        
        return  'You Lose! paper beats rock'
        
    } else if (computerSelection == 'rock' && playerSelection == 'scissors') {
        computerScore++
        
        return  'You Lose! rock beats scissors'
    }
    else if (computerSelection == 'scissors' && playerSelection == 'paper') {
        computerScore++
        
        return  'You Lose! scissors beat paper'
    }
    else if (computerSelection == 'rock' && playerSelection == 'rock') {
        return  'tie'
    }
    else if (computerSelection == 'paper' && playerSelection == 'paper') {
        return  'tie'
    }
    else if (computerSelection == 'scissors' && playerSelection == 'scissors') {
        return  'tie'
    }
    else if (computerSelection == 'scissors' && playerSelection == 'rock') {
        playerScore++

        return  'You Win! rock beats scissors'
    }
    else if (computerSelection == 'paper' && playerSelection == 'scissors') {
        playerScore++
        
        return  'You Win! scissors beat paper'
    }
    else if (computerSelection == 'rock' && playerSelection == 'paper') {
        playerScore++
        console.log('it works');
        return  'You Win! paper beats rock'
    }
    else {
        return 'choose rock, paper or scissors'
        game()
    }

}

function game() {
    playerScore = 0
    computerScore = 0
    for (let i = 0; i < 5; i++) {
        console.log(playRound());
        console.log(`Your score: ${playerScore}----Computer score: ${computerScore}`);
    }
    if (playerScore > computerScore) {
        console.log('You win');
    }
    else if (playerScore < computerScore) {
        console.log('You lose');
    } 
    else {
        console.log(`It's a tie`);
    }
}
