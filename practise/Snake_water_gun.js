const input = require("readline-sync").question;
const print = console.log;

print("*****Welcome to Snake Water Gun Game******");
let number_of_Game = Number(
  input("Enter the number of game you want to play: ")
);

print(`\nYou have ${number_of_Game} chances to play this game`);
let userScore = 0,
  computerScore = 0,
  tie = 0,
  user,
  com;
print();
print("Enter 1 for Snake");
print("Enter 2 for Water");
print("Enter 3 for Gun");

for (let i = 0; i < number_of_Game; i++) {
  com = Math.floor(Math.random() * 3) + 1;
  user = input(`${i + 1} Enter your choice: `);
  user = (Number(user) % 3) + 1;
  if (
    (user == 1 && com == 2) ||
    (user == 2 && com == 3) ||
    (user == 3 && com == 1)
  )
    userScore++;
  else if (
    (user == 1 && com == 3) ||
    (user == 2 && com == 1) ||
    (user == 3 && com == 2)
  )
    computerScore++;
  else tie++;
}

print("Game is Over*********");
print("\nResult of the game is: ");
print(`Your Score: ${userScore}`);
print(`Computer Score: ${computerScore}`);
print(`Tie: ${tie}`);

if (userScore > computerScore) print("You Won the game");
else if (userScore < computerScore) print("You Lose the game");
else print("Game is Tie");
