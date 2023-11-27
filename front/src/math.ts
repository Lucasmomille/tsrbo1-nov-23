import { cx0, r0, cy0 } from "./constants";
import { Point } from "./interfaces/Point";

export const getSamplePosition = (i: number, samples: number): Point => {
  const angle = (i * 2 * Math.PI) / samples - Math.PI / 2;

  const x = cx0 + r0 * Math.cos(angle);
  const y = cy0 + r0 * Math.sin(angle);
  return { x, y };
};
