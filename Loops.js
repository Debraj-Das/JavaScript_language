const input = require("readline-sync").question;
const print = console.log;

let num = input("Enter a number: ");
// for loop template
for (let i = 0; i < num; i++) {
  print(i + 1);
}

// for In loop template (it use for key value pair object)

const obj = {
  name: "John",
  age: 30,
  city: "New York",
};

for (let key in obj) {
  print(key, " is value : ", obj[key]);
}

// for of loop template (it use for array)

let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
for (let value of arr) {
  print(value);
}

// while loop template
let i = 0;
while (i < num) {
  print(i+1);
  i++;
}


// Do while loop template

do {
  num = input("Enter a number: ");
} while (num < 10);

print(num);
