var counter = Number(window.localStorage.getItem("count")) || 0;
var btn = document.getElementsByClassName("btn")[0];
var reset = document.getElementsByClassName("reset")[0];
var screen = document.querySelector(".screen p");
screen.innerHTML = counter;

btn.addEventListener("click", function () {
  counter++;
  window.localStorage.setItem("count", counter);
  screen.innerHTML = counter;
});

// زر التصفير
reset.addEventListener("click", function () {
  counter = 0;
  window.localStorage.setItem("count", counter);
  screen.innerHTML = counter;
});
