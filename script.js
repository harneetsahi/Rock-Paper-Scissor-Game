const totalScore = {
  wins: 0,
  losses: 0,
  ties: 0,
};

function playGame(playerMove) {
  const computerMove = pickComputerMove();

  let result = "";
  if (playerMove === "rock") {
    if (computerMove === "rock") {
      result = "Tie";
    } else if (computerMove === "paper") {
      result = "You lose";
    } else if (computerMove === "scissor") {
      result = "You win";
    }
  } else if (playerMove === "paper") {
    if (computerMove === "rock") {
      result = "You win";
    } else if (computerMove === "paper") {
      result = "Tie";
    } else if (computerMove === "scissor") {
      result = "You lose";
    }
  } else if (playerMove === "scissor") {
    if (computerMove === "rock") {
      result = "You lose";
    } else if (computerMove === "paper") {
      result = "You win";
    } else if (computerMove === "scissor") {
      result = "Tie";
    }
  }

  if (result === "You win") {
    totalScore.wins += 1;
  } else if (result === "You lose") {
    totalScore.losses += 1;
  } else if (result === "Tie") {
    totalScore.ties += 1;
  }

  document.querySelector(".js-result").innerHTML = `${result}`;

  document.querySelector(".js-moves").innerHTML = `
  You <img class="icon" src="./${playerMove}.png" alt=""> <img class="icon"  src="./${computerMove}.png" alt=""> Comp
  `;
  updateScoreEl();
}

function updateScoreEl() {
  document.querySelector(".js-score").innerHTML = `
  Wins: ${totalScore.wins},
  Losses: ${totalScore.losses},
  Ties: ${totalScore.ties}
  `;
}

function pickComputerMove() {
  const randomNum = Math.random();
  let computerMove = "";

  if (randomNum >= 0 && randomNum < 1 / 3) {
    computerMove = "rock";
  } else if (randomNum > 1 / 3 && randomNum < 2 / 3) {
    computerMove = "paper";
  } else {
    computerMove = "scissor";
  }
  return computerMove;
}