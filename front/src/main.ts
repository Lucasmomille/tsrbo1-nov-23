import "./style.scss";

import { Board } from "./Board";
import { Config } from "./interfaces/Config";
import { Command } from "./Command";

console.log("start");

const config: Config = {
  samples: 10,
  multiplicationFactor: 2,
};

const board = new Board();
board.setConfig(config);
board.draw();

const command = new Command();
command.setConfig(config);
command.onChange((newConfig) => {
  board.setConfig(newConfig);
  board.draw();
});
