"use strict";
let newGame = document.querySelector(".btn--new");
let diceRollBtn = document.querySelector(".btn--roll");
let hold = document.querySelector(".btn--hold");
let diceElement = document.querySelector(".dice");
let currentScore = 0;
let activePlayer = 0;

const scores = [0, 0];

// score elements
const score0Element = document.getElementById("score--0");
const score1Element = document.getElementById("score--1");

const current0Element = document.getElementById("current--0");
const current1Element = document.getElementById("current--1");

// player sections
const player1 = document.querySelector(".player--0");
const player2 = document.querySelector(".player--1");

// Games start at 0
score0Element.textContent = 0;
score1Element.textContent = 0;
// dice start game hidden
diceElement.classList.add("hidden");

diceRollBtn.addEventListener("click", () => {
  //genetates random number from 1-6
  const dice = Math.floor(Math.random() * 6 + 1);
  //removes hidden class from dice
  diceElement.classList.remove("hidden");
  //interpolates the dice png with our random number
  diceElement.src = `dice-${dice}.png`;

  if (dice !== 1) {
    currentScore += dice;
    document.getElementById(`current--${activePlayer}`).textContent =
      currentScore;
  } else {
    document.getElementById(`current--${activePlayer}`).textContent = 0;
    currentScore = 0;
    activePlayer = activePlayer === 0 ? 1 : 0;
    player1.classList.toggle('player--active')
    player2.classList.toggle('player--active')
  }
});
