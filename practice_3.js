const input = require("readline-sync").question;
const print = console.log;

const marks = {
  physics: 98,
  maths: 95,
  chemistry: 91,
  english: 93,
  computer: 99,
  biology: 90,
};

// find the average marks of the student using for loop

let sum = 0;
for (let i = 0; i < Object.keys(marks).length; i++) {
  sum += Object.values(marks)[i];
}

print(sum);

let arr = new Array(5);

for (let i = 0; i < 5; i++) {
  arr[i] = i + 1;
}
for (let i = 0; i < 5; i++) {
  print(arr[i]);
}

arr.push(6);
print(arr);


/*
* differ type of object 
1. Array
2. map
3. set
4. default object


*/
