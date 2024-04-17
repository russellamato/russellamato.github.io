var makeLevelData = function (window) {
  window.opspark = window.opspark || {};

  window.opspark.makeDataInGame = function (game) {
    // some useful constants
    var groundY = game.groundY;

    // this data will allow us to define all of the
    // behavior of our game

    // TODO 12: change the below data
    var levelData = [
      {
        name: "A Robots BAD time",
        number: 1,
        speed: -3,
        gameItems: [ 
          { type: "obstacle", x: 400, y: groundY - 120, damage: 25, img:"img/BAD BTD.png", sizeOfHitZone: 25, scaleX: .5, scaleY: .5, obstacleImageX: -40, obstacleImageY: -100},//data for a obstacle that is a function call in runLevel.js 
          { type: "obstacle", x: 600, y: groundY - 120, damage: 25, img:"img/BAD BTD.png", sizeOfHitZone: 25, scaleX: .5, scaleY: .5, obstacleImageX: -40, obstacleImageY: -100},//data for a obstacle that is a function call in runLevel.js 
          { type: "obstacle", x: 900, y: groundY - 120, damage: 25, img:"img/BAD BTD.png", sizeOfHitZone: 25, scaleX: .5, scaleY: .5, obstacleImageX: -40, obstacleImageY: -100},//data for a obstacle that is a function call in runLevel.js 
          { type: "enemy", x: 400, y: groundY - 50, damage: -50, img:"img/bloon popper.png", enemyImageX: -25, enemyImageY: -25, speed: -4, scoreIncrease: 200, scalingX: 1, scalingY: 1},//data for a enemy that is a function call in runLevel.js 
          { type: "reward", x: 1000, y: groundY - 10, healthGiven: 50, img:"img/banana.png" , rewardImageX: -35, rewardImageY: -50, scoreIncrease: 500, speed: -2, scalingX: .5, scalingY: .5},//data for a reward that is a function call in runLevel.js 
          { type: "marker", x: 1500, y: groundY - 80, healthGiven: 50, img:"img/Arrow Point Right.png" , markerImageX: -60, markerImageY: -50, scaleX: .25, scaleY: .25, speed: -2},//data for a marker that is a function call in runLevel.js 
        ],
      },
      {
        name: "Robot's Road Spikes",
        number: 2,
        speed: -3,
        gameItems: [
          { type: "obstacle", x: 400, y: groundY, damage: 50, img:"img/Road Spikes.png", sizeOfHitZone: 25, scaleX: .25, scaleY: .25, obstacleImageX: -25, obstacleImageY: -25},//data for a obstacle that is a function call in runLevel.js 
          { type: "obstacle", x: 600, y: groundY, damage: 50, img:"img/Road Spikes.png", sizeOfHitZone: 25, scaleX: .25, scaleY: .25, obstacleImageX: -25, obstacleImageY: -25},//data for a obstacle that is a function call in runLevel.js 
          { type: "obstacle", x: 900, y: groundY, damage: 50, img:"img/Road Spikes.png", sizeOfHitZone: 25, scaleX: .25, scaleY: .25, obstacleImageX: -25, obstacleImageY: -25 },//data for a obstacle that is a function call in runLevel.js 
          { type: "enemy", x: 400, y: groundY - 50, damage: -50, img:"img/StormofArrowsAA(1).png", enemyImageX: -25, enemyImageY: -25, speed: -4, scoreIncrease: 200, scalingX: .25, scalingY: .25},//data for a enemy that is a function call in runLevel.js 
          { type: "reward", x: 1100, y: groundY - 10, healthGiven: 50, img:"img/monkey money.png" , rewardImageX: -35, rewardImageY: -30, scoreIncrease: 500, speed: -2, scalingX: .5, scalingY: .5},//data for a reward that is a function call in runLevel.js 
          { type: "obstacle", x: 1200, y: groundY, damage: 50, img:"img/Road Spikes.png", sizeOfHitZone: 25, scaleX: .25, scaleY: .25, obstacleImageX: -25, obstacleImageY: -25 },//data for a obstacle that is a function call in runLevel.js 
          { type: "obstacle", x: 1600, y: groundY - 125, damage: 50, img:"img/BAD BTD.png", sizeOfHitZone: 25, scaleX: .25, scaleY: .25, obstacleImageX: -25, obstacleImageY: -25 },//data for a obstacle that is a function call in runLevel.js 
          { type: "obstacle", x: 1800, y: groundY, damage: 50, img:"img/Road Spikes.png", sizeOfHitZone: 25, scaleX: .25, scaleY: .25, obstacleImageX: -25, obstacleImageY: -25 },//data for a obstacle that is a function call in runLevel.js 
          { type: "obstacle", x: 2000, y: groundY - 125, damage: 50, img:"img/BAD BTD.png", sizeOfHitZone: 25, scaleX: .25, scaleY: .25, obstacleImageX: -25, obstacleImageY: -25 },//data for a obstacle that is a function call in runLevel.js 
          { type: "enemy", x: 4300, y: groundY - 110, damage: -50, img:"img/bloon popper.png", enemyImageX: -25, enemyImageY: -25, speed: -4, scoreIncrease: 200, scalingX: 1, scalingY: 1},//data for a enemy that is a function call in runLevel.js 
          { type: "enemy", x: 4500, y: groundY - 10, damage: -50, img:"img/bloon popper.png", enemyImageX: -25, enemyImageY: -25, speed: -4, scoreIncrease: 200, scalingX: 1, scalingY: 1},//data for a enemy that is a function call in runLevel.js 
          { type: "enemy", x: 4700, y: groundY - 110, damage: -50, img:"img/bloon popper.png", enemyImageX: -25, enemyImageY: -25, speed: -4, scoreIncrease: 200, scalingX: 1, scalingY: 1},//data for a enemy that is a function call in runLevel.js 
          { type: "enemy", x: 4900, y: groundY - 10, damage: -50, img:"img/bloon popper.png", enemyImageX: -25, enemyImageY: -25, speed: -4, scoreIncrease: 200, scalingX: 1, scalingY: 1},//data for a enemy that is a function call in runLevel.js 
          { type: "enemy", x: 5100, y: groundY - 110, damage: -50, img:"img/bloon popper.png", enemyImageX: -25, enemyImageY: -25, speed: -4, scoreIncrease: 200, scalingX: 1, scalingY: 1},//data for a enemy that is a function call in runLevel.js 
          { type: "reward", x: 5300, y: groundY - 10, healthGiven: 50, img:"img/monkey money.png" , rewardImageX: -35, rewardImageY: -30, scoreIncrease: 500, speed: -2, scalingX: .5, scalingY: .5},//data for a enemy that is a function call in runLevel.js 
        ],
      },
    ];
    window.opspark.levelData = levelData;
  };
};

// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if (
  typeof process !== "undefined" &&
  typeof process.versions.node !== "undefined"
) {
  // here, export any references you need for tests //
  module.exports = makeLevelData;
}
