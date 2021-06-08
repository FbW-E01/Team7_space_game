// Direction of space worm

// Direction codes (Keyboard key codes for arrow keys):
const  left_direction =  37;
const  up_direction  =  38;
const  right_direction  =  39;
const  down_direction  =  40;

// Set snake direction initially to right
let  wormCurrentDirection  =  right_direction;

const  changeDirection  =  newDirectionCode  => {
    // Change the direction of the snake
    if (newDirectionCode  ==  wormCurrentDirection) return; // if new direction is same a current, stop
    if (newDirectionCode  ==  left_direction  &&  wormCurrentDirection  != right_direction) {
        wormCurrentDirection  =  newDirectionCode;
    } else  if (newDirectionCode  ==  up_direction  &&  wormCurrentDirection  !=  down_direction) {
        wormCurrentDirection  =  newDirectionCode;
    } else  if (newDirectionCode  ==  right_direction  && wormCurrentDirection  !=  left_direction) {
        wormCurrentDirection  =  newDirectionCode;
    } else  if (newDirectionCode  ==  down_direction  &&  wormCurrentDirection  !=  up_direction) {
        wormCurrentDirection  =  newDirectionCode;
    }
};


// Let the starting position of the space worm be at the middle of game board
let  currentWormHeadPlace  =  799;
let  wormLength  =  1000; // Initial length of the space worm = 1000

// Move space worm continously by calling this function repeatedly :
const  moveWorm  = () => {
    switch (wormCurrentDirection) {
        case  left_direction:
            --currentWormHeadPlace;
            const  isWormHeadAtLastGameBoardTowardsLeft  = currentWormHeadPlace  %  40  ==  39  ||  currentWormHeadPlace  <  0;
            if (isWormHeadAtLastGameBoardTowardsLeft) {
                currentWormHeadPlace  =  currentWormHeadPlace  +  40;
            }
            break;

        case  up_direction:
            currentWormHeadPlace  =  currentWormHeadPlace  -  40;
            const  isSnakeHeadAtLastGameBoardPixelTowardsUp  = currentSnakeHeadPosition  <  0;
            if (isWormHeadAtLastGameBoardTowardsUp) {
                currentWormHeadPlace  =  currentWormHeadPlace  +  1600;
            }
            break;

        case  right_direction :
            ++currentWormHeadPlace;
            const  isWormHeadAtLastGameBoardTowardsRight  = currentWormHeadPlace  %  40  ==  0;
            if (isWormHeadAtLastGameBoardTowardsRight) {
                currentWormHeadPlace  =  currentWormHeadPlace  -  40;
            }
            break;

        case  down_direction:
            currentWormHeadPlace  =  currentWormHeadPlace  +  40;
            const  isWormHeadAtLastGameBoardTowardsDown  = currentWormHeadPlace  >  1599;
            if (isWormHeadAtLastGameBoardTowardsDown) {
                currentWormHeadPlace  =  currentWormHeadPlace  -  1600;
            }
            break;

        default:
            break;
    }
    let  nextWormHeadPixel  = gameBox[currentWormHeadPlace];

    // Kill worm if it bites itself:
    if (nextWormHeadPixel.classList.contains("wormBodyPixel")) {
        // Stop moving the space Worm
        clearInterval(moveWormInterval);
        if (!alert(`You have ate ${totalFoodAte} food by travelling ${totalDistanceTravelled} blocks.`))
        window.location.reload();
    }

    // If not killed add the worm body:
    nextWormHeadPixel.classList.add("wormBodyPixel");

    // This fuction removes the snake body from the end of the snake as it moves.
    // Also note that snakeLength is used as the timeout interval
    setTimeout(() => {
        nextSnakeHeadPixel.classList.remove("snakeBodyPixel");
    }, snakeLength);

    // Update total distance travelled
    totalDistanceTravelled++;
    // Update in UI:
    document.getElementById("blocksTravelled").innerHTML  = totalDistanceTravelled;

    // If snike bites the food:
    if (currentSnakeHeadPosition  ==  currentFoodPostion) {
        // Update total food ate
        totalFoodAte++;
        // Update in UI:
        document.getElementById("pointsEarned").innerHTML  =  totalFoodAte;
        // Increase Snake length:
        snakeLength  =  snakeLength  +  100;
        // Create new food:
        createFood();
    }
};