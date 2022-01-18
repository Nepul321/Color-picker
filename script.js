const container = document.getElementById("container");
var input = document.getElementById("int");
var int = document.getElementById("colors");
const ok = document.getElementById("ok");
const cm = document.getElementById("copied-message");
const color = document.getElementById("color");
const intro = document.getElementById("intro");

input.addEventListener("input", () => {
  container.style.backgroundColor = input.value;
  let trcolor = input.value;
  int.value = trcolor;
});

const btn = document.getElementById("btn");

btn.addEventListener("click", () => {
  int.select();
  int.setSelectionRange(0, 99999);
  document.execCommand("copy");
  cm.style.display = "flex";
  color.innerHTML = input.value;

  cm.style.backgroundColor = input.value;
  intro.style.backgroundColor = randomBg();
});

ok.addEventListener("click", () => {
  cm.style.display = "none";
});

function randomBg() {
  return `hsl(${Math.floor(Math.random() * 360)}, 100%, 50%)`;
}
