"use strict";

const chosenNumber = document.querySelector("#chosen-number");
const button = document.querySelector(".button");
const tip = document.querySelector("#tip");
const attempts = document.querySelector("#attempts");

tip.innerHTML= "Pista: Escribe el número y dale a Prueba";
attempts.innerHTML="Número de intentos: 0";

let numberOfAttempts = 0;

function getRandomNumber(max) {
  return Math.ceil(Math.random() * max);
}
const randomNumber = getRandomNumber(100);

console.log(randomNumber);

function buttonHandler() {
  compareNumbers();
  addAttempts();
}

function compareNumbers() {
  if (chosenNumber.value > 100 || chosenNumber.value < 0) {
    tip.innerHTML = "Pista: No está entre 1 y 100";
  } else if (chosenNumber.value > randomNumber) {
    tip.innerHTML = "Pista: Demasiado alto";
  } else if (chosenNumber.value < randomNumber) {
    tip.innerHTML= "Pista: Demasiado bajo";
  } else {
    tip.innerHTML = "Pista: ¡Has ganado campeona!";
  }
}

function addAttempts() {
  if ("click") {
    attempts.innerHTML = `Número de intentos: ${numberOfAttempts += 1}`;
  }
}

button.addEventListener("click", buttonHandler);
