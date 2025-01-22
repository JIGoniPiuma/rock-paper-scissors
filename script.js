let max = 3;
let min = 1;

let stringComputer = "";

function getComputerChoice() {
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
    
console.log(stringComputer);

function getUserChoice() {
  let inputUser;
  let stringUser;
  do {
    inputUser = prompt("Piedra, Papel o tijera?");
  } while (!validateString(inputUser));
  stringUser =
    inputUser.charAt(0).toUpperCase() + inputUser.slice(1).toLocaleLowerCase();

  return stringUser;
}

let userChoice = getUserChoice();
let computerChoice = getComputerChoice();
console.log(`Elección del usuario:`, userChoice);
console.log(`Elección del la PC:`, computerChoice);

determineWinner(userChoice, computerChoice);

function validateString(string) {
  if (
    string.toUpperCase() === "PIEDRA" ||
    string.toUpperCase() === "PAPEL" ||
    string.toUpperCase() === "TIJERA"
  )
    return true;
  else {
    alert("Entrada inválida. Por favor, elige Piedra, Papel o Tijera.");
    return false;
  }
}

function determineWinner(strUser, strComputer) {
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

  console.log(resultado);
  return resultado;
}
