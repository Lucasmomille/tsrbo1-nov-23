type Class<T> = new () => T;

export const querySelector = <T extends Element>(
  cssSelector: string,
  type?: Class<T>
): T => {
  const container = document.querySelector(cssSelector);
  if (container === null) {
    throw new Error(`Cannot find element with selector ${cssSelector}`);
  }
  if (type && !(container instanceof type)) {
    throw new Error(`Element found is not of type ${type.name}`);
  }
  return container as T;
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

export type millisecond = number;

/**
 * Sleep for delay millisseconds
 *
 * @param {millisecond} delay
 * @return {*}  {Promise<void>}
 */
export const sleep = (delay: millisecond): Promise<void> =>
  new Promise((r) => setTimeout(r, delay));
