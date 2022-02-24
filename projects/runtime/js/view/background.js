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
        
        // ANIMATION VARIABLES HERE:
        
        var tree;
        var buildings = [];
     
        // called at the start of game and whenever the page is resized
        // add objects for display in background. draws each image added to the background once
        function render() {
            background.removeAllChildren();

            // TODO: 2 - Part 2
            // this fills the background with a obnoxious yellow
            // you should modify this to suit your game
            var backgroundFill = draw.rect(canvasWidth,groundY,'#9B59B6'); //creates a varible called backgroundFill and stores a rectange as acts as our background
            background.addChild(backgroundFill);
            
            // TODO: 3 - Add a moon and starfield
            
            //everytime the loop runs it creates a circle with a random x and y respective to the canvas and is added to the background
              for(var i = 0; i <=100; i++){
                 var circle = draw.circle(3,'white','LightGray',2);
                 circle.x = canvasWidth*Math.random();
                 circle.y = groundY*Math.random();
                 background.addChild(circle);
              }
           
            
            var moon = draw.bitmap('img/moon.png'); //a variable moon that holds the bitmap drawing of the moon
            moon.x = canvasWidth - 250; //holds the x value of the moon
            moon.y = canvasHeight - 960; //holds the y value of the moon
            moon.scaleX = 0.6; //changes the x scale of the moon
            moon.scaleY = 0.6; //changes the y scale of the moon
            background.addChild(moon); //adds the moon to the background
           
            // TODO 5: Part 1 - Add buildings!     Q: This is before TODO 4 for a reason! Why?
            
            for(var i=0; i < 10; i++) {
                var buildingHeight = 350; //declares a variable  called buildingHeight thats holds the height in pixels
                var building = draw.rect(75,buildingHeight - 3,'BlueViolet','DarkViolet',3); //declares a viarable called building which will hold the building
                building.x = 200*i; //adds 200 pixels to the x value every time loop runs
                building.y = groundY-buildingHeight; //sets the buildings y position by subtracting the height of the building from the ground
                background.addChild(building); //adds the building to the background so we can see it
                buildings.push(building); //pushes the buildings data to the buildings array to be stored in an index
            }
            
            // TODO 4: Part 1 - Add a tree
            tree = draw.bitmap('img/tree.png');
            tree.x = canvasWidth - 300;
            tree.y = groundY - 235;
            background.addChild(tree);
            tree.scaleX
            tree.scaleY
            
        } // end of render function - DO NOT DELETE
        
        
        // Perform background animation
        // called on each timer "tick" - 60 times per second
        function update() {
            // useful variables
            var canvasWidth = app.canvas.width;
            var canvasHeight = app.canvas.height;
            var groundY = ground.y;
            
            // TODO 4: Part 2 - Move the tree!
            
            tree.x = tree.x - 1; //takes the current value of tree.x and subtracts 1 pixel 60/second to move the tree to the left
            if(tree.x < -200) {
                tree.x = canvasWidth; //if the tree.x is less than 200, the tree goes back to the cavas width
            }
            
            // TODO 5: Part 2 - Parallax
            

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
