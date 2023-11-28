import { api } from "./api";
import { max, step } from "./constants";
import { Config } from "./interfaces/Config";
import { keys, querySelector, sleep } from "./misc";

type Callback = (newConfig: Config) => void;

export class Command {
  callback: Callback = () => {};
  config: Config = {
    samples: 0,
    multiplicationFactor: 0,
  };
  isPlaying = false;

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

    querySelector(".command .buttons .play").innerHTML = this.isPlaying
      ? "Pause"
      : "Play";
  }

  setActions(): void {
    for (const key of keys(this.config)) {
      const sliderElt = querySelector(
        `.command .${key} input`,
        HTMLInputElement
      );
      sliderElt.addEventListener("input", () => {
        const config: Config = {
          ...this.config,
          [key]: +sliderElt.value,
        };
        this.setConfig(config);
      });
    }
    this.setBtnActions();
  }

  setBtnActions(): void {
    const btnElt = querySelector(".command .buttons .play");
    btnElt.addEventListener("click", () => {
      this.isPlaying = !this.isPlaying;
      if (this.isPlaying) {
        this.startPlaying();
      }
      this.render();
    });
    const randomBtnElt = querySelector(".command .buttons .random");
    randomBtnElt.addEventListener("click", () => {
      (async (): Promise<void> => {
        this.config = await api.getRandomConfig();
        this.render();
        this.callback(this.config);
      })();
    });
  }

  setConfig(config: Partial<Config>): void {
    this.config = { ...this.config, ...config };
    this.render();
    this.callback(this.config);
  }

  async startPlaying(): Promise<void> {
    while (this.isPlaying) {
      this.config.multiplicationFactor = +(
        (this.config.multiplicationFactor + step) %
        max
      ).toFixed(2);

      this.render();
      this.callback(this.config);
      await sleep(15);
    }
  }
}
