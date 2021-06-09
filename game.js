const Space_Worm = 40;
const SQUARE_Space_Worm = Math.pow(Space_Worm, 2);

let foodEaten = 0;
let distanceTravelled = 0; 

const gameBox = document.getElementById("gameBox");

const gameBoard = () => {
  for (let i = 1; i <= 1600; ++i) {
    gameContainer.innerHTML = `${gameContainer.innerHTML} <div class="gameBoard" id="pixel"${i}"></div>`;
  }
};

const gameBoard = document.getElementsByClassName("gameBoard");

//Food///


// WORM//


gameBoard();

createFood();


let wormInterval = setInterval(moveWorm, 80);

addEventListener("press keydown", e => changeDirection(e.keycode));

// Control function //

const leftButton = document.getElementById("leftButton");
const rightButton = document.getElementById("rightButton");
const upButton = document.getElementById("upButton");
const downButton = document.getElementById("downButton");

leftButton.onclick = () => changeDirection(left_direction);
rightButton.onclick = () => changeDirection(right_direction);
upButton.onclick = () => changeDirection(up_direction);
downButton.onclick = () => changeDirection(down_direction);

/// CALL THE FOLLOWING FUNCTIONS TO RUN THE GAME:

// Create game board pixels:




