/* global $, sessionStorage */

$(document).ready(runProgram); // wait for the HTML / CSS elements of the page to fully load, then execute runProgram()

function runProgram(){
  ////////////////////////////////////////////////////////////////////////////////
  //////////////////////////// SETUP /////////////////////////////////////////////
  ////////////////////////////////////////////////////////////////////////////////

  // Constant Variables
  const FRAME_RATE = 60;
  const FRAMES_PER_SECOND_INTERVAL = 1000 / FRAME_RATE;
  const BOARD_HEIGHT = $("#board").height();
  const BOARD_WIDTH = $("#board").width();
  const INITAL_SPEED = 0;
  const SCORE_TO_WIN = 2;
  const BALL_CLASS = $(".ball")
  const HALF_BOARD_WIDTH = $("#board").width() / 2;
  const PADDLE_SPEED_UP = -5;
  const PADDLE_SPEED_DOWN = 5;
  const KEY = { // codes for keys on the keyboard
    W: 87,
    S: 83,
    
    UP: 38,
    DOWN: 40
  };

  

// Game Item Objects//realised the instructions were important
  function newObj (className, id){ // This makes the objects and helps to assign their properties in the code, it is a factory function
    var obj = {}
      obj.className = className;
      obj.id = id;
      obj.x = parseFloat($(id).css("left"));
      obj.y = parseFloat($(id).css("top"));
      obj.width = $(id).width();
      obj.height = $(id).height();
      obj.speedX = INITAL_SPEED
      obj.speedY = INITAL_SPEED
      
      return obj
  }
  var scoreLeft = 0;
  var scoreRight = 0;
  
  var nameLeft = prompt("What is your name | Left Paddle") // prompts for the name and saves it
  nameLeft = naming(nameLeft)
  var nameRight = prompt("What is your name | Right Paddle") // prompts for the name and saves it
  nameRight = naming(nameRight)
  $("#nameLeft").text(nameLeft);
  $("#nameRight").text(nameRight); 
  
  
  let paddleLeft = newObj(".paddle", "#paddleLeft") //defines the left paddle
  let paddleRight = newObj(".paddle", "#paddleRight") //defines the right paddle
  let ball1 = newObj(BALL_CLASS, "#ball1") //defines the ball
  // one-time setup
  let interval = setInterval(newFrame, FRAMES_PER_SECOND_INTERVAL);   // execute newFrame every 0.0166 seconds (60 Frames per second)
  $(document).on('keydown', handleKeyDown); 
  $(document).on('keyup', handleKeyUp);                           // change 'eventType' to the type of event you want to handle
 

  startBall();
  ////////////////////////////////////////////////////////////////////////////////
  ///////////////////////// CORE LOGIC ///////////////////////////////////////////
  ////////////////////////////////////////////////////////////////////////////////

  /* 
  On each "tick" of the timer, a new frame is dynamically drawn using JavaScript
  by calling this function and executing the code inside.
  */
  function newFrame() {
    
      moveObject(paddleLeft)
      moveObject(paddleRight)
      moveObject(ball1)

      wallCollision(paddleLeft)
      wallCollision(paddleRight)
      wallCollision(ball1)

      bouncingOff(ball1, paddleLeft)
      bouncingOff(ball1, paddleRight)

      scoring(ball1)

    }
  
  /* 
  Called in response to events.
  */
  function handleEvent(event) {
    
  }

  ////////////////////////////////////////////////////////////////////////////////
  ////////////////////////// HELPER FUNCTIONS ////////////////////////////////////
  ////////////////////////////////////////////////////////////////////////////////

  

function startBall (){
  ball1.x = BOARD_WIDTH / 2 - ball1.width;// this centers the ball along the boarder's width, ||| I made a mistake beforehand trying to hardcode values and not going off of the more dynamic setup of this aswell as not taking the width of the ball into the code.
  ball1.y = BOARD_HEIGHT / 2 - ball1.height;// this centers the ball along the boarder's height, ||| I made a mistake beforehand trying to hardcode values and not going off of the more dynamic setup of this aswell as not taking the height of the ball into the code.
  
  ball1.speedX = randomNum = (Math.random() * 3 + 2) * (Math.random() > 0.5 ? -1 : 1);
  ball1.speedY = randomNum = (Math.random() * 3 + 2) * (Math.random() > 0.5 ? -1 : 1);
}


function handleKeyDown (event){ // handles when the user presses the key down and applys movement as so
  if (event.which === KEY.W){
    paddleLeft.speedY = PADDLE_SPEED_UP;
  }else if (event.which === KEY.S) {
    paddleLeft.speedY = PADDLE_SPEED_DOWN;
  }
  
  if (event.which === KEY.UP){
    paddleRight.speedY = PADDLE_SPEED_UP;
  }else if (event.which === KEY.DOWN) {
    paddleRight.speedY = PADDLE_SPEED_DOWN;
  }
}

function handleKeyUp (event){ // handles when the user presses the key up and stops movement as so
  
  if (event.which === KEY.W || event.which === KEY.S) {
    paddleLeft.speedY = 0
  }else if (event.which === KEY.UP|| event.which === KEY.DOWN) {
    paddleRight.speedY = 0
  }
}

function bouncingOff (ball, paddle){ // cleans up code, uses a ternary and uses doCollide to make the ball actually bounce off the paddles
    if (doCollide(ball, paddle)){ //an if statement that handles if doCollide is true
      ball.speedX = -ball.speedX; // sets the ball's speedX the opposite of what it is.
      ball.x = paddle.x < HALF_BOARD_WIDTH ? paddle.x + paddle.width : paddle.x - paddle.width; // makes sure the ball doesnt go inside the paddle
  }
}


function wallCollision (obj){ // wall collision 
    if (obj.y < 0) {// compares the objects y and if its less than 0 it completely stops it setting its position to where it would be right before hitting the collision
      obj.y = 0; // sets the objects y to 0 if the if is true. 

      if (obj.className === BALL_CLASS){ // checks for if the class name of the object colliding is that of ball
        obj.speedY = -obj.speedY; // multiplies the objects speedY with -1 basically, it sets the objects speed to the opposite sign
      }else{
        obj.speedY = 0; //sets the objects speed on the y to 0;
      }
      
    }
    
    if (obj.y + obj.height > BOARD_HEIGHT){ // checks if the objects y plus its height is greater than the board height
        obj.y = BOARD_HEIGHT - obj.height //sets the object's y to board height minus the objects height to give it collision
    

      if (obj.className === BALL_CLASS){ // checks for if the class name of the object colliding is that of ball
          obj.speedY = -obj.speedY; // multiplies the object -1 basically, it sets the objects speed to the opposite of its self
      }else{
          obj.speedY = 0;//sets the objects speed on the y to 0;
      }

    } 
    
}

function scoring (obj){ // separated this and wall collision as it gives more clarity even if it is more code, it handles scoring
  if (obj.className === BALL_CLASS){
    if (obj.x < 0){ // simply checks for if the ball is out on the right side and adds a point to the right side and , with a ternary operator, it checks if the amount of score to win is equal to the amount set and if so it ends the game and if not it starts it again, allowing for a amount of rounds
          scoreRight++; // has to be first as it has to add the score, then update the number
          $("#scoreRight").text(scoreRight) //sets the text to the current right score
          scoreRight >= SCORE_TO_WIN ? endGame() : startBall(); //ternary that ends the game if the score is equal to or greater than the score to win
    }
        
    if (obj.x > BOARD_WIDTH){// simply checks for if the ball is out on the left side and adds a point to the left side and , with a ternary operator, it checks if the amount of score to win is equal to the amount set and if so it ends the game and if not it starts it again, allowing for a amount of rounds
          scoreLeft++; // has to be first as it has to add the score, then update the number
          $("#scoreLeft").text(scoreLeft) //sets the text to the current left score
          scoreLeft >= SCORE_TO_WIN ? endGame() : startBall(); //ternary that ends the game if the score is equal to or greater than the score to win
    }
  }
  
}


function doCollide(a, b){ // It compares the first object and second object put into its parameters and if they are intersecting it returns true
  return ( 
      a.x < b.x + b.width &&
      a.x + a.width > b.x && 
      a.y < b.y + b.height &&
      a.y + a.height > b.y
    )
}

// saw that I could combine applyProperty and MoveObject so I did
function moveObject(obj){//adds the speed to the position allowing for movement through continously adding speed , this also allows for the css to be updated everytime you move it.
  obj.x += obj.speedX;
  obj.y += obj.speedY;
 
  $(obj.id).css("left", obj.x);
  $(obj.id).css("top", obj.y);  
}

function naming(name){
    if(name.length > 7){ // checks for if the name is greater than 7 letters and if so it becomes true
      alert("Invalid Name! Restarting Game")
      runProgram();
      
    }
    return name;
}
  
  
  

  function endGame() {
    

    $("#winnerMessage").toggle(5000).text((scoreLeft >= SCORE_TO_WIN ? nameLeft : nameRight) + " WINS"); // says who won
    $("#endingImage").toggle(5000) // displays the image at the end
    // $("#playAgain").text("Play Again?").toggle(5000).on("click", runProgram())
    // stop the interval timer
    clearInterval(interval);
    
    // turn off event handlers
    $(document).off();
    
  
  
  }
}
