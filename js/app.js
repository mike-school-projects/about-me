'use strict';

// GET USERS NAME.  Prompt / alert
// 5 yes/no questions.  Alert if right or wrong
// PROMPT personal message

// Basic info
let userName = prompt('What is your name?');
alert(`Welcome to my site ${userName}.  Please answer the following 5 questions with yes/no or y/n`);

// Setup variables
let questionOne = 'Am I married?';
let questionTwo = 'Do I have kids?';
let questionThree = 'Am I older than 50?';
let questionFour = 'Do I like Star Wars?';
let questionFive = 'Was I born in Washington?';

let questionOneAnswer = 'y';
let questionTwoAnswer = 'n';
let questionThreeAnswer = 'n';
let questionFourAnswer = 'y';
let questionFiveAnswer = 'n';

let questionOneGuess = '0';
let questionTwoGuess = '0';
let questionThreeGuess = '0';
let questionFourGuess = '0';
let questionFiveGuess = '0';

let numCorrect = 0;

// Function Calls
ask(questionOne, questionOneGuess, questionOneAnswer);
ask(questionTwo, questionTwoGuess, questionTwoAnswer);
ask(questionThree, questionThreeGuess, questionThreeAnswer);
ask(questionFour, questionFourGuess, questionFourAnswer);
ask(questionFive, questionFiveGuess, questionFiveAnswer);

// Summary
if (numCorrect >= 4){
  alert(`${userName} - you got ${numCorrect} out of 5.  We must be best friends`);
} else if (numCorrect > 2){
  alert(`${userName} - you got ${numCorrect} out of 5.  Let's have some lunch and get to know you better`);
} else {
  alert(`${userName} - you got ${numCorrect} out of 5.  Who are you again?`);
}


// Functions
function ask (question, guess, answer){
  let i = 0;
  while ((guess !== 'y') && (guess !== 'n') && (guess !== 'yes') && (guess !== 'no')) {
    if (i === 0){
      guess = prompt(question);
    } else if(i < 4) {
      guess = prompt(`Try again - ${question}`);
    } else if(i > 9){
      return;
    } else {
      guess = prompt(`Make sure you use either yes, no, y, n - ${question}`);
    }

    if (guess === null){
      guess = 0;
    }
    i++;
  }

  // Format guess to y or n
  guess = guess[0].toLowerCase();

  // check if answer is correct
  if (guess === answer) {
    alert(`The answer to "${question}" is correct!`);
    // console.log(`The anwer to "${question}" is correct!`);
    numCorrect++;
  } else {
    alert(`The answer to "${question}" is incorrect.`);
    // console.log(`The anwer to "${question}" is incorrect.`);
  }
}
