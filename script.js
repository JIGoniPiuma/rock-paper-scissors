let max = 3;
let min = 1;
let humanScore = 0;
let computerScore = 0;
let stringComputer = "";

playGame();

function computerChoice() {
  //esta funcion genera un random entre 1 y 3, asocia el numero que sale Piedra,papel o tijera
  //  y devuelve el stringComputer Piedra, Papel o tijera

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

function humanChoice() {
  // esta funcion permite al usuario ingresar piedra papel o tijera en mayusculas, minusculas o combinado,
  //la estandariza llamando a validate string y devuelve un stringUser con la palabra estandarizada.
  let inputUser;
  let stringUser;
  do {
    inputUser = prompt("Piedra, Papel o tijera?");
  } while (!validateString(inputUser));
  stringUser =
    inputUser.charAt(0).toUpperCase() + inputUser.slice(1).toLocaleLowerCase();

  return stringUser;
}

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

function playGame() {
  for (let round = 1; round <= 5; round++) {
    console.log(`Ronda: ${round}`);
    playRound(humanChoice(), computerChoice());
  }
  console.log(
    `El resultado final es Humano: ${humanScore} Computadora: ${computerScore}`
  );
}
function playRound(humanChoice, computerChoice) {
  // esta funcion llama a las funciones humanChoice y computerChoice. Estas dos ultimas se ejecutan trayendo como resultado los stringsUser y Compute.
  // la funcion playRound imprime las elecciones y llama a determineWinner que entregará como resultado el ganador de la ronda, una vez comparados los strings.
  // determina el ganador.
  console.log(`Elección del usuario:`, humanChoice);
  console.log(`Elección del la Computadora:`, computerChoice);

  let result = determineWinner(humanChoice, computerChoice);

  if (result.includes("Ganaste")) {
    humanScore++;
    console.log(`SCORE: Humano: ${humanScore} Computadora: ${computerScore}`);
  } else if (result.includes("Perdiste")) {
    computerScore++;
    console.log(`SCORE: Humano: ${humanScore} Computadora: ${computerScore}`);
  } else
    console.log(`SCORE: Humano: ${humanScore} Computadora: ${computerScore}`);
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
