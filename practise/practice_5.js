const input = require("readline-sync").question;
const print = console.log;

let arr = [2, 4, 34, 53, 24, 1, 4, 5, 2, 1, 4, 53, 65, 62, 41, 34, 53];

//* push a number to the end of the array from taking input from user
let a = Number(input());
arr.push(a);
print(arr);

//* run the loop until user enters 0
let b ;
do{
    b = Number(input());
    arr.push(b);
}while(b != 0)

print(arr);

//* filter the array and store only odd numbers to new array

let c = arr.filter((item) => {
    return item % 2 ;
});

print(c);


//* map the square of each element of the array to new array
let d = arr.map((item) => {
  return item * item;
});
print(d);


//* reduce the array to multiple of all elements of the array
let e = arr.reduce((i , j)=>
{
    return i * j;
})
print(e);
