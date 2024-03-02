var init = function (window) {
    'use strict';
    var 
        draw = window.opspark.draw,
        physikz = window.opspark.racket.physikz,
        
        app = window.opspark.makeApp(),
        canvas = app.canvas, 
        view = app.view,
        fps = draw.fps('#000');
        
    
    window.opspark.makeGame = function() {
        
        window.opspark.game = {};
        var game = window.opspark.game;
        
        ////////////////////////////////////////////////////////////
        ///////////////// PROGRAM SETUP ////////////////////////////
        ////////////////////////////////////////////////////////////
        
        // TODO 1 : Declare and initialize our variables
        var circle; //variable to hold a single circle when creating circles / iterating
        var circles = [] //variable to store all circles in one Array

        // TODO 2 : Create a function that draws a circle 
        function drawCircle(){
            //code to draw a circle
            circle = draw.randomCircleInArea(canvas, true, true, "#999", 2); //uses an existing draw function to draw a circle of random size, color and location within the canvas. It stores the output of the function.
            physikz.addRandomVelocity(circle, canvas, 1, 1); //uses the physikz library to add a random velocity and direction to the circle
            view.addChild(circle); //adds the circle as a child of view so that the circle appears on screen
            circles.push(circle); //saves the circle to an array of circles by pushing it to the end of the array
        }

        // TODO 3 / 7 : Call the drawCircle() function 
        for ( var i = 0; i <= 100;i++ ){ //calls the drawCircle() funtction a set amount of times and draws that many circles
            drawCircle() 
        }
        ////////////////////////////////////////////////////////////
        ///////////////// PROGRAM LOGIC ////////////////////////////
        ////////////////////////////////////////////////////////////
        
        /* 
        This Function is called 60 times/second producing 60 frames/second.
        In each frame, for every circle, it should redraw that circle
        and check to see if it has drifted off the screen.         
        */
        function update() {
            // TODO 4 : Update the circle's position //
            
                //I deleted these repetive lines of code because I replaced it with a more non repetive for loop

            // TODO 5 / 10 : Call game.checkCirclePosition() on your circles.
          
                //I deleted these repetive lines of code because I replaced it with a more non repetive for loop

            // TODO 8 / 9 : Iterate over the array
           for(var i = 0; i < circles.length; i++ ){ //helps apply updates to the circles produced by the loop on lines 36 - 38
                
                circles.length[i]
                physikz.updatePosition(circles[i]) // This line updates the position of all circle.
                game.checkCirclePosition(circles[i]) // This line checks if the position of a circle is beyond one of the barriers of the screen.
            }
            
        }

        /* 
        This Function should check the position of a circle that is passed to the 
        Function. If that circle drifts off the screen, this Function should move
        it to the opposite side of the screen.
        */
        game.checkCirclePosition = function(circle) {

            // if the circle has gone past the RIGHT side of the screen then place it on the LEFT
            if ( circle.x > canvas.width ) { //this if function checks if a circle is past the right side of the screen and resets its position to the left side if so.
                circle.x = 0;
            }

            // TODO 6 : YOUR CODE STARTS HERE //////////////////////
            

            if (circle.x < 0 ){//this if function checks if a circle is past the right side of the screen and resets its position to the left side if so.
                circle.x = canvas.width
            }
            if ( circle.y > canvas.height ) {//this if function checks if a circle is past the bottom border of the screen and resets its position to the Top border if so.
                circle.y = 0;
            }

            if (circle.y < 0 ){//this if function checks if a circle is past the top border of the screen and resets its position to the bottom border if so.
                circle.y = canvas.height 
            }
            

            // YOUR TODO 6 CODE ENDS HERE //////////////////////////
        }
        
        /////////////////////////////////////////////////////////////
        // --- NO CODE BELOW HERE  --- DO NOT REMOVE THIS CODE --- //
        /////////////////////////////////////////////////////////////
        
        view.addChild(fps);
        app.addUpdateable(fps);
        
        game.circle = circle;
        game.circles = circles;
        game.drawCircle = drawCircle;
        game.update = update;
        
        app.addUpdateable(window.opspark.game);
    }
};

// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if((typeof process !== 'undefined') &&
    (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports = init;
}
