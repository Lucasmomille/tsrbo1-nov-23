import "./style.css";

import { Board } from "./Board";

console.log("start");

const board = new Board();
board.setConfig({
  samples: 10,
  multiplicationFactor: 2,
});
board.draw();
