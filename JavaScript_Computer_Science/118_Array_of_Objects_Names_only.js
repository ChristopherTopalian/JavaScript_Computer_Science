javascript:(
/* Array_of_Objects_Names_only.js */
function()
{
    let people =
    [
        {
            name: 'Melissa',
            date: '1980/03/01',
        },

        {
            name: 'Tabitha',
            date: '1983/04/05'
        }
    ];

    function showData(whichArray)
    {
        let x = 0;

        while (x < whichArray.length)
        {
            console.log(whichArray[x].name);

            x += 1;
        }
    }

    showData(people);

}());

/*
Melissa
Tabitha
*/

/* Dedicated to God the Father */
/* All Rights Reserved Christopher Andrew Topalian Copyright 2000-2024 */
/* https://github.com/ChristopherTopalian */
/* https://github.com/ChristopherAndrewTopalian */
/* https://sites.google.com/view/CollegeOfScripting */

