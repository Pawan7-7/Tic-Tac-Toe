console.log("Is it even working?");
let music = new Audio("music.mp3");
let turn = new Audio("ting.mp3");
let gameover = new Audio("gameover.mp3");
let turn = "X";
//Function to change turn here
const changeTurn = () => {
  return turn === "X" ? "0" : "X";
};
//Function to check for a win
const checkWin = () => {};
