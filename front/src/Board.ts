import { svgns, r } from "./constants";
import { Config } from "./interfaces/Config";
import { getSamplePosition } from "./math";
import { querySelector, setNbrAttribute } from "./misc";

export class Board {
  config: Config = {
    multiplicationFactor: 0,
    samples: 0,
  };

  draw() {
    const { samples, multiplicationFactor } = this.config;
    const container = querySelector("svg .samples");

    console.log("container: ", container);
    for (let i = 0; i < samples; i++) {
      const elt = document.createElementNS(svgns, "circle");
      console.log("elt: %O", elt);

      const { x: cx, y: cy } = getSamplePosition(i, samples);

      setNbrAttribute(elt, "cx", cx);
      setNbrAttribute(elt, "cy", cy);
      setNbrAttribute(elt, "r", r);

      container.appendChild(elt);
    }

    const lineContainer = querySelector("svg .lines");

    console.log("lineContainer: ", lineContainer);
    for (let i = 0; i < samples; i++) {
      const elt = document.createElementNS(svgns, "line");
      console.log("elt: %O", elt);

      const p1 = getSamplePosition(i, samples);
      const p2 = getSamplePosition(i * multiplicationFactor, samples);

      setNbrAttribute(elt, "x1", p1.x);
      setNbrAttribute(elt, "x2", p2.x);
      setNbrAttribute(elt, "y1", p1.y);
      setNbrAttribute(elt, "y2", p2.y);

      lineContainer.appendChild(elt);
    }
  }

  setConfig(config: Config) {
    this.config = config;
  }
}
