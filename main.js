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

function getHumanChoice () {
    return prompt("What would you choose: rock, paper, or scissors?");
}

let humanScore = 0;
let computerScore = 0;

function playRound (humanChoice , computerChoice) {
    humanChoice = humanChoice.toLowerCase();

    if (humanChoice === "rock" && computerChoice === "scissors" || humanChoice === "scissors" && computerChoice === "paper" || humanChoice === "paper" && computerChoice === "rock") {
        console.log(`You win! ${humanChoice} beats ${computerChoice}`);
        humanScore += 1;
    } else if (humanChoice === computerChoice) {
        console.log(`Draw! ${humanChoice} doesn't beat itself`);
    } else {
        console.log(`You lose! ${computerChoice} beats ${humanChoice}`);
        computerScore += 1;
    }
}

const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

playRound(humanSelection , computerSelection);