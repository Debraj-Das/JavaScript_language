// In Javascript is a Scripting Language like python

// console.log("Hello World"); // print Hello World

// take input from files

const fs = require("fs");

let input = fs.readFileSync("input.txt", "utf-8");

console.log(typeof input);
// console.log(input);

let inputArr = input.split("\n");
console.log(inputArr);

for (let i = 0; i < inputArr.length; i++) {
    inputArr[i] = inputArr[i].split(" ");
//   inputArr[i] = Number(inputArr[i]);
  console.log(inputArr[i]);
  console.log(typeof inputArr[i]);
}
