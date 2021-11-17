const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});


let secretNumber = 18;


function askGuess() {
    rl.question("Enter a guess: ", (answer) => {
        checkGuess(Number(answer));
        rl.close();
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
askGuess();