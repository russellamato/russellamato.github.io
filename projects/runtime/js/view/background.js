var background = function (window) {
    'use strict';
    
    window.opspark = window.opspark || {};
    var draw = window.opspark.draw;
    var createjs = window.createjs;
    
    /*
     * Create a background view for our game application
     */
    window.opspark.makeBackground = function(app,ground) {
        /* Error Checking - DO NOT DELETE */
        if(!app) {
            throw new Error("Invalid app argument");
        }
        if(!ground || typeof(ground.y) == 'undefined') {
            throw new Error("Invalid ground argument");
        }
        
        // useful variables
        var canvasWidth = app.canvas.width;
        var canvasHeight = app.canvas.height;
        var groundY = ground.y;
        
        // container which will be returned
        var background;
        
        //////////////////////////////////////////////////////////////////
        // ANIMATION VARIABLES HERE //////////////////////////////////////
        //////////////////////////////////////////////////////////////////
        // TODO (several):
        var tree;
      
      
        // called at the start of game and whenever the page is resized
        // add objects for display in background. draws each image added to the background once
        function render() {
            background.removeAllChildren();

            // TODO 1:
            // this currently fills the background with an obnoxious yellow;
            // you should modify both the height and color to suit your game
            var backgroundFill = draw.rect(canvasWidth, groundY,'#07575b');//draw.rect 
            background.addChild(backgroundFill);
            
            // TODO 2: - Add a moon and starfield
            
            
            for(var stars = 0 ; stars < 100; stars++){
                var circle = draw.circle(10, "white", "LightGray", 2);//creates a circle stores in the variable
                circle.x = canvasWidth * Math.random();//creates a random number between 0 and .999 and multiplies it by canvasWidth and adds it to circle.x
                circle.y = groundY *  Math.random();//creates a random number between 0 and .999 and multiplies it by groundY and adds it to circle.y
                background.addChild(circle);
            }
            
            
            var moon = draw.bitmap("img/moon.png");//storing a image to the moon variable
            moon.x = canvasWidth - 250; //adding x to moon variable
            moon.y = groundY - 350; //adding y to moon variable
            moon.scaleX = .5; //scaling the moon image x by 10
            moon.scaleY = .5; //scaling the moon image y by 10
            background.addChild(moon);
            

            // TODO 4: Part 1 - Add buildings!     Q: This is before TODO 4 for a reason! Why?
            
            
            // TODO 3: Part 1 - Add a tree
            tree = draw.bitmap("img/tree.png"); //storing a image to the variable tree
            tree.x = canvasWidth - 250;//
            tree.y = groundY - 225;//
            background.addChild(tree);
                        
        } // end of render function - DO NOT DELETE
        
        
        // Perform background animation
        // called on each timer "tick" - 60 times per second
        function update() {
            // useful variables
            var canvasWidth = app.canvas.width;
            var canvasHeight = app.canvas.height;
            var groundY = ground.y;
            
            // TODO 3: Part 2 - Move the tree!
            tree.x = tree.x - 10; // takes current x value of tree and subtracts it by a number and sets that as the trees x value
            
            if(tree.x < -200){//if statement that moves the tree from the left side of the screen to right when off screen.
                tree.x = canvasWidth; // makes the tree go the right side just off screen.
            }
            // TODO 4: Part 2 - Parallax
            

        } // end of update function - DO NOT DELETE
        
        
        
        /* Make a createjs Container for the background and let it know about the render and upate functions*/
        background = new createjs.Container();
        background.resize = render;
        background.update = update;
        
        /* make the background able to respond to resizing and timer updates*/
        app.addResizeable(background);
        app.addUpdateable(background);
        
        /* render and return the background */
        render();
        return background;
    };
};

// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if((typeof process !== 'undefined') &&
    (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports = background;
}
