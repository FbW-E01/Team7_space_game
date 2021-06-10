// Create game board pixels:

const gameBoardCount = 40;
const squareGameBoardCount = Math.pow(gameBoardCount, 2);

// scoreboard//
  let foodEaten = 0;
  let distanceTravelled = 0 
  
 /// Game build///
const gameBox = document.getElementById ("gameBox");

const makeGameBoard = () => {

  for (let i = 1; i <= squareGameBoardCount; ++i)  {
    gameBox.innerHTML = `${gameBox.innerHTML} <div class="gameBoard" id="pixel${i}"></div>`;
  }
};

// This variable always holds the updated array of game pixels created by makeGameBoard() :
const gameBoard = document.getElementsByClassName("gameBoard");

//FOOD

let currentFoodPlace = 0; // Initially set to 0
const createFood = () => {
  // Remove previous food;
  gameBoard[currentFoodPlace].classList.remove("food"); //read-only property that returns a live DOMTokenList collection of the class attributes of the element, can then be used to manipulate the class list ---> in this case to remove a "food""

  // Create new food
  currentFoodPlace = Math.random();
  currentFoodPlace = Math.floor(
    currentFoodPlace * squareGameBoardCount
  );
  gameBoard[currentFoodPlace].classList.add("food"); //--> in this case to add "food"
};

//OBSTACLE BLACKHOLE

let blackholePlaceNow = 0; // Initially set to 0
const createblackhole = () => {
  // Remove previous food;
  gameBoard[blackholePlaceNow].classList.remove("blackhole"); //read-only property that returns a live DOMTokenList collection of the class attributes of the element, can then be used to manipulate the class list ---> in this case to remove a "food""

  // Create new food
  blackholePlaceNow = Math.random();
  blackholePlaceNow = Math.floor(
  blackholePlaceNow * squareGameBoardCount
  );
  gameBoard[blackholePlaceNow].classList.add("blackhole"); //--> in this case to add "food"
};







