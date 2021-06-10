/// CALL THE FOLLOWING FUNCTIONS TO RUN THE GAME:
makeGameBoard();

createFood();

createblackhole();

let moveWormInterval = setInterval(moveWorm, 60); 


const checkKey = e => changeDirection(e.keyCode); // to connect keys-keyboard arrows
document.onkeydown = checkKey;

// Control function // buttons work/show on the mobile version

const leftButton = document.getElementById("leftButton");
const rightButton = document.getElementById("rightButton");
const upButton = document.getElementById("upButton");
const downButton = document.getElementById("downButton");

leftButton.onclick = () => changeDirection (left_direction);
rightButton.onclick = () => changeDirection (right_direction);
upButton.onclick = () => changeDirection (up_direction);
downButton.onclick = () => changeDirection (down_direction);


