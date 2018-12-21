/**
 * * J White
 * * 12/13/2018
 * * Goal: Write a JavaScript program to get the current date.
 * * Expected Output : mm-dd-yyyy, mm/dd/yyyy or dd-mm-yyyy, dd/mm/yyyy
 */

 // Completed - 6:45 PM
//Variable Declaration
var todaysDate = new Date();                          // HOLDS CURRENT DATE AS TAKEN FROM THE SYSTEM
var month = todaysDate.getMonth() + 1;                // Returns the month (from 0-11)
var day = todaysDate.getDate() + "0";                 // Returns the day of the month (from 1-31)
var year = todaysDate.getFullYear();                  // Returns the year

//Prints out date in different formats
console.log(month + "-" + day + "-" + year);
console.log(month + "/" + day + "/" + year);
console.log(day + "-" + month + "-" + year);
console.log(day + "/" + month + "/" + year);

/*
// function to take in input
function currDate(month, day, year)
{
    console.log(month + "-" + day + "-" + year);
    console.log(month + "/" + day + "/" + year);
    console.log(day + "-" + month + "-" + year);
    console.log(day + "/" + month + "/" + year);
}

// test run using input
currDate(1,1,2019)
currDate();
*/

//---------------------------------------------------------------------------------//

/** SECTION
 * HTML Code Solution
 *
<!DOCTYPE html>
  <html>
  <head>
  <meta charset="utf-8">
  <title>Write a JavaScript program to get the current date.</title>
  </head>
  <body>
  </body>
  </html>

//////////////////////////////////////////////////////////////////////////////////////

JavaScript Code

var today = new Date();
var dd = today.getDate();

var mm = today.getMonth()+1;
var yyyy = today.getFullYear();
if(dd<10)
{
    dd='0'+dd;
}

if(mm<10)
{
    mm='0'+mm;
}
today = mm+'-'+dd+'-'+yyyy;
console.log(today);
today = mm+'/'+dd+'/'+yyyy;
console.log(today);
today = dd+'-'+mm+'-'+yyyy;
console.log(today);
today = dd+'/'+mm+'/'+yyyy;
console.log(today);

 */