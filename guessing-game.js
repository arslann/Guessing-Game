const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});


let secretNumber = randomInRange(1, 100);


function askGuess() {
    rl.question("Enter a guess: ", (answer) => {

        let isCorrect = checkGuess(Number(answer));

        if (!isCorrect) {
            askGuess();
        } else {
            console.log("You win!")
            rl.close();
        }
    })
}

function checkGuess(num) {
    if (num > secretNumber) {
        console.log("Too high.")
        return false;
    } else if (num < secretNumber) {
        console.log("Too low")
        return false;
    } else {
        console.log("Correct!")
        return true;
    }
}

function randomInRange(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);

    return Math.floor(Math.random() * (max - min + 1) + min);
}

function askRange() {
    let max;
    let min;

    const maxNumber = (answer) => {
        max = Number(answer);
        console.log("Max number is " + answer);
        rl.question("Enter a min number: ", minNumber)

    }

    const minNumber = (answer) => {
        min = Number(answer);
        console.log("Min number is " + answer);
        secretNumber = randomInRange(min, max);
        askGuess();
    }

    rl.question("Enter a max number: ", maxNumber);


}
askRange();