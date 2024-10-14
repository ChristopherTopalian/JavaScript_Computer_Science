javascript:(
/* Array_of_Objects_for_loop.js */
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
        let output = 'Name\t\tDate\n';

        for (let x = 0; x < whichArray.length; x++)
        {
            output = output + whichArray[x].name;

            output += "\t";

            output += whichArray[x].date;

            output += "\n";
        }

        console.log(output);

        alert(output);
    }

    showData(people);

}());

/* Dedicated to God the Father */
/* All Rights Reserved Christopher Andrew Topalian Copyright 2000-2024 */
/* https://github.com/ChristopherTopalian */
/* https://github.com/ChristopherAndrewTopalian */
/* https://sites.google.com/view/CollegeOfScripting */

