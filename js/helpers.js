/**
 *
 * @param {Element} $
 * @param {object} map
 */
export function setAttr($, dict) {
  for (let key in dict) {
    $.setAttribute(key, dict[key]);
  }
  return $;
}

export function createSvgElement(name) {
  return document.createElementNS("http://www.w3.org/2000/svg", name);
}

export function random(from, to) {
  const span = to - from + 1;
  const randomInSpan = Math.floor(Math.random() * span);

  return from + randomInSpan;
}

export function headTailRandom() {
  return Math.random() > 0.5;
}
