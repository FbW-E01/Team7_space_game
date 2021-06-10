    // Direction codes (Keyboard key codes for arrow keys: up, down, left, right):
    const left_direction = 37;
    const up_direction = 38;
    const right_direction = 39;
    const down_direction = 40;

    // Set space worm direction initially to right
    let wormCurrentDirection = right_direction;

    const changeDirection = (newDirection) => {
    // Change the direction of the space worm
    if (newDirection == wormCurrentDirection) return;
    if (
        newDirection == left_direction &&
        wormCurrentDirection != right_direction
    ) {
        wormCurrentDirection = newDirection;
    } else if (
        newDirection == up_direction &&
        wormCurrentDirection != down_direction
    ) {
        wormCurrentDirection = newDirection;
    } else if (
        newDirection == right_direction &&
        wormCurrentDirection != left_direction
    ) {
        wormCurrentDirection = newDirection;
    } else if (
        newDirection == down_direction &&
        wormCurrentDirection != up_direction
    ) {
        wormCurrentDirection = newDirection;
    }
    };

    // Let the starting position of the space worm be at the middle of game board
    let currentWormHeadPlace = squareGameBoardCount / 2;

    let wormLength = 200; // Initial length of the space worm = 1000

    // Move space worm continuously by calling this function repeatedly:
    const moveWorm = () => {
    switch (wormCurrentDirection) {
        case left_direction:
        --currentWormHeadPlace;
        const isWormHeadAtLastGameBoardTowardsLeft =
            currentWormHeadPlace % gameBoardCount == gameBoardCount - 1 ||
            currentWormHeadPlace < 0;
        if (isWormHeadAtLastGameBoardTowardsLeft) {
            currentWormHeadPlace = currentWormHeadPlace + gameBoardCount;
        }
        break;

        case up_direction:
        currentWormHeadPlace = currentWormHeadPlace - gameBoardCount;
        const isWormHeadAtLastGameBoardTowardsUp = currentWormHeadPlace < 0;
        if (isWormHeadAtLastGameBoardTowardsUp) {
            currentWormHeadPlace = currentWormHeadPlace + gameBoardCount;
        }
        break;

        case right_direction:
        ++currentWormHeadPlace;
        const isWormHeadAtLastGameBoardTowardsRight =
            currentWormHeadPlace % gameBoardCount == 0;
        if (isWormHeadAtLastGameBoardTowardsRight) {
            currentWormHeadPlace = currentWormHeadPlace - gameBoardCount;
        }
        break;

        case down_direction:
        currentWormHeadPlace = currentWormHeadPlace + gameBoardCount;
        const isWormHeadAtLastGameBoardTowardsDown =
            currentWormHeadPlace > squareGameBoardCount - 1;
        if (isWormHeadAtLastGameBoardTowardsDown) {
            currentWormHeadPlace = currentWormHeadPlace - squareGameBoardCount;
        }
        break;

        default:
        break;
    }
    let nextWormHeadPixel = gameBoard[currentWormHeadPlace];

    // Kill worm if it touches/bites itself:
    if (nextWormHeadPixel.classList.contains("wormBody")) {
        // Stop moving the space Worm. Use clearInterval() to stop the time
        clearInterval(moveWormInterval);
        if (
        !alert(
            `You have eaten ${foodEaten} space cakes by travelling ${distanceTravelled} light years.`
        )
        )
        window.location.reload();
    }

   // Kill worm if it touches the blackhole:
    if (nextWormHeadPixel.classList.contains("blackhole")) {
    // Stop moving the space Worm. Use clearInterval() to stop the time
    clearInterval(moveWormInterval); 
    if (!alert(`BLACK HOLE!! You have travelled to another dimension. You have eaten ${foodEaten} space cakes by travelling ${distanceTravelled} light years.`))
    window.location.reload();
}



    // If not killed "add" the worm body:
    nextWormHeadPixel.classList.add("wormBody");

    // This function removes the space worm's body from the end of the worm as it moves.
    // Also note that space worm Length is used as the timeout interval
    setTimeout(() => {
        nextWormHeadPixel.classList.remove("wormBody");
    }, wormLength);

    // Update total distance travelled
    distanceTravelled++;
    // Update in UI/screen:change the HTML content of total distance travelled, with id="blocksTravelled":
    document.getElementById("blocksTravelled").innerText = distanceTravelled;

    // If space worm bites the food /so head and food are at the same place):
    if (currentWormHeadPlace == currentFoodPlace) {
        // Update total food eaten
        foodEaten++;
        // Update in screen/UI: change the HTML content of total food eaten, with id="pointsEarned":
        document.getElementById("pointsEarned").innerHTML = foodEaten;
        // Increase Space worm length:
        wormLength = wormLength + 100;
        // Create new food:
        createFood();
        createblackhole();
    }
    };

