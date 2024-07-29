function getComputerChoice() {
    let randomNumber = Math.random()
    if (randomNumber < 0.34) return "rock"
    if (randomNumber < 0.67) return "paper"
    if (randomNumber < 1) return "scissors"
}

function getHumanChoice() {
    while (true) {
        let userInput = prompt("Choose rock, paper or scissors:")
        if (userInput == null) break
        if (userInput.toLowerCase() == "rock") return "rock"
        if (userInput.toLowerCase() == "paper") return "paper"
        if (userInput.toLowerCase() == "scissors") return "scissors"
        console.log("Try again!")
    }
}

let computerScore = 0
let humanScore = 0

function playRound(humanChoice, computerChoice) {
    if (humanChoice == computerChoice) {
        console.log("It's a draw!")
    }
    else if (humanChoice == "rock") {
        if (computerChoice == "paper") {
            computerScore++
            console.log("You lose! Paper beats Rock")
        }
         else if (computerChoice == "scissors") {
            humanScore++
            console.log("You win! Rock beats Scissors")
        }
    }
    else if (humanChoice == "paper") {
        if (computerChoice == "rock") {
            humanScore++
            console.log("You win! Paper beats Rock")
        }
        else if (computerChoice == "scissors") {
            computerScore++
            console.log("You lose! Scissors beats Paper")
        }
    }
    else if (humanChoice == "scissors") {
        if (computerChoice == "rock") {
            computerScore++
            console.log("You lose! Rock beats Scissors")
        }
        else if (computerChoice == "paper") {
            humanScore++
            console.log("You win! Scissors beats Paper")
        }
    }
}