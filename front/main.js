console.log("start");
const svgns = "http://www.w3.org/2000/svg";

const samples = 10;

const r = 1;

const getSamplePosition = (i, samples) => {
  return { x: 12, y: 53 };
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
