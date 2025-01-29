let max = 3;
let min = 1;
let humanScore = 0;
let computerScore = 0;
let stringComputer = "";
let rounds = 5;
let currentRound = 0;
const body = document.querySelector("body");
const scoreHuman = document.createElement("div");
const scoreComputer = document.createElement("div");

playGame();

/// TERMINAR PLAY GAME

function playRound(humanChoice, computerChoice) {
  displayChoices(humanChoice, computerChoice);

  let result = determineWinner(humanChoice, computerChoice);
  displayScore(result);
}

function computerChoice() {
  let randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;

  if (randomNumber === 1) {
    stringComputer = "Tijera";
  } else if (randomNumber === 2) {
    stringComputer = "Papel";
  } else {
    stringComputer = "Piedra";
  }

  return stringComputer;
}

function playGame() {
  const choices = document.querySelectorAll(".choices");

  choices.forEach((choice) => {
    choice.addEventListener("click", () => {
      if (currentRound < rounds) {
        currentRound++;
        playRound(choice.textContent, computerChoice());

        if (currentRound === rounds) {
          declareWinner();
        }
      }
    });
  });
}

function displayChoices(humanChoice, computerChoice) {
  const choicesDisplay = document.createElement("div");
  body.appendChild(choicesDisplay);
  choicesDisplay.textContent = `El usuario ha elegido ${humanChoice} y la PC ha elegido ${computerChoice}`;
}

function determineWinner(strUser, strComputer) {
  const resultsDisplay = document.createElement("div");
  resultsDisplay.style.marginBottom = "20px";
  body.appendChild(resultsDisplay);

  let resultado;

  if (strUser === "Piedra") {
    if (strComputer === "Tijera") {
      resultado = `Ganaste, Piedra vence a Tijera`;
    } else if (strComputer === "Papel") {
      resultado = `Perdiste, Piedra pierde con Papel`;
    } else {
      resultado = `Oh, es un empate, Prueba de nuevo`;
    }
  } else if (strUser === "Papel") {
    if (strComputer === "Piedra") {
      resultado = `Ganaste, Papel vence a Piedra`;
    } else if (strComputer === "Tijera") {
      resultado = `Perdiste, Tijera vence a Papel`;
    } else {
      resultado = `Oh, es un empate, Prueba de nuevo`;
    }
  } else if (strUser === "Tijera") {
    if (strComputer === "Papel") {
      resultado = `Ganaste, Tijera vence a Papel`;
    } else if (strComputer === "Piedra") {
      resultado = `Perdiste, Piedra vence a Tijera`;
    } else {
      resultado = `Oh, es un empate, Prueba de nuevo`;
    }
  }

  resultsDisplay.textContent = resultado;
  return resultado;
}

function displayScore(result) {
  const human = document.querySelector(".human");
  const computer = document.querySelector(".computer");

  human.appendChild(scoreHuman);
  computer.appendChild(scoreComputer);

  if (result.includes("Ganaste")) {
    humanScore++;
  } else if (result.includes("Perdiste")) {
    computerScore++;
  }
  scoreHuman.textContent = humanScore;
  scoreComputer.textContent = computerScore;
}

function declareWinner() {
  const resultsDisplay = document.createElement("div");
  body.appendChild(resultsDisplay);

  if (humanScore > computerScore) {
    resultsDisplay.textContent = `¡Ganaste el juego! 🏆 Humano: ${humanScore} - Computadora: ${computerScore}`;
  } else if (computerScore > humanScore) {
    resultsDisplay.textContent = `¡Perdiste el juego! 🤖 Humano: ${humanScore} - Computadora: ${computerScore}`;
  } else {
    resultsDisplay.textContent = `Es un empate 🤝 Humano: ${humanScore} - Computadora: ${computerScore}`;
  }
}
