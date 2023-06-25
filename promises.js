const input = require("readline-sync").question;
const print = console.log;


const Promise_function = (body) =>
  new Promise((resolve, reject) => body(resolve, reject));

const body = (resolve, reject) => {
  print("I am not resolved yet");
  setTimeout(() => {
    resolve("I am resolved");
  }, 1000);
};

// let p1 = Promise_function(body);

const _then = (data) => {
  print(data);
};

// p1.then(_then);

print(Promise_function(body).then(_then));
