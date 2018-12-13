/**SECTION
 * J White
 * 12/12/18 - 12/13/2018
 * Write a JavaScript program to display the current day and time in the following format.
 * Sample Output : Today is : Tuesday. 
 * Current time is : 10 PM : 30 : 38 
 */

// TIME Completed 4:30 PM - 12.13.2018
// variable declaration
var todaysDate = new Date();                          // HOLDS CURRENT DATE AS TAKEN FROM THE SYSTEM
var today = todaysDate.getDay();                      // Returns the day of the week (from 0-6)
var hourNow = todaysDate.getHours();                  // Returns the hour (from 0-23)
var minNow = todaysDate.getMinutes();                 // Returns the minutes (from 0-59)
var secNow = todaysDate.getSeconds();                 // Returns the seconds (from 0-59)
var newHour = hourNow - 12;                           // Takes time from 24 hours to 12 hours

//Converts the integer value from 'today' and prints out its text day of the week equalivent.
switch(today)
{
    case 0: weekDay = "Sunday";
    break;
    case 1: weekDay = "Monday";
    break;
    case 2: weekDay = "Tuesday";
    break;
    case 3: weekDay = "Wednesday";
    break;
    case 4: weekDay = "Thursday";
    break;
    case 5: weekDay = "Friday";
    break;
    case 6: weekDay = "Saturday";
    break;

}

// prints out the current weekday.
console.log("Today is: " + weekDay + "."); //


// check to convert the 24 hours into 12 hour time then prints out the time for AM or PM
if (hourNow > 12 && newHour < 13)
{
    console.log(newHour + " PM : " + minNow + ": " + secNow);   
}
else
{
    console.log(hourNow  + " AM : " + minNow + ": " + secNow);
}

//Old Code
//var weekDay = 0;
//var ;
//getTime();
// var timeOffset = todaysDate.getTimezoneOffset();
//for (i=0; i>hourNow)
    // var newHour = hourNow - 12;
   // for (i=hourNow; i<=newHour; i++)
    //    {


//Test Runs
//console.log(today)
//console.log(hourNow + " : " + minNow);
//console.log(timeOffset);
//console.log(timeOffset * todaysDate.getUTCHours());

//-------------------------------------------------------------------------//

// Solution ---> 4:31 PM
// HTML Code Solution
// <!DOCTYPE html>
//   <html>
//   <head>
//   <meta charset="utf-8">
//   <title>JavaScript current day and time</title>
//   </head>
//   <body></body>
// </html>


// JavaScript Code Solution
// var today = new Date();
//   var day = today.getDay();
//   var daylist = ["Sunday","Monday","Tuesday","Wednesday ","Thursday","Friday","Saturday"];
//   console.log("Today is : " + daylist[day] + ".");
//   var hour = today.getHours();
//   var minute = today.getMinutes();
//   var second = today.getSeconds();
//   var prepand = (hour >= 12)? " PM ":" AM ";
//   hour = (hour >= 12)? hour - 12: hour;
//   if (hour===0 && prepand===' PM ') 
//   { 
//   if (minute===0 && second===0)
//   { 
//   hour=12;
//   prepand=' Noon';
//   } 
//   else
//   { 
//   hour=12;
//   prepand=' PM';
//   } 
//   } 
//   if (hour===0 && prepand===' AM ') 
//   { 
//   if (minute===0 && second===0)
//   { 
//   hour=12;
//   prepand=' Midnight';
//   } 
//   else
//   { 
//   hour=12;
//   prepand=' AM';
//   } 
//   } 
// console.log("Current Time : "+hour + prepand + " : " + minute + " : " + second);
