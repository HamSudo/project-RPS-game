function getComputerChoice () {
    let number = Math.random() * 10
    if (number < 4) {
        return "rock";
    } else if (number < 7) {
        return "paper";
    } else {
        return "scissors";
    }
}

function playRound (humanChoice , computerChoice) {
    
    if (humanChoice === "rock" && computerChoice === "scissors" || humanChoice === "scissors" && computerChoice === "paper" || humanChoice === "paper" && computerChoice === "rock") {
        div.textContent = `You win! ${humanChoice} beats ${computerChoice}`;
        humanScore += 1;
    } else if (humanChoice === computerChoice) {
        div.textContent = `Draw! ${humanChoice} doesn't beat itself`;
    } else {
        div.textContent = `You lose! ${computerChoice} beats ${humanChoice}`;
        computerScore += 1;
    }

    if (computerScore === 5 || humanScore === 5) {
        results.textContent = computerScore === 5 ? 'Computer has won!' : 'You have won!';
        buttons.forEach(button => button.disabled = true);
    } else {
        results.textContent = `Your Score: ${humanScore}    Computer Score: ${computerScore}`;
    }

}

const btnRock = document.createElement("button");
const btnPaper = document.createElement("button");
const btnScissors = document.createElement("button");
const div = document.querySelector("#container");
let humanScore = 0;
let computerScore = 0;

btnRock.textContent = "Rock";
btnPaper.textContent = "Paper";
btnScissors.textContent = "Scissors";

btnRock.addEventListener("click", () => playRound("rock", getComputerChoice()));
btnPaper.addEventListener("click", () => playRound("paper", getComputerChoice()));
btnScissors.addEventListener("click", () => playRound("scissors", getComputerChoice()));

document.body.insertBefore(btnRock, div);
document.body.insertBefore(btnPaper, div);
document.body.insertBefore(btnScissors, div);

const buttons = document.querySelectorAll("button");

let results = document.createElement("div");
results.textContent = '';
document.body.appendChild(results);
