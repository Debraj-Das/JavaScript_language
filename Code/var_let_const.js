//* Data Types in Javascript

// var keyword used for gobal variable declaration
//* it can be redeclared and updated (so it is not a good practice to use var keyword)
var a = "Debraj Das";
console.log(a);

// let keyword used for local variable declaration
let b = "Debraj Das";
console.log(b);

// const keyword used for constant variable declaration
const c = "Debraj Das";
console.log(c);

/*
c = "nice"; // This will give an error
console.log(c);
*/

//* Scope of var, let and const keyword
function myFunction() {
    let local_var = "nice";
  console.log(local_var);
  console.log(a); // a is a global variable so it can be accessed from anywhere
  const local_const = "nice";
    console.log(local_const);
}

/*
console.log(local_var); // This will give an error because local_var is a local variable(inside a function and declared with let keyword)


console.log(local_const); // This will give an error because local_const is a local variable(inside a function and declared with const keyword)

*/

myFunction();
