import { Config } from "./interfaces/Config";
import { keys, querySelector } from "./misc";

type Callback = (newConfig: Config) => void;

export class Command {
  config: Config = {
    samples: 0,
    multiplicationFactor: 0,
  };

  onChange(callback: Callback) {
    throw new Error("Method not implemented.");
  }

  render() {
    for (const key of keys(this.config)) {
      const elt = querySelector(`.command .${key} .value`);
      elt.innerHTML = this.config[key] + "";
    }
  }

  setConfig(config: Config) {
    this.config = config;
    this.render();
  }
}
