"use strict";
let newGame = document.querySelector(".btn--new");
let diceBtn = document.querySelector(".btn--roll");
let hold = document.querySelector(".btn--hold");
let dice = document.querySelector(".dice");



const diceObj = {
  sides: 6,
  roll: function () {
    let randoNum = Math.floor(Math.random() * 6 + 1);
    return randoNum;
  },
};

const printDiceNum = function (num) {
  if (diceObj.roll() === 1) {
    dice.src = "dice-1.png";
  } else if (diceObj.roll() === 2) {
    dice.src = "dice-2.png";
  } else if (diceObj.roll() === 3) {
    dice.src = "dice-3.png";
  } else if (diceObj.roll() === 4) {
    dice.src = "dice-4.png";
  } else if (diceObj.roll() === 5) {
    dice.src = "dice-5.png";
  } else dice.src = "dice-6.png";
};

diceBtn.addEventListener("click", () => {
  let result = diceObj.roll();
  printDiceNum(result);
});
