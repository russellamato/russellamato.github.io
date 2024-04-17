var runLevels = function (window) {
  window.opspark = window.opspark || {};

  var draw = window.opspark.draw;
  var createjs = window.createjs;
  let currentLevel = 0;

  window.opspark.runLevelInGame = function (game) {
    // some useful constants
    var groundY = game.groundY;

    // this data will allow us to define all of the
    // behavior of our game
    var levelData = window.opspark.levelData;

    // set this to true or false depending on if you want to see hitzones
    game.setDebugMode(true);

    // TODOs 5 through 11 go here
    // BEGIN EDITING YOUR CODE HERE



    function createObstacle(x, y, damage, img, sizeOfHitZone, scaleX, scaleY, obstacleImageX, obstacleImageY){//function that makes the obstacles that stay and hit the player if they dont dodge
        var hitZoneSize = sizeOfHitZone;//reads off the sizeOfHitZone argument from the obstacle function call in levelData.js and makes the size of the hitzone that value
        var damageFromObstacle = damage;//reads off the damage argument from the obstacle function call in levelData.js and makes the damage that value
        var obstacleHitZone = game.createObstacle(hitZoneSize, damageFromObstacle);// takes the hitZoneSize variable and damageFromObstacle variable and makes the obstacle
        obstacleHitZone.x = x; //reads off the x argument from the obstacle function call in levelData.js and makes the x that value
        obstacleHitZone.y = y; //reads off the y argument from the obstacle function call in levelData.js and makes the y that value
        game.addGameItem(obstacleHitZone);// adds the obstacles hit zone
        var obstacleImage = draw.bitmap(img); //reads off the image argument from the obstacle function call in levelData.js and makes the image that image
        obstacleHitZone.addChild(obstacleImage);// adds the obstacle image as a child of the obstacle image
        obstacleImage.scaleX = scaleX;//reads off the scaleX argument from the obstacle function call in levelData.js and makes the scale of the image that value on the x axis
        obstacleImage.scaleY = scaleY;//reads off the scaleY argument from the obstacle function call in levelData.js and makes the scale of the image that value on the y axis
        obstacleImage.x = obstacleImageX;//reads off the obstacleImageX argument from the obstacle function call in levelData.js and makes the image's x that value
        obstacleImage.y = obstacleImageY;//reads off the obstacleImageY argument from the obstacle function call in levelData.js and makes the image's y that value

    }

     

    
    function createEnemy(x, y, damage, img, enemyImageX, enemyImageY, speed, scoreIncrease, scalingX, scalingY) {//function that makes the enemys that damage and move to the player
    var enemy = game.createGameItem("enemy", 25);// adds the enemy type and and makes the hit zone size 25 
    var enemyImage = draw.bitmap(img);//reads off the image argument from the enemy function call in levelData.js and makes the enemy that image
    enemyImage.x = enemyImageX;//reads off the enemyImageX argument from the enemy function call in levelData.js and makes the image's x that value
    enemyImage.y = enemyImageY;//reads off the enemyImageY argument from the enemy function call in levelData.js and makes the image's y that value
    enemy.addChild(enemyImage);// adds the enemy image as a child of the enemy image
    enemy.x = x;//reads off the x argument from the enemy function call in levelData.js and makes the x that value
    enemy.y = y;//reads off the y argument from the enemy function call in levelData.js and makes the y that value
    enemyImage.scaleX = scalingX;//reads off the scalingX argument from the enemy function call in levelData.js and makes the scale of the image that value on the x axis
    enemyImage.scaleY = scalingY;//reads off the scalingY argument from the enemy function call in levelData.js and makes the scale of the image that value on the y axis
    game.addGameItem(enemy);// adds the enemy hit zone
    enemy.velocityX = speed;// reads off the speed argument from the enemy function call in levelData.js and makes that value the velocity
    
    
    enemy.onPlayerCollision = function () {// when the enemy has collision with the player the stuff in the curly braces activates
      game.changeIntegrity(damage)//reads off the damage argument found in the enemy function call in levelData.js and sets the damage of the enemy to that
    };

    enemy.onProjectileCollision = function () {//when the enemy is hit by a projectile the stuff in the curly braces activates
      game.increaseScore(scoreIncrease);//increases score of player
      enemy.shrink();// shrink down the enemy to nothing
    }
}

    
 
    function createReward(x, y, healthGiven, img, rewardImageX, rewardImageY, scoreIncrease, speed, scalingX, scalingY) {//function that gets called and makes the rewards that give health for the player
      var reward = game.createGameItem("reward", 25);// adds the reward type and and makes the hit zone size 25
      var rewardImage = draw.bitmap(img)//reads off the image argument from the reward function call in levelData.js and makes the reward that image
      rewardImage.x = rewardImageX;//reads off the rewardImageX argument from the reward function call in levelData.js and makes the image's x that value
      rewardImage.y = rewardImageY;//reads off the rewardImageY argument from the reward function call in levelData.js and makes the image's y that value
      reward.addChild(rewardImage);// adds the reward image as a child of the reward image
      rewardImage.scaleX = scalingX;//reads off the scalingX argument from the reward function call in levelData.js and makes the scale of the image that value on the x axis
      rewardImage.scaleY = scalingY;//reads off the scalingY argument from the reward function call in levelData.js and makes the scale of the image that value on the y axis
      reward.x = x;//reads off the x argument from the reward function call in levelData.js and makes the x that value
      reward.y = y;//reads off the y argument from the reward function call in levelData.js and makes the y that value
      game.addGameItem(reward);// adds the reward hit zone
      reward.velocityX = speed;// reads off the speed argument from the reward function call in levelData.js and makes that value the velocity
     
      
      reward.onPlayerCollision = function () {// when the reward has collision with the player the stuff in the curly braces activates
        game.changeIntegrity(healthGiven);//reads off the healthGiven argument found in the reward function call in levelData.js and sets the health given of the enemy to that
        game.increaseScore(scoreIncrease);//increases score of player
        reward.shrink();// fades out the reward to nothing
      };
      
  
      
    }



function createMarker(x, y, healthGiven, img, markerImageX, markerImageY, scaleX, scaleY, speed) {//function that gets called that makes the marker that goes to the next level
  var marker = game.createGameItem("marker", 25);// adds the marker type and and makes the hit zone size 25
  var markerImage = draw.bitmap(img);//reads off the image argument from the marker function call in levelData.js and makes the marker
  markerImage.x = markerImageX;//reads off the markerImageX argument from the marker function call in levelData.js and makes the image's x that value
  markerImage.y = markerImageY;//reads off the markerImageY argument from the marker function call in levelData.js and makes the image's y that value
  marker.addChild(markerImage);// adds the marker image as a child of the marker image
  markerImage.scaleX = scaleX;//reads off the scalingX argument from the marker function call in levelData.js and makes the scale of the image that value on the x axis
  markerImage.scaleY = scaleY;
  marker.x = x;//reads off the x argument from the obstacle function call in levelData.js and makes the x that value
  marker.y = y;//reads off the scalingY argument from the marker function call in levelData.js and makes the scale of the image that value on the y axis
  game.addGameItem(marker);// adds the marker hit zone
  marker.velocityX = speed;// reads off the speed argument from the marker function call in levelData.js and makes that value the velocity

  
  marker.onPlayerCollision = function () {
    game.changeIntegrity(healthGiven)//reads off the healthGiven argument found in the marker function call in levelData.js and sets the health given of the enemy to that
    startLevel()// starts the next level
  };
  
}
    


  function startLevel() {
      // TODO 13 goes below here
      var level = levelData[currentLevel]//makes the level variable have the levelData Array and stores the current level
      var levelObjects = level.gameItems// looks in the level variable so basically in the level array which is the levelData array's current level's things

      for(var i = 0; i < levelObjects.length; i++){// for loop that executes the code in the curly braces which basically just adds all the stuff in the game that you can interact with.
          var element = levelObjects[i]//variable that helps cycle through the levelObjects array
        
          if (element.type === "obstacle"){//checks if the element type is an obstacle
            createObstacle(element.x, element.y, element.damage, element.img, element.sizeOfHitZone, element.scaleX, element.scaleY, element.obstacleImageX, element.obstacleImageY)// has 9 arguments that are used in levelData.js to make the obstacles
          }else if (element.type === "enemy"){//checks if the element type is an enemy
            createEnemy(element.x, element.y, element.damage, element.img, element.enemyImageX, element.enemyImageY, element.speed, element.scoreIncrease, element.scalingX, element.scalingY)// has 10 arguments that are used in levelData.js to make the enemy
          }else if (element.type === "reward"){//checks if the element type is a reward
            createReward(element.x, element.y, element.healthGiven, element.img, element.rewardImageX, element.rewardImageY, element.scoreIncrease, element.speed, element.scalingX, element.scalingY)// has 10 arguments that are used in levelData.js to make the reward
          }else if (element.type === "marker"){//checks if the element type is a marker
            createMarker(element.x, element.y, element.healthGiven, element.img, element.markerImageX, element.markerImageY, element.scaleX, element.scaleY, element.speed,)// has 9 arguments that are used in levelData.js to make the marker
          }
        }
      //////////////////////////////////////////////
      // DO NOT EDIT CODE BELOW HERE
      //////////////////////////////////////////////
      if (++currentLevel === levelData.length) {
        startLevel = () => {
          console.log("Congratulations!");
        };
      }
    }
    startLevel();
  };
};

// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if (
  typeof process !== "undefined" &&
  typeof process.versions.node !== "undefined"
) {
  // here, export any references you need for tests //
  module.exports = runLevels;
}
