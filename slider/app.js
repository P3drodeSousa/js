let slider = document.querySelector(".slider");
let innerSlider = document.querySelector(".slider-inner");

let pressed = false;
let startx;
let x;

window.addEventListener("mouseup", () => {
  pressed = false;
});

slider.addEventListener("mousedown", function (e) {
  pressed = true;
  startx = e.offsetX - innerSlider.offsetLeft;
  slider.style.cursor = "grabbing";
});

slider.addEventListener("mouseenter", function (e) {
  slider.style.cursor = "grab";
});

slider.addEventListener("mouseleave", function (e) {
  slider.style.cursor = "default";
});

slider.addEventListener("mouseup", function (e) {
  slider.style.cursor = "default";
});

slider.addEventListener("mousemove", function (e) {
  if (!pressed) return;
  e.preventDefault();

  x = e.offsetX;

  innerSlider.style.left = `${x - startx}px`;
  checkBoundary();
});

function checkBoundary() {
  let outer = slider.getBoundingClientRect();
  let inner = innerSlider.getBoundingClientRect();

  if (parseInt(innerSlider.style.left) > 0) {
    innerSlider.style.left = "0px";
  } else if (inner.right < outer.right) {
    innerSlider.style.left = `-${inner.width - outer.width}px`;
  }
}
