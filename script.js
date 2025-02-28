let humanScore = 0;
let computerScore = 0;

function getComputerChoice() {
    const choices = ["rock", "paper", "scissors"];
    return choices[Math.floor(Math.random() * 3)];
}

function playRound(humanChoice) {
    if (humanScore >= 5 || computerScore >= 5) return;

    const computerChoice = getComputerChoice();
    let result = "";

    if (humanChoice === computerChoice) {
        result = "It's a tie!";
    } else if (
        (humanChoice === "rock" && computerChoice === "scissors") ||
        (humanChoice === "paper" && computerChoice === "rock") ||
        (humanChoice === "scissors" && computerChoice === "paper")
    ) {
        result = `You win! ${humanChoice} beats ${computerChoice}`;
        humanScore++;
    } else {
        result = `You lose! ${computerChoice} beats ${humanChoice}`;
        computerScore++;
    }

    document.getElementById("round-result").textContent = result;
    document.getElementById("score").textContent = `Score: Player ${humanScore} - ${computerScore} Computer`;

    if (humanScore === 5) {
        document.getElementById("winner").textContent = "🎉 You won the game!";
    } else if (computerScore === 5) {
        document.getElementById("winner").textContent = "😢 Computer won the game!";
    }
}

// Add event listeners to buttons
document.getElementById("rock").addEventListener("click", () => playRound("rock"));
document.getElementById("paper").addEventListener("click", () => playRound("paper"));
document.getElementById("scissors").addEventListener("click", () => playRound("scissors"));
