makeGameBoard();

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




