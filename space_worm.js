// Direction codes (Keyboard key codes for arrow keys: up, down, left, right):
const left_direction = 37;
const up_direction = 38;
const right_direction = 39;
const down_direction = 40;
// Set space worm direction initially to right
let wormDirectionNow = right_direction;

const changeDirection = (newDirection) => {
      // Change the direction of the space worm
      if (newDirection == wormDirectionNow) return;
      if (newDirection == left_direction && wormDirectionNow != right_direction) {
          wormDirectionNow = newDirection;
      } else if (
          newDirection == up_direction && wormDirectionNow != down_direction) {
          wormDirectionNow = newDirection;
      } else if (
          newDirection == right_direction && wormDirectionNow != left_direction) {
          wormDirectionNow = newDirection;
      } else if (
          newDirection == down_direction && wormDirectionNow != up_direction) {
          wormDirectionNow = newDirection;
      }
};

// Let the starting position of the space worm be at the middle of game board
let wormHeadPlaceNow = squareBoardPixelCount / 2;

let wormLength = 300; // Initial length of the space worm = 300

// Move space worm continuously by calling this function repeatedly:
const moveWorm = () => {
       switch (wormDirectionNow) {

            case left_direction:
                --wormHeadPlaceNow;
                const wormHeadLastGameLeftDir =
                    wormHeadPlaceNow % gameBoardPixelCount == gameBoardPixelCount - 1 ||
                    wormHeadPlaceNow < 0;
                if (wormHeadLastGameLeftDir) {
                    wormHeadPlaceNow = wormHeadPlaceNow + gameBoardPixelCount;
                }
                break;

            case up_direction:
                wormHeadPlaceNow = wormHeadPlaceNow - gameBoardPixelCount;
                const wormHeadLastGameUpDir = wormHeadPlaceNow < 0;
                if (wormHeadLastGameUpDir) {
                    wormHeadPlaceNow = wormHeadPlaceNow + gameBoardPixelCount;
                }
                break;
    
            case right_direction:
                ++wormHeadPlaceNow;
                const wormHeadLastGameRightDir =
                    wormHeadPlaceNow % gameBoardPixelCount == 0;
                if (wormHeadLastGameRightDir) {
                    wormHeadPlaceNow = wormHeadPlaceNow - gameBoardPixelCount;
                }
                break;

            case down_direction:
                wormHeadPlaceNow = wormHeadPlaceNow + gameBoardPixelCount;
                const wormHeadLastGameDownDir =
                    wormHeadPlaceNow > squareBoardPixelCount - 1;
                if (wormHeadLastGameDownDir) {
                    wormHeadPlaceNow = wormHeadPlaceNow - squareBoardPixelCount;
                }
                break;
    
            default:
    
                break;

        }
        let nextWormHeadPixel = gameBoard[wormHeadPlaceNow];

        // Kill worm if it touches/bites itself: Stop moving the space Worm. Use clearInterval() to stop the time
        if (nextWormHeadPixel.classList.contains("wormBody")) {
            clearInterval(moveWormInterval);
            if (
                !alert(`You have eaten ${foodEaten} space cakes by travelling ${distanceTravelled} light years.`)
            )
               window.location.reload();
        }

        // Kill worm if it touches the blackhole:
        if (nextWormHeadPixel.classList.contains("blackhole")) {
            clearInterval(moveWormInterval);
            if (
                !alert(`BLACK HOLE!! You have travelled to another dimension. You have eaten ${foodEaten} space cakes by travelling ${distanceTravelled} light years.`)
            )
                window.location.reload();
        }


        // If not killed "add" the worm body:
        nextWormHeadPixel.classList.add("wormBody");

       // This function removes the space worm's body from the end of the worm as it moves, space worm Length is used as the timeout interval 
        setTimeout(() => {
            nextWormHeadPixel.classList.remove("wormBody");
        }, wormLength);

        distanceTravelled++;
        document.getElementById("blocksTravelled").innerText = distanceTravelled;

        // If space worm bites the food /so head and food are at the same place):
        if (wormHeadPlaceNow == currentFoodPlace) {
            foodEaten++;
            document.getElementById("pointsEarned").innerHTML = foodEaten;
            wormLength = wormLength + 100;
            createFood();
            createblackhole();

        }
         //speed accelerates as space worm eats food. Initial speed is 100
        if (foodEaten >= 50 && foodEaten < 100) {
            clearInterval(moveWormInterval);
            moveWormInterval = setInterval(moveWorm, speed - 20);
              }

        if (foodEaten >= 100 && foodEaten < 200) {
           clearInterval(moveWormInterval);
           moveWormInterval = setInterval(moveWorm, speed - 40);
             }

        if (foodEaten >= 200) {
          clearInterval(moveWormInterval);
          moveWormInterval = setInterval(moveWorm, speed - 60);
            }
        
};