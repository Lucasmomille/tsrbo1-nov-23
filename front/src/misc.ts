export const querySelector = (cssSelector: string): Element => {
  const container = document.querySelector(cssSelector);
  if (container === null) {
    throw new Error(`Cannot find element with selector ${cssSelector}`);
  }
  return container;
};
