console.log("start");
const svgns = "http://www.w3.org/2000/svg";

const cx0 = 50;
const cy0 = 50;
const r0 = 45;

const samples = 10;

const r = 1;

const getSamplePosition = (i, samples) => {
  const angle = (i * 2 * Math.PI) / samples;

  const x = cx0 + r0 * Math.cos(angle);
  const y = cy0 + r0 * Math.sin(angle);
  return { x, y };
};

const container = document.querySelector("svg .samples");
console.log("container: ", container);
for (let i = 0; i < samples; i++) {
  const elt = document.createElementNS(svgns, "circle");
  console.log("elt: %O", elt);

  const { x: cx, y: cy } = getSamplePosition(i, samples);

  elt.setAttributeNS(null, "cx", cx);
  elt.setAttributeNS(null, "cy", cy);
  elt.setAttributeNS(null, "r", r);

  container.appendChild(elt);
}
