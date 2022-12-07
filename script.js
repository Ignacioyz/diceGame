"use strict";
let newGame = document.querySelector(".btn--new");
let diceRollBtn = document.querySelector(".btn--roll");
let hold = document.querySelector(".btn--hold");
let diceElement = document.querySelector(".dice");

// player sections
const player1 = document.querySelector(".player--0");
const player2 = document.querySelector(".player--1");
// score elements
let score0Element = document.getElementById("score--0");
let score1Element = document.getElementById("score--1");

let current0Element = document.getElementById("current--0");
let current1Element = document.getElementById("current--1");

// declaring globals so they aren't scoped in beginGame, are now accecible in every function everywhere 
let scores, currentScore, activePlayer, playing

const beginGame = function (){

     scores = [0, 0];
     currentScore = 0;
     activePlayer = 0;
     playing = true;

     score0Element.textContent = 0;
     score1Element.textContent = 0;
     current0Element.textContent = 0;
     current1Element.textContent = 0;

     // dice start game hidden
     diceElement.classList.add("hidden");
     player1.classList.remove('player--winner');
     player2.classList.remove('player--winner');
     player1.classList.add('player--active');
     player2.classList.remove('player--active')

}
beginGame()



// Games start at 0
score0Element.textContent = 0;
score1Element.textContent = 0;

const changePlayers = function () {
  document.getElementById(`current--${activePlayer}`).textContent = 0;
  currentScore = 0;
  activePlayer = activePlayer === 0 ? 1 : 0;
  player1.classList.toggle("player--active");
  player2.classList.toggle("player--active");
};

diceRollBtn.addEventListener("click", () => {
  if (playing) {
    //genetates random number from 1-6
    const dice = Math.floor(Math.random() * 6 + 1);
    //removes hidden class from dice
    diceElement.classList.remove("hidden");
    //interpolates the dice png with our random number
    diceElement.src = `dice-${dice}.png`;

    if (dice !== 1) {
      // add dice to score
      currentScore += dice;
      document.getElementById(`current--${activePlayer}`).textContent =
        currentScore;
    } else {
      //    switch to other player
      changePlayers();
    }
  }
});

hold.addEventListener("click", () => {
  if (playing) {
    scores[activePlayer] += currentScore;

    document.getElementById(`score--${activePlayer}`).textContent =
      scores[activePlayer];

    if (scores[activePlayer] >= 100) {
      playing = false;
      diceElement.classList.add("hidden");
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.add("player--winner");
      //   hold.removeEventListener
      //   diceRollBtn.removeEventListener
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.remove("player--active");
    } else {
      changePlayers();
    }
  }
});

newGame.addEventListener("click", beginGame)



