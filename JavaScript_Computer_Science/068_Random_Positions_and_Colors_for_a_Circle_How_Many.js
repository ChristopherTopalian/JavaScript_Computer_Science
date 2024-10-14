javascript:(
/* Random_Positions_and_Colors_for_a_Circle_How_Many.js */
function()
{
    function createCircle()
    {
        let circle = document.createElement("div");
        circle.id = "circle";
        circle.style.position = "absolute";
        circle.style.width = "20px";
        circle.style.height = "20px";
        circle.style.borderRadius = "50%";
        document.body.append(circle);
        return circle;
    }

    function getRandomPosition()
    {
        let x = Math.floor(Math.random() * window.innerWidth);

        let y = Math.floor(Math.random() * window.innerHeight);

        return {
            x: x,
            y: y
        };
    }

    function getRandomColor()
    {
        let r = Math.floor(Math.random() * 256);
        let g = Math.floor(Math.random() * 256);
        let b = Math.floor(Math.random() * 256);
        return "rgb("+r+", "+g+", "+b+")";
    }

    function moveObject(whichObject)
    {
        let pos = getRandomPosition();

        whichObject.style.backgroundColor = getRandomColor();

        whichObject.style.left = pos.x + "px";
        whichObject.style.top = pos.y + "px";
    }

    function moveObjectRandomPositions(numberOfCircles)
    {
        for (let i = 0; i < numberOfCircles; i++)
        {
            let circle = createCircle();

            moveObject(circle);
        }

        /* move every 1 second */
        setInterval(function()
        {
            let circles = document.querySelectorAll("#circle");

            for (let i = 0; i < circles.length; i++)
            {
                moveObject(circles[i]);
            }
        }, 1000);
    }

    let numberOfCircles = prompt("Enter number of circles to create");

    if (numberOfCircles && !isNaN(numberOfCircles))
    {
        moveObjectRandomPositions(Number(numberOfCircles));
    }
    else
    {
        alert("Enter 1 or higher");
    }

}());

/* Dedicated to God the Father */
/* All Rights Reserved Christopher Andrew Topalian Copyright 2000-2024 */
/* https://github.com/ChristopherTopalian */
/* https://github.com/ChristopherAndrewTopalian */
/* https://sites.google.com/view/CollegeOfScripting */

