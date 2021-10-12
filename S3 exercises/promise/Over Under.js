'use strict';

window.onload = function () {
    let randomNumber = Math.floor(Math.random() * 21);

    document.getElementById('form').addEventListener('submit', e => {
        e.preventDefault();
        compareNumber(document.getElementById('number').value);

    })

    function compareNumber(inputNumber) {
        if (inputNumber > randomNumber) {
            console.log('The mystery number is lower. Guess again!');
        } else if (inputNumber < randomNumber) {
            console.log('The mystery number is higher. Guess again!');
        } else if (inputNumber == randomNumber) {
            console.log('You have guessed the mystery number!');
        }

    }



}