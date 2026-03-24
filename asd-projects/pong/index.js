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
  const PADDLE_HEIGHT = $(".paddle").height();
  const PADDLE_WIDTH = $(".paddle").width();
  const INITAL_SPEED = 0;
  const KEY = {
    W: 87,
    S: 83,
    UP: 38,
    DOWN: 40
  };
  


  // Game Item Objects
  function newObj (id, x, y, speedX, speedY, backgroundColor, height, width){
    return {
      id,
      x,
      y,
      speedX,
      speedY,
      backgroundColor,
      height,
      width
    }
  }
  
  let paddle1 = newObj("#paddle1", 0, 0, INITAL_SPEED, INITAL_SPEED, "Red", PADDLE_HEIGHT , PADDLE_WIDTH)
  let paddle2 = newObj("#paddle2", BOARD_WIDTH - PADDLE_WIDTH, BOARD_HEIGHT - PADDLE_HEIGHT, INITAL_SPEED, INITAL_SPEED, "Red", PADDLE_HEIGHT, PADDLE_WIDTH)
  let ball1 = newObj("#ball1", BOARD_WIDTH  * 0.48, BOARD_HEIGHT * 0.48, INITAL_SPEED, INITAL_SPEED, "Blue", 20, 20)
  // one-time setup
  let interval = setInterval(newFrame, FRAMES_PER_SECOND_INTERVAL);   // execute newFrame every 0.0166 seconds (60 Frames per second)
  $(document).on('keydown', handleEvent); 
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
    
    
    
    applyProperty(paddle1)
    applyProperty(paddle2)
    applyProperty(ball1)
    
    wallCollision(paddle1)
    wallCollision(paddle2)
    wallCollision(ball1)


    moveObject(paddle1)
    moveObject(paddle2)
    moveObject(ball1)







  }
  
  /* 
  Called in response to events.
  */
  function handleEvent(event) {
    handleKeyDown(event)
    
  }

  ////////////////////////////////////////////////////////////////////////////////
  ////////////////////////// HELPER FUNCTIONS ////////////////////////////////////
  ////////////////////////////////////////////////////////////////////////////////
  

function startBall (){
  
  ball1.speedX += randomNum = (Math.random() * 3 + 2) * (Math.random() > 0.5 ? -1 : 1);
  ball1.speedY += randomNum = (Math.random() * 3 + 2) * (Math.random() > 0.5 ? -1 : 1);
}



function handleKeyDown (event){
  if (event.which === KEY.W){
    paddle1.speedY = -5;
  }else if (event.which === KEY.S) {
    paddle1.speedY = 5;
  }
  if (event.which === KEY.UP){
    paddle2.speedY = -5;
  }else if (event.which === KEY.DOWN) {
    paddle2.speedY = 5;
  }
}

function handleKeyUp (event){
  
  if (event.which === KEY.W || event.which === KEY.S) {
    paddle1.speedY = 0
  }else if (event.which === KEY.UP|| event.which === KEY.DOWN) {
    paddle2.speedY = 0
  }
  
}


function wallCollision (obj){
  if (obj.x < 0 || obj.x > BOARD_WIDTH - obj.width){
    obj.speedX = 0;
    obj.speedY = 0;
  }else if (obj.y < 0 || obj.y > BOARD_HEIGHT - obj.height){
    obj.speedX = 0;
    obj.speedY = 0;
  }
}


function moveObject(obj){//adds the speed to the position allowing for movement through continously adding speed 
    obj.x += obj.speedX;
    obj.y += obj.speedY;
}


function applyProperty (obj){
    $(obj.id).css("left", obj.x);
    $(obj.id).css("top", obj.y);
    $(obj.id).css("background-color", obj.backgroundColor);
    $(obj.id).css("width", obj.width);
    $(obj.id).css("height", obj.height);
}

  function endGame() {
    // stop the interval timer
    clearInterval(interval);

    // turn off event handlers
    $(document).off();
  }

}
