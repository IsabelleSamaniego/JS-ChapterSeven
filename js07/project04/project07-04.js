"use strict";
/*    JavaScript 7th Edition
      Chapter 7
      Project 07-04

      Project to create a customer queue
      Author: Isabelle Samaniego
      Date:   November 1, 2022

      Filename: project07-04.js
*/

let customers = ["Alisha Jordan","Kurt Cunningham", "Ricardo Lopez", "Chanda Rao",
                 "Kevin Grant", "Thomas Bey", "Elizabeth Anderson", "Shirley Falk",
                 "David Babin", "Arthur Blanding", "Brian Vick", "Jaime Aguilar",
                 "Eileen Rios", "Gail Watts", "Margaret Wolfe", "Kathleen Newman",
                 "Jason Searl", "Stephen Gross", "Robin Steinfeldt", "Jacob Bricker",
                 "Gene Bearden", "Charles Sorensen", "John Hilton", "David Johnson",
                 "Wesley Cho"];

let customerName = document.getElementById("customerName");
let customerList = document.getElementById("customerList");

let addButton = document.getElementById("addButton");
let searchButton = document.getElementById("searchButton");
let removeButton = document.getElementById("removeButton");
let topButton = document.getElementById("topButton");

let status = document.getElementById("status");

generateCustomerList();

// Function to generate the ordered list based on the contents of the customers array
function generateCustomerList() {
   customerList.innerHTML = "";
   for (let i = 0; i < customers.length; i++) {
      let customerItem = document.createElement("li");      
      customerItem.textContent = customers[i];     
      customerList.appendChild(customerItem);
   }
}

// 3. add an onclick event handler to the addButton
addButton.addEventListener("click", function() {

    // 3.a. use the push() method to add the value of the 
    // customerName object to the end of the customers array
    customers.push(customerName.value);

    // 3.c. change the text of status
    status.innerHTML = (customerName.value) + " added to the end of the queue";

    // 3.b. run the generateCustomrList() to update contents of ordered list
    generateCustomerList();

});


// 4. searchButton onclick event
searchButton.addEventListener("click", function() {

    // 4.a. locate the index of the array whose value equals customerName value
    let place = customers.indexOf(customerName.value) + 1;

    // 4.b. if else statement place variable
    if (place === 0) {
        status.innerHTML = (customerName.value) + " is not found in the queue";
    } else {
        status.innerHTML = (customerName.value) + " found in position " + place + " of the queue";
    }

});


// 5. removeButton onclick event
removeButton.addEventListener("click", function() {
    
    var index = customers.indexOf(customerName.value)

    // 5.b. if statement for index
    if (customers.indexOf(customerName.value) != "-1") {
        customers.splice(index, 1);
        status.innerHTML = (customerName.value) + " removed from the queue";
        generateCustomerList();
    } else {
        status.innerHTML = (customerName.value) + " is not found in the queue";
    }
});


// 6. topButton onclick event
topButton.addEventListener("click", function() {

    var topCustomer = customers.shift();
    status.innerHTML = topCustomer + " from the queue";
    generateCustomerList();

});