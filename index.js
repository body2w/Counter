var counter = 0;
var btn = document.getElementsByClassName("btn")[0];
var reset = document.getElementsByClassName("reset")[0];
var screen = document.querySelector(".screen p");
screen.innerHTML = counter;

btn.addEventListener("click", function () {
  counter++;
  screen.innerHTML = counter;
});
reset.addEventListener("click", function () {
  counter = 0;
  screen.innerHTML = counter;
});
