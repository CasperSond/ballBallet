import { setAttr, createSvgElement } from "./helpers.js";
import { animate, createCircle } from "./parabola.js";

window.addEventListener("DOMContentLoaded", () => {
  setInterval(createCircle, 300);
});
