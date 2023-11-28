export const querySelector = (cssSelector: string): Element => {
  const container = document.querySelector(cssSelector);
  if (container === null) {
    throw new Error(`Cannot find element with selector ${cssSelector}`);
  }
  return container;
};

export const setNbrAttribute = (
  elt: Element,
  key: string,
  value: number
): void => {
  elt.setAttributeNS(null, key, value + "");
};

export const keys = <T extends object>(obj: T): (keyof T)[] => {
  return Object.keys(obj) as (keyof T)[];
};
