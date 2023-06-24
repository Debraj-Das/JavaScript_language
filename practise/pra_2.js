const func = (age) => {
    age = Number(age);
  let welcome = age >= 18 ? true : false;
  if (welcome) alert("You can Drive any car");
  else alert("You can not Drive any car");
  return;
};


let age;
let again = true;
while (again) {
  age = prompt("How old are you?", 18);
  func(age);
  again = confirm("Thanks you,try again?");
}
