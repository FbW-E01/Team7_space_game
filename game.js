/// CALL THE FOLLOWING FUNCTIONS TO RUN THE GAME:
makeGameBoard();

createFood();

createblackhole();

<<<<<<< HEAD
=======


>>>>>>> 979d537e137dd04cfeaff9d8f0455491fd26acce
let moveWormInterval = setInterval(moveWorm, 60);


const checkKey = e => changeDirection(e.keyCode);
document.onkeydown = checkKey;

// Control function //

const leftButton = document.getElementById("leftButton");
const rightButton = document.getElementById("rightButton");
const upButton = document.getElementById("upButton");
const downButton = document.getElementById("downButton");

leftButton.onclick = () => changeDirection (left_direction);
rightButton.onclick = () => changeDirection (right_direction);
upButton.onclick = () => changeDirection (up_direction);
downButton.onclick = () => changeDirection (down_direction);


