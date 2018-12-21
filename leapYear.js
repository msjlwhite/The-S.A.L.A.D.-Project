/** SECTION 
 * * J White
 * * 12/13/2018
 * * Goal - Write a JavaScript program to determine whether a given year is a leap year 
 * * in the Gregorian calendar. 
 */

 // Variable Declaration
var currYr;             //* holds the 

function leapYear (currYr)
{
    if (currYr % 4 === 0)
    {
        console.log(currYr + " is a Leap Year on the Gregorian calendar."); 
    }
    else
    {
        console.log(currYr + " is not a Leap Year on the Gregorian calendar."); 
    }

}

//Test Runs
leapYear(2018);
leapYear(2019);
leapYear(1984);
leapYear(1988);
leapYear(2020);
leapYear(2017);