// Direction of space worm in the game board

// Direction codes (Keyboard key codes for arrow keys):
const  left_direction =  37;
const  up_direction  =  38;
const  right_direction  =  39;
const  down_direction  =  40;

// Set space worm direction initially to right
let  wormCurrentDirection  =  right_direction;

const  changeDirection  =  newDirectionCode  => {
    // Change the direction of the space worm
    if (newDirectionCode  ==  wormCurrentDirection) return; 
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

// Move space worm continuously by calling this function repeatedly :
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
            const  isWormHeadAtLastGameBoardTowardsUp  = currentWormHeadPlace  <  0;
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

    // This function removes the space worm body from the end of the worm as it moves.
    // Also note that space worm Length is used as the timeout interval
    setTimeout(() => {
        nextWormHeadPixel.classList.remove("wormBodyPixel");
    }, wormLength);

    // Update total distance travelled
    totalDistanceTravelled++;
    // Update in UI:
    document.getElementById("blocksTravelled").innerHTML  = totalDistanceTravelled;

    // If space worm bites the food:
    if (currentWormHeadPlace   ==  currentFoodPlace) {
        // Update total food ate
        totalFoodAte++;
        // Update in UI:
        document.getElementById("pointsEarned").innerHTML  =  totalFoodAte;
        // Increase Space worm length:
        wormLength  =  wormLength  +  100;
        // Create new food:
        createFood();
    }
};