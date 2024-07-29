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

function playRound(humanChoice, computerChoice) {
    if (humanChoice == computerChoice) {
        return "draw"
        // console.log("It's a draw!")
    }
    else if (humanChoice == "rock") {
        if (computerChoice == "paper") {
            return "loss"
            // console.log("You lose! Paper beats Rock")
        }
        else if (computerChoice == "scissors") {
            return "win"
            // console.log("You win! Rock beats Scissors")
        }
    }
    else if (humanChoice == "paper") {
        if (computerChoice == "rock") {
            return "win"
            // console.log("You win! Paper beats Rock")
        }
        else if (computerChoice == "scissors") {
            return "loss"
            // console.log("You lose! Scissors beats Paper")
        }
    }
    else if (humanChoice == "scissors") {
        if (computerChoice == "rock") {
            return "loss"
            // console.log("You lose! Rock beats Scissors")
        }
        else if (computerChoice == "paper") {
            return "win"
            // console.log("You win! Scissors beats Paper")
        }
    }
}

function playGame() {
    let computerScore = 0
    let humanScore = 0
    for (let i = 0; i < 5; i++) {
        let humanSelection = getHumanChoice()
        if (humanSelection == null) break
        let computerSelection = getComputerChoice()
        let game = playRound(humanSelection, computerSelection)
        if (game == "win") humanScore++
        if (game == "loss") computerScore++
    }
    console.log(`Computer ${computerScore}:${humanScore} Human`)
    if (computerScore < humanScore) console.log("You won!")
    else if (computerScore > humanScore) console.log("You lost!")
    else console.log("It's a draw!")
}