const colors = ["blue", "green", "red", "violet", "yellow"];

const body = document.querySelector("body");
const boton = document.querySelector("input");

boton.addEventListener("click", changeBackground);

function changeBackground() {
  const colorIndex = parseInt(Math.random() * colors.length);

  body.style.backgroundColor = colors[colorIndex];
}
