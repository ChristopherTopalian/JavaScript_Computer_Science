javascript:(
/* Square_Moves_in_Square_Pattern_by_Timer.js */
function()
{
    function createSquare()
    {
        let square = document.createElement('div');
        square.style.position = 'absolute';
        square.style.left = '20px';
        square.style.top = '20px';
        square.style.width = '50px';
        square.style.height = '50px';
        square.style.backgroundColor = 'aqua';
        square.style.transition = 'transform 2s';

        document.body.append(square);
        return square;
    }

    // update square's pos based on direction
    function updateSquarePosition(square, position, direction)
    {
        if (direction === 0)
        {
            position.x += 100; // move right
        }
        else if (direction === 1)
        {
            position.y += 100; // move down
        }
        else if (direction === 2)
        {
            position.x -= 100; // move left
        }
        else if (direction === 3)
        {
            position.y -= 100; // move up
        }

        square.style.transform = 'translate(' + position.x + 'px, ' + position.y + 'px)';

        return (direction + 1) % 4; // update direction (cycle through 0 to 3)
    }

    // start square's movement in a square pattern
    function startSquareMovement(square)
    {
        let position = { x: 20, y: 20 };
        let direction = 0;

        // move square initially
        direction = updateSquarePosition(square, position, direction);

        // keep moving square
        setInterval(function()
        {
            direction = updateSquarePosition(square, position, direction);
        }, 2000);
    }

    // initialize motion
    function initializeSquareMovement()
    {
        let square = createSquare();

        startSquareMovement(square);
    }

    // execute main function
    initializeSquareMovement();

}());

/* Dedicated to God the Father */
/* All Rights Reserved Christopher Andrew Topalian Copyright 2000-2024 */
/* https://github.com/ChristopherTopalian */
/* https://github.com/ChristopherAndrewTopalian */
/* https://sites.google.com/view/CollegeOfScripting */

