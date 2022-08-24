console.log("Is it even working?");
let music = new Audio("music.mp3");
let audioturn = new Audio("ting.mp3");
let gameover = new Audio("gameover.mp3");
let turn = "X";
//Function to change turn here
const changeTurn = () => {
  return turn === "X" ? "0" : "X";
};
//Function to check for a win
const checkWin = () => {};

//Logic for game

let boxes = document.getElementsByClassName("box");
// console.log(Array.from("Pawan"));
Array.from(boxes).forEach((element) => {
  let boxtext = element.querySelector(".boxtext");
  element.addEventListener("click", (e) => {
    if (boxtext.innerText === "") {
      boxtext.innerText = turn;
      changeTurn();
      audioturn.play();
      checkWin();
      document.getElementsByClassName("info")[0].innerText = "Turn for " + turn;
    }
  });
});
