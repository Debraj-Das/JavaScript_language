const input = require("readline-sync").question;
const print = console.log;
const inn = (s) => Number(input(s));
const ins = (s) => input(s).trim();
const inb = (s) => input(s).trim() === "true";
const inbn = (s) => Number(input(s)) === 1;
const inbi = (s) => BigInt(input(s).trim());

const add = (a, b) => a + b;

let a = inn();
let b = inn();

print(add(a, b));

let c = inbi("Enter the big integer: ");
print(c);

a = ins("Enter the string: ");
print(a);

b = inb("Enter the boolean: ");
print(b);

c = inbn("Enter the boolean: ");
print(c);



main();

function main() {
  print("Hello World");
  print("nice to you meet you");
}
