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
    return prompt("What would you choose: rock, paper, or scissors?")
}