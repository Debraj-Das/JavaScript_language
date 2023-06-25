let time = new Date().toLocaleTimeString();
const element = document.getElementById("clock");

element.innerHTML = time;
console.log(time);

const clock = () => {
  time = new Date().toLocaleTimeString();
  element.innerHTML = time;
  console.log(time);
};

setInterval(clock, 1000);
