import { Config } from "./interfaces/Config";

type Callback = (newConfig: Config) => void;

export class Command {
  onChange(callback: Callback) {
    throw new Error("Method not implemented.");
  }

  setConfig(config: Config) {
    throw new Error("Method not implemented.");
  }
}
