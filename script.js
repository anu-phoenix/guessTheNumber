'use strict';
// [0,1)
// [1,20] ==> required range
// [1,21)
// step-1: -1 from range ==> [0,20)
// step-2: /20 from range ==> [0,1)
let randomNumber = Math.trunc(Math.random() * 20 + 1);
const message = document.querySelector('.message');
const number = document.querySelector('.number');
const score = document.querySelector('.score');
const highscore = document.querySelector('.highscore');
const again = document.querySelector('.again');
const guess = document.querySelector('.guess');

let max = Number(highscore.textContent);
guess.focus();

const mainfunc = function () {
  const num = Number(guess.value);
  if (!num) {
    alert(`Please enter a number to check first!`);
  } else if (num === randomNumber) {
    message.textContent = `Hurray! You got the correct number!!`;
    number.textContent = randomNumber;
    document.querySelector('body').style.backgroundColor = '#60b347';
    if (max < Number(score.textContent)) {
      highscore.textContent = score.textContent;
      max = Number(highscore.textContent);
    }
  } else if (num > randomNumber) {
    message.textContent = `Guess smaller number!`;
    score.textContent = score.textContent - 1;
    guess.focus();
  } else {
    message.textContent = `Guess larger number!`;
    score.textContent = score.textContent - 1;
    guess.focus();
  }
  guess.value = ``;
  if (score.textContent < 1) {
    message.textContent = `You lost! Better luck next time!!`;
    score.textContent = `0`;
  }
};
document.querySelector('.check').addEventListener('click', mainfunc);

document.addEventListener('keydown', function (event) {
  if (event.key === 'Enter') {
    mainfunc();
  }
});

again.addEventListener('click', e => {
  score.textContent = 20;
  message.textContent = `Start guessing...`;
  number.textContent = `?`;
  guess.value = ``;
  document.querySelector('body').style.backgroundColor = '#222';
  randomNumber = Math.trunc(Math.random() * 20 + 1);
  guess.focus();
});
