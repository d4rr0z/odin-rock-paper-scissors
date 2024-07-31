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
        // alert("It's a draw!")
    }
    else if (humanChoice == "rock") {
        if (computerChoice == "paper") {
            return "loss"
            // console.log("You lose! Paper beats Rock")
            // alert("You lose! Paper beats Rock")
        }
        else if (computerChoice == "scissors") {
            return "win"
            // console.log("You win! Rock beats Scissors")
            // alert("You win! Rock beats Scissors")
        }
    }
    else if (humanChoice == "paper") {
        if (computerChoice == "rock") {
            return "win"
            // console.log("You win! Paper beats Rock")
            // alert("You win! Paper beats Rock")
        }
        else if (computerChoice == "scissors") {
            return "loss"
            // console.log("You lose! Scissors beats Paper")
            // alert("You lose! Scissors beats Paper")
        }
    }
    else if (humanChoice == "scissors") {
        if (computerChoice == "rock") {
            return "loss"
            // console.log("You lose! Rock beats Scissors")
            // alert("You lose! Rock beats Scissors")
        }
        else if (computerChoice == "paper") {
            return "win"
            // console.log("You win! Scissors beats Paper")
            // alert("You win! Scissors beats Paper")
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

let computerScore = 0;
let humanScore = 0;

function resetPoints() {
    computerScore = 0;
    humanScore = 0;
}

function isItOver() {
    if (humanScore == 5) {
        resetPoints();
        return true;
    }
    else if (computerScore == 5) {
        resetPoints();
        return true;
    }
    return false;
}

function uiRound(choice) {
    let game = playRound(choice, getComputerChoice());
    if (game == "win") humanScore++;
    else if (game == "loss") computerScore++;
    displayResults();
    if (humanScore == 5) {
        const choices = document.querySelector("#choices");
        choices.style.display = "none";
        const startBtn = document.querySelector("#start");
        startBtn.style.display = "inline";
        const div = document.querySelector("#results");
        div.textContent = "You won!";
        resetPoints();
    }
    else if (computerScore == 5) {
        const choices = document.querySelector("#choices");
        choices.style.display = "none";
        const startBtn = document.querySelector("#start");
        startBtn.style.display = "inline";
        const div = document.querySelector("#results");
        div.textContent = "You lost!";
        resetPoints();
    }
}

function displayResults() {
    const div = document.querySelector("#results");
    div.textContent = `Computer ${computerScore}:${humanScore} Player`;
}

const startBtn = document.querySelector("#start");
startBtn.addEventListener("click", () => {
    startBtn.style.display = "none";
    startBtn.textContent = "Play again";
    const choices = document.querySelector("#choices");
    choices.style.display = "inline";
    displayResults();
})

const rBtn = document.querySelector("#rockButton");
rBtn.addEventListener("click", () => {
    if (!isItOver()) uiRound("rock");
});

const pBtn = document.querySelector("#paperButton");
pBtn.addEventListener("click", () => {
    if (!isItOver()) uiRound("paper");
});

const sBtn = document.querySelector("#scissorsButton");
sBtn.addEventListener("click", () => {
    if (!isItOver()) uiRound("scissors");
});