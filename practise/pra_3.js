const func = (age) => {
  age = Number(age);
  if (age < 0) {
    console.error("Age can not be negative");
    return true;
  }
  let welcome = age >= 18 ? true : false;
  if (welcome) alert("You can Drive any car");
  else alert("You can not Drive any car");
  return false;
};

let age;
let again = true;
while (again) {
  age = prompt("How old are you?", 18);
  if (func(age)) break;
  again = confirm("Thanks you,try again?");
}
