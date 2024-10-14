javascript:(
/* Trigonometry_Ball_moves_in_figure_8_pattern.js  */
function()
{
    /* create a ball element */
    let ball = document.createElement('div');
    ball.style.position = 'absolute';
    ball.style.width = '50px';
    ball.style.height = '50px';
    ball.style.backgroundColor = 'blue';
    ball.style.borderRadius = '50%';
    document.body.append(ball);

    /* set initial pos and params for figure eight motion */
    let angle = 0;

    let xPos = 400;
    let yPos = 150;

    let radius = 100;

    function updatePosition()
    {
        let x = xPos + radius * Math.cos(angle);
        let y = yPos + radius * Math.sin(2 * angle);

        /* use sine with double the angle for the figure-eight */
        ball.style.left = x + 'px';
        ball.style.top = y + 'px';

        /* angle increment for speed */
        angle += 0.02;

        requestAnimationFrame(updatePosition);
    }

    /* start the animation */
    updatePosition();

}());

/* Dedicated to God the Father */
/* All Rights Reserved Christopher Andrew Topalian Copyright 2000-2024 */
/* https://github.com/ChristopherTopalian */
/* https://github.com/ChristopherAndrewTopalian */
/* https://sites.google.com/view/CollegeOfScripting */

