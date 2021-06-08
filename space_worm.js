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
            const  isSnakeHeadAtLastGameBoardPixelTowardsLeft  = currentSnakeHeadPosition  %  40  ==  39  ||  currentSnakeHeadPosition  <  0;
            if (isSnakeHeadAtLastGameBoardPixelTowardsLeft) {
                currentSnakeHeadPosition  =  currentSnakeHeadPosition  +  40;
            }
            break;

        case  UP_DIR:
            currentSnakeHeadPosition  =  currentSnakeHeadPosition  -  40;
            const  isSnakeHeadAtLastGameBoardPixelTowardsUp  = currentSnakeHeadPosition  <  0;
            if (isSnakeHeadAtLastGameBoardPixelTowardsUp) {
                currentSnakeHeadPosition  =  currentSnakeHeadPosition  +  1600;
            }
            break;

        case  RIGHT_DIR:
            ++currentSnakeHeadPosition;
            const  isSnakeHeadAtLastGameBoardPixelTowardsRight  = currentSnakeHeadPosition  %  40  ==  0;
            if (isSnakeHeadAtLastGameBoardPixelTowardsRight) {
                currentSnakeHeadPosition  =  currentSnakeHeadPosition  -  40;
            }
            break;

        case  DOWN_DIR:
            currentSnakeHeadPosition  =  currentSnakeHeadPosition  +  40;
            const  isSnakeHeadAtLastGameBoardPixelTowardsDown  = currentSnakeHeadPosition  >  1599;
            if (isSnakeHeadAtLastGameBoardPixelTowardsDown) {
                currentSnakeHeadPosition  =  currentSnakeHeadPosition  -  1600;
            }
            break;

        default:
            break;
    }
    let  nextSnakeHeadPixel  = gameBoardPixels[currentSnakeHeadPosition];

    // Kill snake if it bites itself:
    if (nextSnakeHeadPixel.classList.contains("snakeBodyPixel")) {
        // Stop moving the snake
        clearInterval(moveSnakeInterval);
        if (!alert(`You have ate ${totalFoodAte} food by travelling ${totalDistanceTravelled} blocks.`))
        window.location.reload();
    }

    // If not killed add the snake body:
    nextSnakeHeadPixel.classList.add("snakeBodyPixel");

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