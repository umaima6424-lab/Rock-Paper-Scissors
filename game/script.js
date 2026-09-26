const choices = ["rock", "paper", "scissors"];

// Score tracking variables
let playerScore = 0;
let computerScore = 0;

function computerChoice() {
  const randomIndex = Math.floor(Math.random() * choices.length);
  return choices[randomIndex];
}

const computerDisplay = document.getElementById("computer-choice");
const result = document.getElementById("result");

// Score display elements (make sure your HTML has elements with these IDs)
const playerScoreDisplay = document.getElementById("player-score");
const computerScoreDisplay = document.getElementById("computer-score");

const buttons = document.querySelectorAll("button");

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    const player = button.dataset.choice;
    const computer = computerChoice();

    document.getElementById("player-choice").textContent = player;
    computerDisplay.textContent = computer;

    if (player === computer) {
      result.textContent = "It's a draw!";
    } else if (
      (player === "rock" && computer === "scissors") ||
      (player === "paper" && computer === "rock") ||
      (player === "scissors" && computer === "paper")
    ) {
      result.textContent = "You Win!";
      playerScore++; // Increment player score
      playerScoreDisplay.textContent = playerScore; // Update DOM
    } else {
      result.textContent = "Computer Wins!";
      computerScore++; // Increment computer score
      computerScoreDisplay.textContent = computerScore; // Update DOM
    }
  });
});