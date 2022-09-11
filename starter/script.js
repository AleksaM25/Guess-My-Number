'use strict';
// MOJA IGRA

let seacretnNumber = Math.trunc(Math.random() * 20) + 1;
//document.querySelector('.number').textContent = seacretnNumber;

let score = 20;
let highscore = 0;

const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  if (!guess) {
    displayMessage('There is no number');
  } else if (guess === seacretnNumber) {
    document.querySelector('.number').textContent = seacretnNumber;
    displayMessage('Correct number');
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';
    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }
  } else if (guess !== seacretnNumber) {
    if (score > 1) {
      displayMessage(
        guess > seacretnNumber ? 'Number To High' : 'Number To Low'
      );
      score = score - 1;
      document.querySelector('.score').textContent = score;
    } else {
      displayMessage('You Loosee');
      document.querySelector('.score').textContent = 0;
    }
  }
});

document.querySelector('.again').addEventListener('click', function () {
  seacretnNumber = Math.trunc(Math.random() * 20) + 1;
  document.querySelector('.number').textContent = seacretnNumber;
  score = 20;
  document.querySelector('.score').textContent = score;
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
  document.querySelector('.guess').value = '';
  document.querySelector('.number').textContent = '?';
});
