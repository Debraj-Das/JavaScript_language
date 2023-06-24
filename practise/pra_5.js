let n = prompt("Enter the color number : ");

n = Number(n);

switch (n) {
  case 1:
    document.body.style.backgroundColor = "red";
    break;
  case 2:
    document.body.style.backgroundColor = "green";
    break;
  case 3:
    document.body.style.backgroundColor = "blue";
    break;
  default:
    document.body.style.backgroundColor = "white";
}
