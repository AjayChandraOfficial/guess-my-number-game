"use strict";

const secretNumber = Math.trunc(Math.random() * 20) + 1;
document.querySelector(".number").textContent = secretNumber;
let scoreValue = 20;

document.querySelector(".check").addEventListener("click", function () {
  const guessValue = Number(document.querySelector(".guess").value);

  //No Input Value given by the User
  if (!guessValue) {
    document.querySelector(".message").textContent = "Please write a number...";
  }

  //Input Value not between 0 and 20
  else if (guessValue <= 0 || guessValue > 20) {
    document.querySelector(".message").textContent =
      "Write a number between 1 and 20 :)";
  }

  //Too high
  else if (guessValue > secretNumber && scoreValue > 0) {
    document.querySelector(".message").textContent = "Too high! :O";
    scoreValue--;
    document.querySelector(".score").textContent = scoreValue;
  }

  //To low
  else if (guessValue < secretNumber && scoreValue > 0) {
    document.querySelector(".message").textContent = "Too low :/";
    scoreValue--;
    document.querySelector(".score").textContent = scoreValue;
  }

  //Correct Guess
  else if (guessValue === secretNumber) {
    document.querySelector(".message").textContent = "Guessed!! 🤩";
    document.querySelector("body").style.backgroundColor = "#60b347";
    document.querySelector(".number").style.width = "30rem";
  }

  //Lost
  if (scoreValue == 0) {
    document.querySelector(".message").textContent =
      "You lost :< \nTry Again :))";
    document.querySelector("body").style.backgroundColor = "#b83f53";
  }
});
