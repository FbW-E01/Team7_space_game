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








/// CALL THE FOLLOWING FUNCTIONS TO RUN THE GAME:

// Create game board pixels:
GameBoard();

// Create initial food:
createFood();

/* Move snake:
var moveSnakeInterval = setInterval(moveSnake, 80);

// Call change direction function on keyboard key-down event:
addEventListener("keydown", e => changeDirection(e.keyCode));

// ON SCREEN CONTROLLERS:
const leftButton = document.getElementById("leftButton");
const rightButton = document.getElementById("rightButton");
const upButton = document.getElementById("upButton");
const downButton = document.getElementById("downButton");

leftButton.onclick = () => changeDirection(LEFT_DIR);
rightButton.onclick = () => changeDirection(RIGHT_DIR);
upButton.onclick = () => changeDirection(UP_DIR);
downButton.onclick = () => changeDirection(DOWN_DIR);/*/