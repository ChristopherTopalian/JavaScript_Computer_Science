javascript:(
/* Trigonometry_Tangent.js */
function()
{
    function getAngleInDegree()
    {
        let angle = parseFloat(prompt("Enter an angle in degrees:"));

        return angle;
    }

    function convertDegreeToRadian(angle)
    {
        if (!isNaN(angle))
        {
            /* angle in degree converted to radian */
            let radians = angle * (Math.PI / 180);

            return radians;
        }
        else
        {
            alert("Angle wasn't entered in numbers");
        }
    }

    let theRadians = convertDegreeToRadian(getAngleInDegree());

    function tangentOfAngle()
    {
        let tangent = Math.tan(theRadians).toFixed(2);

        return tangent;
    }

    console.log(tangentOfAngle());

    alert(tangentOfAngle());

}());

/* Dedicated to God the Father */
/* All Rights Reserved Christopher Andrew Topalian Copyright 2000-2024 */
/* https://github.com/ChristopherTopalian */
/* https://github.com/ChristopherAndrewTopalian */
/* https://sites.google.com/view/CollegeOfScripting */

