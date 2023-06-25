const input = require("readline-sync").question;
const print = console.log;
/*
//* Synchronous Example
// First take input from the user one by one then print the output in terminal
let frist = input("Enter your first name: ");
let last = input("Enter your last name: ");
print(`Your full name is ${frist} ${last}.`)


//* Asynchronous Example - SetTimeout
// Start print then end print then middle print(beacuse of setTimeout function is asynchronous)
print("start");
setTimeout(() => {
    print("middle");
}, 2000);
print("end");
*/


