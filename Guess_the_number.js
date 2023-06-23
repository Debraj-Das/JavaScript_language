const input = require("readline-sync").question;
const print = console.log;

const num = Math.floor(Math.random() * 100) + 1;
let guess,
  choic = 1;

while (true) {
  guess = Number(input("Enter your guess : "));
  if (guess == num) {
    print("You guessed it right");
    print("You took " + choic + " choices to guess the number");
    break;
  } else if (guess > num) print("Your guess is greater than the number");
  else print("Your guess is smaller than the number");
  choic++;
}
print("Done !");
