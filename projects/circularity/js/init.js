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

        var circle; // undefined variable that will hold an indivisual circle
        var circles = []; //empty array that will later hold multiple circles

        // TODO 2 : Create a function that draws a circle 
        
        function drawCircle(){
            
            circle = draw.randomCircleInArea(canvas, true, true, '#999', 2); //calls the random circle function, creates a circle, and stores in the information
            physikz.addRandomVelocity(circle, canvas, 5 ,5); //adds random veolcity
            view.addChild(circle); //add circle to canvas
            circles.push(circle); //push method pushes indivisual circle to circle array
        }

        // TODO 3 / 8 : Call the drawCircle() function 

        //manually, repetively draws the circles each tme the function is called
       for(var i = 0; i < 150; i++){
        drawCircle();
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

            for(var k = 0;k < 150; k++){
                physikz.updatePosition(circles[k]);
            }
           

            
            // TODO 5 / 10 : Call game.checkCirclePosition() on your circles.
           
            for(var j = 0; j < 150; j++){
                game.checkCirclePosition(circles[j]);
            }


            // TODO 9 : Iterate over the array
           
            
        }
    
        /* 
        This Function should check the position of a circle that is passed to the 
        Function. If that circle drifts off the screen, this Function should move
        it to the opposite side of the screen.
        */
        game.checkCirclePosition = function(circle) {

            // if the circle has gone past the RIGHT side of the screen then place it on the LEFT
            if ( circle.x > canvas.width ) {
                circle.x = 0;
            } 
            //if the circle has gone off top top of the screen, place it on the bottom
             if ( circle.y > canvas.height ) {
                circle.y = 0;
            } 
            // if the circle has gone past the LEFT side of the screen then place it on the RIGHT
             if ( circle.x < 0 ){
                circle.x = canvas.width;
            } 
            //if the circle has gone off bottom top of the screen, place it on the top
             if ( circle.y < 0 ){
                circle.y = canvas.height;
            }

            
            // TODO 6 : YOUR CODE STARTS HERE //////////////////////
            

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
