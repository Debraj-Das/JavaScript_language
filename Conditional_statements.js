// taking input from user
const readline = require("readline-sync");

/*
* conditional statements
    1. if else statement
    2. switch case statement
    3. ternary operator

    javascript condition statement are same as C/C++ condition statement completely

*/


let a = readline.question("Enter your age : ");

a = Number(a);

// if else statement

if (a < 18) console.log("You are not eligible for voting");
else if (a > 100) console.log("You are too old to vote");
else console.log("You are eligible for voting");

console.log("Done if else statement");

// switch case statement

let no = readline.question("Enter a food : ");

switch (no) 
{
    case "pizza":
        console.log("Pizza is my favourite food");
        break;
    case "burger":
    case "Burger":
        console.log("Burger is my favourite food");
        break;
    case "chicken":
        console.log("Chicken is my favourite food");
        break;
    default:
        console.log("I don't like this food");
        break;
}

console.log("Done switch case statement");

// ternary operator

let age = readline.question("Enter your age : ");
age = Number(age);

let result = age >= 18 ? "You are eligible for voting" : "You are not eligible for voting";
console.log(result);


