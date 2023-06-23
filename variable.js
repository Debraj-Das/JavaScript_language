/*
*There are Seven Type of Primitive Data Type in JavaScript
*  NN  SS BB U
N NULL
N NUMBER

S Symbol
S STRING

B BOOLEAN
B BIGINT

U UNDEFINED

*/

let NULL_TYPE = null;
let NUMBER_TYPE = 10;
let STRING_TYPE = "Hello World";
let SYMBOL_TYPE = Symbol("Hello World");
let BOOLEAN_TYPE = true;
let BIGINT_TYPE = 10n; // BigInt("10") also can be used to create BigInt type (BigInt is new in ES2020)
let UNDEFINED_TYPE = undefined; // if you don't assign any value to variable then it will be undefined

console.log(NULL_TYPE);
console.log(NUMBER_TYPE);
console.log(STRING_TYPE);
console.log(SYMBOL_TYPE);
console.log(BOOLEAN_TYPE);
console.log(BIGINT_TYPE);
console.log(UNDEFINED_TYPE);

// For Big Interger
BIGINT_TYPE = BigInt("23465421213243540123434893723589746353897423589") + 11n;
console.log(BIGINT_TYPE);

// BigIntegers for use for very large numbers (more than 2^53 - 1)

/*
* Object is a non primitive data type
object is a collection of properties (Key Value Pair)

*/

let OBJECT_TYPE = {
  name: "Debraj",
  age: 21,
  job: false,
  // Object can be nested
  address: {
    city: "Contai",
    country: "India",
  },
  work: "Engineer Student",
};

console.log(OBJECT_TYPE["work"]); // Work as like Map in C++ or Java
console.log(OBJECT_TYPE.address.city);
console.log(OBJECT_TYPE.name);
console.log(OBJECT_TYPE["sdf"]); // if key is not present then it will return undefined

/*
let a = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

let b = {
  name: "Rahul",
  age: 20,
};

console.log(typeof a);
console.log(typeof b);

let m = new Map();

console.log(typeof m);

*/
