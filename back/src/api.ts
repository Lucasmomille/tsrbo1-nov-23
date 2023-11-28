import express from "express";
import { Config } from "./interfaces/Config";
import { random } from "./utils";

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
