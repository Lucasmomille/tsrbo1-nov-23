import express from "express";
import type { Config } from "./interfaces/Config.js";
import { random } from "./utils.js";

const app = express.Router();

const m = (req: express.Request, res: express.Response): void => {
  const config: Config = {
    samples: random(0, 200),
    multiplicationFactor: random(0, 100, 2),
  };
  res.json(config);
};
app.get("/random-config", m);

export default app;
