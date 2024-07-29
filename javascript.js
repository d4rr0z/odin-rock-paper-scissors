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