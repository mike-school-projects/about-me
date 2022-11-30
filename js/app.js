'use strict';

// Global variables
let numCorrect = 0;
let i = 0;
let j = 0;

// Basic info
let userName = prompt('What is your name?');
alert(`Welcome to my site ${userName}.`);

// Guess 5 basic facts game: START OF SECTION *************
// Guess 5 basic facts game: Variables
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


// Guess 5 basic facts game: Function calls
alert('Please answer the following 5 questions with yes/no or y/n');
ask(questionOne, questionOneGuess, questionOneAnswer);
ask(questionTwo, questionTwoGuess, questionTwoAnswer);
ask(questionThree, questionThreeGuess, questionThreeAnswer);
ask(questionFour, questionFourGuess, questionFourAnswer);
ask(questionFive, questionFiveGuess, questionFiveAnswer);

// Guess 5 basic facts game: END OF SECTION ****************

// Guessing Number Game: START OF SECTION ##################
// Guessing Number Game: Variables
let guessingGameAnswer = 7;
let guessingGameGuess = 0;
let guessingGameNumGuesses = 1;

// Guessing Number Game: Initial user input
alert('This is a number guessing game!  Guess a number between 1-10.  You have 4 chances to win!');

for (guessingGameNumGuesses = 0; guessingGameNumGuesses < 4; guessingGameNumGuesses++) {
  guessingGameGuess = prompt('What number am I thinking of?');
  guessingGameGuess = parseInt(guessingGameGuess);

  if (guessingGameGuess === guessingGameAnswer) {
    alert(`Great!  ${guessingGameGuess} is correct!  You got it in ${guessingGameNumGuesses+1} guesses!`);
    guessingGameNumGuesses = 10;
    numCorrect++;
  } else if (guessingGameGuess > guessingGameAnswer) {
    alert('Too high.  Try again');
  } else if (guessingGameGuess < guessingGameAnswer) {
    alert('Too low.  Try again');
  }

  if ((guessingGameGuess !== guessingGameAnswer) && guessingGameNumGuesses === 3){
    alert(`Sorry, you ran out of chances.  The number I was thinking of is ${guessingGameAnswer}`);
  }

}
// Guessing Number Game: END OF SECTION ##################


// Guessing Movie Game: START OF SECTION ##################
// Guessing Movie Game: Local variables

let movieList = [
//  Answer      If correctly guessed
  ['Star Wars', false],
  ['Lord of the Rings', false],
  ['The Matrix', false],
];

let movieGuess = [];
let movieNumCorrect=0;

// Guessing Movie Game: initial prompt
alert('Guess my top 3 favorite movie series.  You have 6 chances');

// First loop: 6 guesses
for (i = 0; i < 6; i++) {
  movieGuess[i] = prompt(`Guess #${i + 1}`);

  // Second loop: compare against all 3 answers
  for (j = 0; j < 3; j++) {
    if (movieGuess[i] === movieList[j][0] && movieList[j][1] !== true) {
      alert('Correct!');
      movieNumCorrect++;
      movieList[j][1] = true;
      j = 3;
    }
  }

  if (movieNumCorrect === 3){
    i=6;
  }

}

alert(`My favorite movie series are ${movieList[0][0]}, ${movieList[1][0]}, and ${movieList[2][0]}`);

numCorrect += movieNumCorrect;

// Guessing Movie Game: END OF SECTION ##################


// Summary *********************************
if (numCorrect >= 5){
  alert(`${userName} - you got ${numCorrect} out of 9.  We must be best friends`);
} else if (numCorrect > 2){
  alert(`${userName} - you got ${numCorrect} out of 9.  You did okay.  Let's have some lunch and get to know each other better`);
} else {
  alert(`${userName} - you got ${numCorrect} out of 9.  Who are you again?`);
}




// Functions ********************************
// Guess 5 basic facts function
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
