const readline = require('node:readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let secretNumber;

function randomInRange(min, max) {
  return Math.round(Math.random() * (max - min) + min);
}

function checkGuess(num, secretNumber) {
    if (Number(num) > secretNumber) {
      console.log("Too High.");
      return false;
    }

    else if (Number(num) < secretNumber) {
      console.log("Too Low.");
      return false;
    }

    else if (Number(num) === secretNumber) {
      console.log("Correct!");
      return true;
    }
}

function askGuess(secretNumber) {
  rl.question("Enter a Guess: ", (answer) => {
   if (!checkGuess(answer, secretNumber)) askGuess(secretNumber);
   else rl.close();
});
}

function askRange() {
  rl.question("Enter a max number: ", (answer1) => {

    rl.question("Enter a min number: ", (answer2) => {
    console.log(`I'm thinking of a number between ${answer2} and ${answer1}...`);
    secretNumber = randomInRange(Number(answer2), Number(answer1));
    askGuess(secretNumber);
    })

  })
}

askRange();
