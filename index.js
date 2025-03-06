var counter = Number(window.localStorage.getItem("count")) || 0;
var btn = document.getElementsByClassName("btn")[0];
var reset = document.getElementsByClassName("reset")[0];
var screen = document.querySelector(".screen p");
screen.innerHTML = counter;

btn.addEventListener("click", function () {
  counter++;
  window.localStorage.setItem("count", counter);
  screen.innerHTML = counter;
  btn.classList.toggle("clicked-btn");
  setTimeout(function () {
    btn.classList.toggle("clicked-btn");
  }, 200);
});

reset.addEventListener("click", function () {
  counter = 0;
  window.localStorage.setItem("count", counter);
  screen.innerHTML = counter;
  reset.classList.toggle("clicked-btn");
  setTimeout(function () {
    reset.classList.toggle("clicked-btn");
  }, 200);
});
