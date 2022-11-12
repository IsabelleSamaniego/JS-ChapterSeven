"use strict";
/*    JavaScript 7th Edition
      Chapter 7
      Project 07-03

      Project to create a New Year's Eve countdown clock
      Author: Isabelle Samaniego
      Date:   October 28, 2022

      Filename: project07-03.js
*/

let currentTime = document.getElementById("currentTime");
let daysLeftBox = document.getElementById("days");
let hrsLeftBox = document.getElementById("hours");
let minsLeftBox = document.getElementById("minutes");
let secsLeftBox = document.getElementById("seconds");

// 3. add command to run countdown() every 1000 millisecond
const timeID = setInterval(countdown, 1000);

//and add a command that uses the setInterval() method to run the countdown() function every 1000 milliseconds.

// 4. create countdown function
function countdown() {

    // 5. declare now variable
    var now = new Date();

    // 6. apply toLocaleString() to now variable
    now.toLocaleString(currentTime);

    // 7. declare newYear variable and store given date
    var newYear = new Date(2024, 0, 1);

    // 8. use getFullYear() from the now variable and store in nextYear variable
    var nextYear = now.getFullYear() + 1;

    // 9. method to change the year value of newYear
    newYear.setFullYear(nextYear);

    // 10. calculations to determine the days, hours, minutes, and seconds left until the New Year
    // 10.a. calculate the days left
    let daysLeft = (newYear - now)/(1000*60*60*24);

    // 10.b. calculate hrsLeft = fraction part of the daysLeft
    let hrsLeft = (daysLeft - Math.floor(daysLeft)) * 24;

    // 10.c. calculate minsLeft = fraction part of the hrsLeft
    let minsLeft = (hrsLeft - Math.floor(hrsLeft)) * 60;

    // 10.d. calculate secsLeft = fraction part of the minsLeft
    let secsLeft = (minsLeft - Math.floor(minsLeft)) * 60;

    // 11. display results in the web page clock
    daysLeftBox.textContent = Math.floor(daysLeft);
    hrsLeftBox.textContent = Math.floor(hrsLeft);
    minsLeftBox.textContent = Math.floor(minsLeft);
    secsLeftBox.textContent = Math.floor(secsLeft);

}