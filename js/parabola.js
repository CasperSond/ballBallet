import {
  setAttr,
  createSvgElement,
  random,
  headTailRandom
} from "./helpers.js";

const width = 200;
const w = width / 2;

function CartToSvg(x, y) {
  x += w;
  y = w - y;

  return {
    x,
    y
  };
}

export function animate($, ms, cb) {
  const initMs = Math.round(performance.now());
  const invert = headTailRandom();
  const xInvert = headTailRandom();
  const yInvert = headTailRandom();

  const xMargin = random(-60, 60);
  const yMargin = random(-60, 60);

  function frame() {
    const currentTime = Math.round(performance.now()) - initMs;

    if (currentTime <= ms) {
      const progress = currentTime / ms;
      const xCartPosition = -1 * w + width * progress;
      const yCartPosition = -2 * (1 / w) * Math.pow(xCartPosition, 2) + w;

      let { x, y } = CartToSvg(xCartPosition, yCartPosition);

      if (invert) {
        const _x = x;
        x = y * 2;
        y = _x / 2;
      }

      if (xInvert) {
        x = 200 - x;
      }

      if (yInvert) {
        y = 100 - y;
      }

      setAttr($, { cx: x + xMargin, cy: y + yMargin });

      requestAnimationFrame(frame);
    } else {
      cb();
    }
  }

  frame();
}

export function createCircle() {
  const circle = createSvgElement("circle");
  const svg = document.getElementById("main");
  svg.appendChild(circle);

  setAttr(circle, {
    r: 5,
    fill: `rgb(${random(0, 255)}, ${random(0, 255)}, ${random(0, 255)})`
  });

  animate(circle, random(1500, 15000), () => {
    circle.remove();
  });
}
