import { cx0, r0, cy0 } from "./constants";

export const getSamplePosition = (i: number, samples: number) => {
  const angle = (i * 2 * Math.PI) / samples - Math.PI / 2;

  const x = cx0 + r0 * Math.cos(angle);
  const y = cy0 + r0 * Math.sin(angle);
  return { x, y };
};
