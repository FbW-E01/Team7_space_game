  // scoreboard//
  let foodEaten = 0;
  let distanceTravelled = 0 
  
 /// Game build///
const gameBox = document.getElementById ("gameBox");

const gameBoard = () => {

  for (let i = 1; i <= 1600; ++i) {
    gameBox.innerHTML = `${gameBox.innerHTML} <div class="gameBoard" id="pixel"${i}"></div>`;
  }
};

let currentFoodPlace = 0; // Initially set to 0
const createFood = () => {
  // Remove previous food;
  gameBox[currentFoodPlace].classList.remove("food"); //read-only property that returns a live DOMTokenList collection of the class attributes of the element, can then be used to manipulate the class list ---> in this case to remove a "food""

  // Create new food
  currentFoodPlace = Math.random();
  currentFoodPlace = Math.floor(currentFoodPlace * 1600);
  gameBox[currentFoodPlace].classList.add("food"); //--> in this case to add "food"
};



/*const gameBoard = document.getElementsByClassName("gameBoard");*/

