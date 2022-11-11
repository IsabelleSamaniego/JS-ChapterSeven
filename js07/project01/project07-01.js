"use strict";
/*    JavaScript 7th Edition
      Chapter 7
      Project 07-01

      Project to validate a form used for setting up a new account
      Author: Isabelle Samaniego
      Date:   October 28, 2022

      Filename: project07-01.js
*/

let signupForm = document.getElementById("signup");

signupForm.addEventListener("submit", function(e) { 

   // 4. prevent browser from responding to a submit event
   e.preventDefault() ;

   let pwd = document.getElementById("pwd").value;
   let feedback = document.getElementById("feedback");

    // 5. regular expression literal
    let regex1 = /[A-Z]/;
    let regex2 = /[0-9]/;
    let regex3 = /[!$#%]/;

    // 6. if else statement
    if (pwd.length < 8) {
        feedback.textContent = "Your password must be at least 8 characters.";
    } else if (!regex1.test(pwd)) { // test method
        feedback.textContent = "Your password must include an uppercase letter.";
    } else if (!regex2.test(pwd)) {
        feedback.textContent = "Your password must include a number.";
    } else if (!regex3.test(pwd)) {
        feedback.textContent = "Your password must include one of the following: !$#%.";
    } else {
        // submit method
        signupForm.submit();
    }
});