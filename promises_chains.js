const input = require("readline-sync").question;
const print = console.log;

const promise = (_body, _then, _catch) => {
  if (!_body) throw new Error("Promise must have a body");
  const p1 = new Promise((resolve, reject) => _body(resolve, reject));
  if (_then && _catch) return p1.then(_then).catch(_catch);
  else if (_then) return p1.then(_then);
  else if (_catch) return p1.catch(_catch);
  else return p1;
};
promise();

const hello1 = (resolve, reject) => {
  print("Hello 1");
  setTimeout(() => {
    resolve("Hello 1 resolved");
  }, 1000);
};

const hello1_then = (data) => {
  print(data);
  return promise(hello2);
};

const hello1_catch = (data) => {
  print("Hello 1 catch");
  print(data);
};

const hello2 = (resolve, reject) => {
  print("Hello 2");
  setTimeout(() => {
    resolve("Hello 2 resolved");
    // reject("Hello 2 resolved");
  }, 1000);
};

const hello2_catch = (data) => {
  print("Hello 2 catch");
  print(data);
};

const hello2_then = (data) => {
  print(data);
};

promise(hello1, hello1_then, hello1_catch)
  .then(hello2_then)
  .catch(hello2_catch);
