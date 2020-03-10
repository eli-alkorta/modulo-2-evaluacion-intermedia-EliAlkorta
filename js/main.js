'use strict';

const chosenNumber = document.querySelector('#chosen-number');
const button = document.querySelector('.button');
const tip = document.querySelector('#tip');
const attempts = document.querySelector('#attempts');

let numberOfAttempts = 0;


function getRandomNumber(max) {

    return Math.round(Math.random() * max)
}
const randomNumber = getRandomNumber(100);

console.log(randomNumber);

function compareNumbers() {

    if (chosenNumber.value > 100 || chosenNumber.value < 0) {

        tip.value = "No está entre 1 y 100"

    } else if  (chosenNumber.value > randomNumber) {

        tip.value = 'Demasiado alto'

    } else if (chosenNumber.value < randomNumber) {

        tip.value = "Demasiado bajo"

    } else if (chosenNumber.value = randomNumber) {

        tip.value = "¡Has ganado campeona!"

    }
    
}

function addAttempts() {

if ('click') {

attempts.value = numberOfAttempts += 1;

}

} 

button.addEventListener('click', compareNumbers);
button.addEventListener('click', addAttempts);





