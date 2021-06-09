// scoreboard//
  let foodEaten = 0;
  let distanceTravelled = 0 
  
 /// Game build///
const gameBox = document.getElementById ("gameBox");

const gameBoard = () => {

  for (let i = 1; i <= 1600; ++i) {
    gameContainer.innerHTML = `${gameContainer.innerHTML} <div class="gameBoard" id="pixel"${i}"></div>`;
  }
};

const gameBoard = document.getElementsByClassName("gameBoard");

