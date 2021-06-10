
For work done so far:

---> see daily screenshots for update

7th JUNE
--------

1. Description of color labels:

GREEN : done!

PINK: On going

RED: To be done

ORANGE: Gary

BLUE: Maria

-------------------------
 
 2. Sharing initial interests

 -------------------------
 3. BRAINSTORMING:
  
  i. Role play type of game.
  
  ii. visual, use of emojis and ASCII for food, locations,...
  
  iii. character goes from A to Z, how, stops, recharge, instructions, storyline....

 ---------------------------------

 4. Discussing different approaches to project: browser or console visuals.

 ----------------------------------

 5. Decided for a space worm game, customized version of the classic snake game.

 ------------------------------------------------------

 6. Started:

  I. created a github repository.

  II. created a html index file with basic html and CSS.

  III. added space background image.

  IV. created 3 js files: character, game, grid.

  -------------------------------------------------

8th JUNE
--------
Decided to work on separated files : 4 js files in total, 2 for each.
We use temporarily a basic html and css file as template and we will change afterwards.

food.js  ---> MARIA

space_worm.js (character direction, movement, )  ---> MARIA

game_board.js (game grid)   --->  GARY

game.js  (score (2 lines) + code to start game) ----> GARY

------------------------

work done on the files so far:

_***************************_

MARIA:

    food.js: 
    ---------

    A function that adds or removes and repositions (adds again) food in the game board randomly. Original food position is set to 0.

    space_worms.js : 
    --------------

    1. declared the directions of the space worm in the board, by assigning keyboard arrow keys.

    2. set initial space worm location

    3. function to change the direction of space worm with "if" and "if else" statements

    4. set the starting position of the space worm to the center

    5. function to move the worm with switch cases

    6. if statement to end game if space worm eats its own body and printing alert of food eaten and space travelled

    7. space worm Length is used as the timeout interval

    8. updated the distance travelled
    
    9. link to html visual when/if space worm eats food (head of worm hits food item) then food is added and new food position is created.



    -----------------------------------------------------------------------------------


9th JUNE
--------

* finishing up individual code parts.

* merged food.js and game_board.js. Current files game_board.js, game.js, space_worm.js

*  1* title banner. done, to be reviewed

   2* change color scheme --> done, to be reviewed

   3* move score boards 
   
   4* change alert messages. --> some done, more to be added
   
   5* slow down perhaps. --> done 
   
   6* expand screen ? ---> not working
   
   7* update trello screenshot and markdown in github
   
   8* change food or/and worm visuals (perhaps emojis, different food types?)
   
   9* maybe obstacles -collision MAYBE

   10* added favicon green worm  --> done

   ------------------

   ALERT Ideas:

   i. You can always eat more !

   ii. Hey there more Cake in the universe you lose
   
   iii. Well super Worm done you win
   
   iii. No worm left behind you lose
   
   iv. You need more Cake
   
   v.  you have eaten X space cakes by travelling X light years

   ------------------------------

   bugs we found:

   1. conflicts in git, pulling and pushing

   2. conflicts due to dividing game tasks, that required rather a common work, so naming conflict, etc...

   3. problems to make the arrow keys of keyboard work

   4. problems to make worm appear in screen.

   -------------------------------



10th JUNE
--------
   
to do:

1. collision detection, creating obstacles and consequence. Created a new class "blackhole" and add it randomly: so every time a piece of food is eaten the backhole is also repositioned randomly in the gameboard. I the space worm hits the black hole, game over.

2. working on alerts