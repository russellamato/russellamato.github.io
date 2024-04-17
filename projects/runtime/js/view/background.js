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
        var bananaFarmerMovingForward;
        var buildings = []
      
        // called at the start of game and whenever the page is resized
        // add objects for display in background. draws each image added to the background once
        function render() {
            background.removeAllChildren();

            // TODO 1:
            // this currently fills the background with an obnoxious yellow;
            // you should modify both the height and color to suit your game
            var backgroundFill = draw.bitmap("img/rather large banana imagee.png");//draws a rectangle with a image for the background also yes it is supposed to be that big.
            background.addChild(backgroundFill);// adds the backgroundFill as a child of the background
            
            var groundFill = draw.rect(canvasWidth, canvasHeight, "gray")
            
            groundFill.x = 1;
            groundFill.y = groundY;
            background.addChild(groundFill);
            // TODO 2: - Add a moon and starfield
            
          /*  
            for(var stars = 0 ; stars < 100; stars++){// for function that creates however many stars the value is, value is hard coded.
                var circle = draw.circle(10, "white", "LightGray", 2);//creates a circle stores in the variable
                circle.x = canvasWidth * Math.random();//creates a random number between 0 and .999 and multiplies it by canvasWidth and adds it to circle.x
                circle.y = groundY *  Math.random();//creates a random number between 0 and .999 and multiplies it by groundY and adds it to circle.y
                background.addChild(circle);// adds the stars as a child of the background
            }
          */
          
            /*  
            var moon = draw.bitmap("img/moon.png");//storing a image to the moon variable
            moon.x = canvasWidth - 250; //adding x to moon variable
            moon.y = groundY - 350; //adding y to moon variable
            moon.scaleX = .5; //scaling the moon image x by 10
            moon.scaleY = .5; //scaling the moon image y by 10
            background.addChild(moon);// adds the moon to the background as a child
          */

            // TODO 4: Part 1 - Add buildings!     Q: This is before TODO 4 for a reason! Why?
            /*
            for (var i = 0; i < 5; i++) {
                var buildingHeight = 500 * Math.random();//The buildings height 
                var building = draw.rect(75, buildingHeight, "Maroon", "Black", 1);//Sets the border, inner color, building height, and 
                building.x = 300 * i;//makes buildings 200 pixels apart
                building.y = groundY - buildingHeight;// makes buildings above the ground
                background.addChild(building);//adds a building as a child to the background 
                buildings.push(building);//pushes the buildings to the array building
              }
            */
            // TODO 3: Part 1 - Add a tree
           
            
           
           
           
            
            bananaFarmerMovingForward = draw.bitmap("img/banana farmer.png"); //applys the image of a banana farmer to the bananaFarmerMovingForward variable
            bananaFarmerMovingForward.x = canvasWidth - 250;//Sets the original position that the banana farmer spawns in
            bananaFarmerMovingForward.y = groundY - 250;//sets the y value of the banana farmer
            background.addChild(bananaFarmerMovingForward);// add it as a child of the background
                     
        } // end of render function - DO NOT DELETE
        
        
        // Perform background animation
        // called on each timer "tick" - 60 times per second
        function update() {
            // useful variables
            var canvasWidth = app.canvas.width;
            var canvasHeight = app.canvas.height;
            var groundY = ground.y;
            
            // TODO 3: Part 2 - Move the tree!
            bananaFarmerMovingForward.x = bananaFarmerMovingForward.x - 5; // takes current x value of tree and subtracts it by a number and sets that as the banana farmer x value
            
            
            if(bananaFarmerMovingForward.x < -200){//if statement that moves the banana farmer from the left side of the screen to right when off screen.
                bananaFarmerMovingForward.x = canvasWidth; // makes the banana farmer go the right side just off screen.
            }
            
            
            // TODO 4: Part 2 - Parallax
            /*
            for (var i = 0; i < buildings.length; i++) {// creates the parallax
                var building = buildings[i];//cycles through the buildings array
                building.x = building.x - 1;// makes the buildings move
                if(building.x < -100){// checks if building.x is less than -100
                    building.x = canvasWidth//resets building.x to the canvas width
                }
            }
            */  
              

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
