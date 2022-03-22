var level01 = function (window) {

    window.opspark = window.opspark || {};

    var draw = window.opspark.draw;
    var createjs = window.createjs;

    window.opspark.runLevelInGame = function(game) {
        // some useful constants 
        var groundY = game.groundY;

        // this data will allow us to define all of the
        // behavior of our game
        var levelData = {
            "name": "Robot Romp",
            "number": 1, 
            "speed": -3,
            "gameItems": [
                { "type": "sawblade", "x": 600, "y": groundY - 110},
                { "type": "sawblade", "x": 670, "y": groundY - 110 },
                { "type": "sawblade", "x": 790, "y": groundY - 20},

                { "type": "enemy", "x": 800, "y": groundY - 50},
                { "type": "enemy", "x": 1000, "y": groundY - 50},
                { "type": "enemy", "x": 1400, "y": groundY - 50},


                { "type": "reward", "x": 385, "y": groundY - 140},
                { "type": "reward", "x": 1300, "y": groundY - 50},
                { "type": "reward", "x": 1000, "y": groundY - 50},                
            ]
        };
        window.levelData = levelData;
        // set this to true or false depending on if you want to see hitzones
        game.setDebugMode(true);

        // TODO 6 and on go here
        // BEGIN EDITING YOUR CODE HERE

        function createSawblade(x,y){
        var hitZoneSize = 25; //creates the size of the hitzone
        var damageFromObstacle = 10; //sets how much damage the obstacle will inflict
        var sawBladeHitZone = game.createObstacle(hitZoneSize, damageFromObstacle); //creates the obstacle itself
        sawBladeHitZone.x = x; //the x value of the hitzone
        sawBladeHitZone.y = y; //the y value of the hitzone
        game.addGameItem(sawBladeHitZone); //adds the hitzone to the game
        
        var obstacleImage = draw.bitmap('img/sawblade.png'); //draws the image and stores it
        sawBladeHitZone.addChild(obstacleImage); //adds the image to the hitzone so we can see it
        obstacleImage.x = -25 //lines up the x of the image with the hitzone
        obstacleImage.y = -25 //lines up the y of the image with the hitzone
        sawBladeHitZone.rotationalVelocity = 5;
        }



        function createEnemy(x, y) {
            var enemy = game.createGameItem('enemy',25); //creates the enemy game item and stores it
            var redSquare = draw.rect(50,50,'red'); //draws the  enemy game item
            redSquare.x = -25; 
            redSquare.y = -25;
            enemy.addChild(redSquare);
            enemy.x = x;
            enemy.y = y;
            game.addGameItem(enemy);
            enemy.velocityX = -1; //moves the enemy one pixel to the right
            enemy.rotationalVelocity = 10; //rotates the enemy image 10 pixels

            //this function detects if the enemy collides with Hallebo and executes health decrease
            enemy.onPlayerCollision = function() {
                game.changeIntegrity(-20); //decreases your health
            };

            //this function detetcs if the projectile collides with Halle and it will increase the score
            enemy.onProjectileCollision = function(){
                game.increaseScore(10);
                console.log("Enemy has been hit");
                enemy.fadeOut();
            };
        }

        function createReward(x, y) {
            var reward = game.createGameItem('reward',25); //creates the reward game item and stores it
            var blueSquare = draw.rect(50,50,'blue'); //draws the  reward game item
            blueSquare.x = -25; 
            blueSquare.y = -25;
            reward.addChild(blueSquare);
            reward.x = x;
            reward.y = y;
            game.addGameItem(reward);
            reward.velocityX = -1; //moves the reward one pixel to the right
            reward.rotationalVelocity = 10; //rotates the reward image 10 pixels

            //this function detects if the reward collides with Hallebo and executes health decrease
            reward.onPlayerCollision = function() {
                game.changeIntegrity(10); //decreases your health
                console.log("reward has been hit");
                reward.fadeOut();
                game.increaseScore(10);
            };

        }

        for(var i = 0; i < levelData.gameItems.length; i++){
            var gameItem = levelData.gameItems[i];
            if(gameItem.type === "sawblade"){
                createSawblade(gameItem.x, gameItem.y)
            };
            if(gameItem.type === "enemy"){
                createEnemy(gameItem.x, gameItem.y)
            };
            if(gameItem.type === "reward"){
                createReward(gameItem.x, gameItem.y)
            };
        }
        // DO NOT EDIT CODE BELOW HERE
    }
};

// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if((typeof process !== 'undefined') &&
    (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports = level01;
}
