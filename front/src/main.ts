console.log("start");
const svgns = "http://www.w3.org/2000/svg";

const cx0 = 50;
const cy0 = 50;
const r0 = 45;

const samples = 10;
const multiplicationFactor = 2;

const r = 1;

const getSamplePosition = (i: number, samples: number) => {
  const angle = (i * 2 * Math.PI) / samples - Math.PI / 2;

  const x = cx0 + r0 * Math.cos(angle);
  const y = cy0 + r0 * Math.sin(angle);
  return { x, y };
};

const container = document.querySelector("svg .samples");
if (container === null) {
  throw new Error("oups");
}
console.log("container: ", container);
for (let i = 0; i < samples; i++) {
  const elt = document.createElementNS(svgns, "circle");
  console.log("elt: %O", elt);

  const { x: cx, y: cy } = getSamplePosition(i, samples);

  elt.setAttributeNS(null, "cx", cx + "");
  elt.setAttributeNS(null, "cy", cy.toString());
  elt.setAttributeNS(null, "r", String(r));

  container.appendChild(elt);
}

const lineContainer = document.querySelector("svg .lines");
if (lineContainer === null) {
  throw new Error("oups");
}
console.log("lineContainer: ", lineContainer);
for (let i = 0; i < samples; i++) {
  const elt = document.createElementNS(svgns, "line");
  console.log("elt: %O", elt);

  const p1 = getSamplePosition(i, samples);
  const p2 = getSamplePosition(i * multiplicationFactor, samples);

  elt.setAttributeNS(null, "x1", p1.x + "");
  elt.setAttributeNS(null, "x2", p2.x + "");
  elt.setAttributeNS(null, "y1", p1.y + "");
  elt.setAttributeNS(null, "y2", p2.y + "");

  lineContainer.appendChild(elt);
}
