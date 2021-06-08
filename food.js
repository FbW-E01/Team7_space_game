let  currentFoodPlace  =  0; // Initially set to 0
const  createFood  = () => {
    // Remove previous food;
    gameBox[currentFoodPlace].classList.remove("food"); //read-only property that returns a live DOMTokenList collection of the class attributes of the element, can then be used to manipulate the class list ---> in this case to remove a class

    // Create new food
    currentFoodPlace =  Math.random();
    currentFoodPlace =  Math.floor(currentFoodPlace  *  1600);
    gameBox[currentFoodPostion].classList.add("food"); //--> in this case to add class
};