'use strict';

// Global variables
let userName;
let numCorrect = 0;

// Function Calls
userName = intro();
facts();
number();
movie();
summary();

// Functions ********************************
// Get Basic Info function
function intro(){
  let name = prompt('What is your name?');
  alert(`Welcome to my site ${name}.`);
  return name;
}


// Guess 5 basic facts function
function facts(){
  let guess = 0;
  let i = 0;
  let j = 0;

  const question = [
    ['Am I married?','y'],
    ['Do I have kids?','n'],
    ['Am I older than 50?','n'],
    ['Do I like Star Wars?','y'],
    ['Was I born in Washington?','n']
  ];

  alert('Let us play a game about some basic facts about me.  Please answer the following 5 questions with yes/no or y/n');

  for(i=0; i<5; i++){
    for(j=0; j<3; j++){
      if(j===0){
        guess = prompt(question[i][0]);
        if (guess === null){
          guess = 'a';
        }
        guess = guess.toLowerCase();
      } else if((guess !== 'y') && (guess !== 'n') && (guess !== 'yes') && (guess !== 'no')){
        guess = prompt(`Make sure you use either yes, no, y, n - ${question[i][0]}`);
        if (guess === null){
          guess = 'a';
        }
        guess = guess.toLowerCase();
      }
    }

    // normalize guess to y / n
    if (guess === null){
      guess = 'a';
    }
    guess = guess[0].toLowerCase();

    // Compare guess to answer
    if (guess === question[i][1]) {
      alert(`The answer to "${question[i][0]}" is correct!`);
      numCorrect++;
    } else {
      alert(`The answer to "${question[i][0]}" is incorrect.`);
    }
  }
}

// Guessing Number Game FUNCTION
function number(){
  let guessingGameAnswer = 7;
  let guessingGameGuess = 0;
  let i = 0;

  // Guessing Number Game: Initial user input
  alert('This is a number guessing game!  Guess a number between 1-10.  You have 4 chances to win!');

  for (i = 0; i < 4; i++) {
    guessingGameGuess = prompt('What number am I thinking of?');
    guessingGameGuess = parseInt(guessingGameGuess);

    if (guessingGameGuess === guessingGameAnswer) {
      alert(`Great!  ${guessingGameGuess} is correct!  You got it in ${i+1} guesses!`);
      i = 10;
      numCorrect++;
    } else if (guessingGameGuess > guessingGameAnswer) {
      alert('Too high.  Try again');
    } else if (guessingGameGuess < guessingGameAnswer) {
      alert('Too low.  Try again');
    }

    if ((guessingGameGuess !== guessingGameAnswer) && i === 3){
      alert(`Sorry, you ran out of chances.  The number I was thinking of is ${guessingGameAnswer}`);
    }
  }
}


// Guessing Movie Game FUNCTION
function movie (){
  let movieGuess = [];
  let movieNumCorrect=0;
  let i = 0;
  let j = 0;
  let movieList = [
    //  Answer      If correctly guessed
    ['Star Wars', false],
    ['Lord of the Rings', false],
    ['The Matrix', false],
  ];

  // Guessing Movie Game: initial prompt
  alert('Guess my top 3 favorite movie series.  You have 6 chances');

  // First loop: 6 guesses
  for (i = 0; i < 6; i++) {
    movieGuess[i] = prompt(`Guess #${i + 1}`);
    if (movieGuess[i] === null){
      movieGuess[i] = 'a';
    }
    movieGuess[i] = movieGuess[i].toLowerCase();

    // Second loop: compare against all 3 answers
    for (j = 0; j < 3; j++) {
      if (movieGuess[i] === movieList[j][0].toLowerCase() && movieList[j][1] !== true) {
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
}

// Summary Function
function summary(){
  if (numCorrect >= 5){
    alert(`${userName} - you got ${numCorrect} out of 9.  We must be best friends`);
  } else if (numCorrect > 2){
    alert(`${userName} - you got ${numCorrect} out of 9.  You did okay.  Let's have some lunch and get to know each other better`);
  } else {
    alert(`${userName} - you got ${numCorrect} out of 9.  Who are you again?`);
  }
}
