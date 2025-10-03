let randomNumber = parseInt(Math.random() * 100 + 1);
const submit = document.querySelector('#subt');
const unserInput = document.querySelector('#guessField');
const guessSlot = document.querySelector('.guesses');
const remaining = document.querySelector('.lastResult');
const lowOrHi = document.querySelector('.lowOrHi');
const startOver = document.querySelector('.resultParas');

const p = document.createElement('p'); //inserting values
let prevGuess = [];
let numGuess = 1;
let playGame = true;
if (playGame) {
  submit.addEventListener('click', function (e) {
    e.preventDefault();
    const guess = parseInt(unserInput.value);
    validateGuess(guess);
  });
}

function validateGuess(guess) {
  //checks if the guessed value is b/w 1-100 or nan
  if (isNaN(guess)) {
    alert('please enter a valid number.');
  } else if (guess < 1) {
    alert('please enter a number more than 1.');
  } else if (guess > 100) {
    alert('please enter a number less than 100.');
  } else {
    prevGuess.push(guess);
    if (numGuess === 11) {
      displayGuess(guess);
      displayMessage(`game over. random number was ${randomNumber}`);
      endGame();
    } else {
      displayGuess(guess);
      checkGuess(guess);
    }
  }
}

function checkGuess(guess) {
  //if guess == random number
  if (guess === randomNumber) {
    displayMessage(`you guessed it right.`);
    endGame();
  } else if (guess < randomNumber) {
    displayMessage(`number is too low.`);
  } else if (guess > randomNumber) {
    displayMessage(`number is too high`);
  }
}
function displayGuess(guess) {
  //displayes guesses
  unserInput.value = '';
  guessSlot.innerHTML += `${guess} ,  `;
  numGuess++;
  remaining.innerHTML = `${11 - numGuess}`;
}
function displayMessage(message) {
  lowOrHi.innerHTML = `<h2>${message}</h2>`;
}

function endGame() {
  unserInput.value = '';
  unserInput.setAttribute('disabled', '');
  p.classList.add('button');
  p.innerHTML = `<h2 id="new game">start new game</h2>`;
  startOver.appendChild(p);
  playGame = false;
  newGame();
}

function newGame() {
  const newGamebutton = document.querySelector('#newGame');
  newGamebutton.addEventListener('click', function (e) {
    randomNumber = parseInt(Math.random() * 100 + 1);
    prevGuess = [];
    numGuess = 1;
    guessSlot.innerHTML = '';
    remaining.innerHTML = `${11 - numGuess}`;
    unserInput.removeAttribute('disabled');
    startOver.removeChild(p);
    playGame = true;
  });
}
