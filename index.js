var counter = 0;
var btn = document.getElementsByClassName("btn")[0];
var reset = document.getElementsByClassName("reset")[0];
var screen = document.querySelector(".screen p");
screen.innerHTML = window.localStorage.getItem("count");
var StoredCounter = window.localStorage.getItem("count");

btn.addEventListener("click", function () {
  counter++;
  window.localStorage.setItem("count", counter);
  screen.innerHTML = window.localStorage.getItem("count");
});
reset.addEventListener("click", function () {
  counter = 0;
  window.localStorage.setItem("count", counter);
  screen.innerHTML = window.localStorage.getItem("count");
});
