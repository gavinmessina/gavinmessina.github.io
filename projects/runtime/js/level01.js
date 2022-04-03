var level01 = function (window) {

    window.opspark = window.opspark || {};

    var draw = window.opspark.draw;
    var createjs = window.createjs;

    window.opspark.runLevelInGame = function(game) {
        // some useful constants 
        var groundY = game.groundY;

        // this data will allow us to define all of the behavior of our game
        var levelData = {
            "name": "Robot Romp",
            "number": 1, 
            "speed": -3,
            "gameItems": [
                { "type": "sawblade", "x": 600, "y": groundY - 110},
                { "type": "sawblade", "x": 670, "y": groundY - 110 },
                { "type": "sawblade3", "x": 850, "y": groundY - 20},
                { "type": "sawblade3", "x": 1100, "y": groundY - 20},
                { "type": "sawblade", "x": 1300, "y": groundY - 180},
                { "type": "sawblade", "x": 1300, "y": groundY - 20},
                { "type": "sawblade", "x": 1600, "y": groundY - 140},
                { "type": "sawblade2", "x": 1770, "y": groundY - 120},
                { "type": "sawblade", "x": 2000, "y": groundY - 110 },
                { "type": "sawblade3", "x": 2150, "y": groundY - 25},
                { "type": "sawblade3", "x": 2300, "y": groundY - 20 },
                { "type": "sawblade", "x": 2550, "y": groundY - 110},
                { "type": "sawblade2", "x": 2950, "y": groundY - 110},
                { "type": "sawblade2", "x": 3000, "y": groundY - 110},
                { "type": "sawblade3", "x": 3100, "y": groundY - 20},
                { "type": "sawblade", "x": 3225, "y": groundY - 110},
                { "type": "sawblade3", "x": 3500, "y": groundY - 20},
                { "type": "sawblade", "x": 3625, "y": groundY - 110},
                { "type": "sawblade3", "x": 3750, "y": groundY - 20},
                { "type": "sawblade", "x": 3875, "y": groundY - 110},
                { "type": "sawblade2", "x": 4000, "y": groundY - 20},

                { "type": "enemy", "x": 800, "y": groundY - 50},
                { "type": "enemy", "x": 1000, "y": groundY - 50},
                { "type": "enemy", "x": 1800, "y": groundY - 50},
                { "type": "enemy", "x": 2800, "y": groundY - 50},
                { "type": "enemy", "x": 3500, "y": groundY - 50},
                { "type": "enemy2", "x": 1200, "y": groundY - 50},
                { "type": "enemy2", "x": 2350, "y": groundY - 50},
                { "type": "enemy2", "x": 2750, "y": groundY - 50},
                { "type": "enemy2", "x": 3400, "y": groundY - 50},
                { "type": "enemy3", "x": 4200, "y": groundY - 50},


                { "type": "reward", "x": 2100, "y": groundY - 130},
                { "type": "reward", "x": 1100, "y": groundY - 140}, 
                { "type": "reward2", "x": 1700, "y": groundY - 160}, 
                { "type": "reward", "x": 1450, "y": groundY - 30},
                { "type": "reward2", "x": 2900, "y": groundY - 140},              
            ]
        };
        window.levelData = levelData;
        // set this to true or false depending on if you want to see hitzones
        game.setDebugMode(false);

        // TODO 6 and on go here
        // BEGIN EDITING YOUR CODE HERE

        function createSawblade(x, y){
        var hitZoneSize = 25; //creates the size of the hitzone
        var damageFromObstacle = 10; //sets how much damage the obstacle will inflict
        var sawBladeHitZone = game.createObstacle(hitZoneSize, damageFromObstacle); //creates the obstacle itself
        sawBladeHitZone.x = x; //the x value of the hitzone
        sawBladeHitZone.y = y; //the y value of the hitzone
        game.addGameItem(sawBladeHitZone); //adds the hitzone to the game
        
        var obstacleImage = draw.bitmap('img/astroid.png'); //draws the image and stores it
        sawBladeHitZone.addChild(obstacleImage); //adds the image to the hitzone so we can see it
        obstacleImage.x = -25 //lines up the x of the image with the hitzone
        obstacleImage.y = -25 //lines up the y of the image with the hitzone
        sawBladeHitZone.rotationalVelocity = 5; //roates the sawblade
        }

        function createSawblade2(x, y){
            var hitZoneSize2 = 25; //creates the size of the hitzone
            var damageFromObstacle2 = 50; //sets how much damage the obstacle will inflict
            var sawBladeHitZone2 = game.createObstacle(hitZoneSize2, damageFromObstacle2); //creates the obstacle itself
            sawBladeHitZone2.x = x; //the x value of the hitzone
            sawBladeHitZone2.y = y; //the y value of the hitzone
            game.addGameItem(sawBladeHitZone2); //adds the hitzone to the game
            
            var obstacleImage2 = draw.bitmap('img/black hole.png'); //draws the image and stores it
            sawBladeHitZone2.addChild(obstacleImage2); //adds the image to the hitzone so we can see it
            obstacleImage2.x = -25 //lines up the x of the image with the hitzone
            obstacleImage2.y = -25 //lines up the y of the image with the hitzone
            sawBladeHitZone2.rotationalVelocity = 10; //roates the sawblade
            }

        function createSawblade3(x, y){
            var hitZoneSize3 = 25; //creates the size of the hitzone
            var damageFromObstacle3 = 20; //sets how much damage the obstacle will inflict
            var sawBladeHitZone3 = game.createObstacle(hitZoneSize3, damageFromObstacle3); //creates the obstacle itself
            sawBladeHitZone3.x = x; //the x value of the hitzone
            sawBladeHitZone3.y = y; //the y value of the hitzone
            game.addGameItem(sawBladeHitZone3); //adds the hitzone to the game
        
            var obstacleImage3 = draw.bitmap('img/spike.png'); //draws the image and stores it
            sawBladeHitZone3.addChild(obstacleImage3); //adds the image to the hitzone so we can see it
            obstacleImage3.x = -25 //lines up the x of the image with the hitzone
            obstacleImage3.y = -25 //lines up the y of the image with the hitzone
            sawBladeHitZone3.rotationalVelocity = 0; //roates the sawblade
        }            

            


        //creates enemy
        function createEnemy(x, y) {
            var enemy = game.createGameItem('enemy',25); //creates the enemy game item and stores it
            var redSquare = draw.bitmap('img/space invader.png');  //draws the  reward game item
            redSquare.x = -30; //lines up the x of the image with the hitzone
            redSquare.y = -28; //lines up the y of the image with the hitzone
            enemy.addChild(redSquare); //adds the hitzone to the game
            enemy.x = x; //the x value of the enemy
            enemy.y = y; //the y value of the enemy
            game.addGameItem(enemy); //adds the enemy to the game
            enemy.velocityX = -3; //moves the enemy one pixel to the right
            enemy.rotationalVelocity = 0; //rotates the reward image 10 pixels

            //this function detects if the enemy collides with Hallebo and executes health decrease
            enemy.onPlayerCollision = function() {
                game.changeIntegrity(-20); //decreases your health
            };

            //this function detetcs if the projectile collides with Halle and it will increase the score
            enemy.onProjectileCollision = function(){
                game.increaseScore(30);
                console.log("Enemy has been hit");
                enemy.fadeOut();
            };
        }

        //creates enemy 2
        function createEnemy2(x, y) {
            var enemy2 = game.createGameItem('enemy2',25); //creates the enemy game item and stores it
            var redSquare2 = draw.bitmap('img/ufo.png');  //draws the  reward game item
            redSquare2.x = -30; //lines up the x of the image with the hitzone
            redSquare2.y = -25; //lines up the y of the image with the hitzone
            enemy2.addChild(redSquare2); //adds the hitzone to the game
            enemy2.x = x; //the x value of the enemy
            enemy2.y = y; //the y value of the enemy
            game.addGameItem(enemy2); //adds the enemy to the game
            enemy2.velocityX = -2; //moves the enemy one pixel to the left
            enemy2.rotationalVelocity = 0; //rotates the reward image 10 pixels

            //this function detects if the enemy collides with Hallebo and executes health decrease
            enemy2.onPlayerCollision = function() {
                game.changeIntegrity(-40); //decreases your health
            };

            //this function detetcs if the projectile collides with Halle and it will increase the score
            enemy2.onProjectileCollision = function(){
                game.increaseScore(70);
                console.log("Enemy has been hit");
                enemy2.fadeOut();
            };
        }
        
        //creates enemy 3
        function createEnemy3(x, y) {
            var enemy3 = game.createGameItem('enemy3',25); //creates the enemy game item and stores it
            var redSquare3 = draw.bitmap('img/gantu.png');  //draws the  reward game item
            redSquare3.x = -95; //lines up the x of the image with the hitzone
            redSquare3.y = -95; //lines up the y of the image with the hitzone
            enemy3.addChild(redSquare3); //adds the hitzone to the game
            enemy3.x = x; //the x value of the enemy
            enemy3.y = y; //the y value of the enemy
            game.addGameItem(enemy3); //adds the enemy to the game
            enemy3.velocityX = -2; //moves the enemy one pixel to the left
            enemy3.rotationalVelocity = 0; //rotates the reward image 10 pixels

            //this function detects if the enemy collides with Hallebo and executes health decrease
            enemy3.onPlayerCollision = function() {
                game.changeIntegrity(-90); //decreases your health
            };

            //this function detetcs if the projectile collides with Halle and it will increase the score
            enemy3.onProjectileCollision = function(){
                game.increaseScore(500); 
                console.log("Enemy has been hit");
                enemy3.fadeOut();
            };
        }

        //creates reward
        function createReward(x, y) {
            var reward = game.createGameItem('reward',25); //creates the reward game item and stores it
            var blueSquare = draw.bitmap('img/zelda.png'); //draws the  reward game item
            blueSquare.x = -29; //lines up the x of the image with the hitzone
            blueSquare.y = -25; //lines up the y of the image with the hitzone
            reward.addChild(blueSquare); //adds the hitzone to the game
            reward.x = x; //the x value of the reward
            reward.y = y; //the y value of the reward
            game.addGameItem(reward); //adds the reward to the game
            reward.velocityX = -2; //moves the reward one pixel to the right
            reward.rotationalVelocity = 0; //rotates the reward image 10 pixels

            //this function detects if the reward collides with Hallebo and executes health decrease
            reward.onPlayerCollision = function() {
                game.changeIntegrity(10); //increases your health
                console.log("reward has been hit"); //console logs the reward has been hit to console
                reward.fadeOut();
                game.increaseScore(0); //increases the score
            };

        }

        function createReward2(x, y) {
            var reward2 = game.createGameItem('reward2',25); //creates the reward game item and stores it
            var blueSquare2 = draw.bitmap('img/galaxystar.png'); //draws the  reward game item
            blueSquare2.x = -25; //lines up the x of the image with the hitzone
            blueSquare2.y = -25; //lines up the y of the image with the hitzone
            reward2.addChild(blueSquare2); //adds the hitzone to the game
            reward2.x = x; //the x value of the reward
            reward2.y = y; //the y value of the reward
            game.addGameItem(reward2); //adds the reward to the game
            reward2.velocityX = -2; //moves the reward one pixel to the right
            reward2.rotationalVelocity = 0; //rotates the reward image 10 pixels

            //this function detects if the reward collides with Hallebo and executes health decrease
            reward2.onPlayerCollision = function() {
                game.changeIntegrity(20); 
                console.log("reward has been hit"); 
                reward2.fadeOut();
                game.increaseScore(100); 
            };

        }


        //nicknames the variables to a more simple nickname to create them ingame.
        for(var i = 0; i < levelData.gameItems.length; i++){
            var gameItem = levelData.gameItems[i];
            if(gameItem.type === "sawblade"){
                createSawblade(gameItem.x, gameItem.y)
            };
            if(gameItem.type === "sawblade2"){
                createSawblade2(gameItem.x, gameItem.y)
            };
            if(gameItem.type === "sawblade3"){
                createSawblade3(gameItem.x, gameItem.y)
            };
            if(gameItem.type === "enemy"){
                createEnemy(gameItem.x, gameItem.y)
            };
            if(gameItem.type === "enemy2"){
                createEnemy2(gameItem.x, gameItem.y)
            };
            if(gameItem.type === "enemy3"){
                createEnemy3(gameItem.x, gameItem.y)
            };
            if(gameItem.type === "reward"){
                createReward(gameItem.x, gameItem.y)
            };
            if(gameItem.type === "reward2"){
                createReward2(gameItem.x, gameItem.y)
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
