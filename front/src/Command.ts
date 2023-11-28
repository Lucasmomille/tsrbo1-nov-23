import { Config } from "./interfaces/Config";
import { keys, querySelector } from "./misc";

type Callback = (newConfig: Config) => void;

export class Command {
  callback: Callback = () => {};
  config: Config = {
    samples: 0,
    multiplicationFactor: 0,
  };

  constructor() {
    this.setActions();
  }

  onChange(callback: Callback): void {
    this.callback = callback;
  }

  render(): void {
    for (const key of keys(this.config)) {
      const elt = querySelector(`.command .${key} .value`);
      elt.innerHTML = this.config[key] + "";

      const sliderElt = querySelector(
        `.command .${key} input`,
        HTMLInputElement
      );
      sliderElt.value = this.config[key] + "";
    }
  }

  setActions(): void {
    for (const key of keys(this.config)) {
      const sliderElt = querySelector(
        `.command .${key} input`,
        HTMLInputElement
      );
      sliderElt.addEventListener("input", () => {
        const config = {
          ...this.config,
          [key]: sliderElt.value,
        };
        this.setConfig(config);
      });
    }
  }

  setConfig(config: Config): void {
    this.config = config;
    this.render();
    this.callback(this.config);
  }
}
