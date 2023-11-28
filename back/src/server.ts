console.log("About to start a server...");

import express from "express";
import serveIndex from "serve-index";

import api from "./api";

const port = 3000;
const publicDir = ".";

const app = express();

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  next();
});

app.use("/api", api);

app.use(express.static(publicDir));
app.use(serveIndex(publicDir, { icons: true }));

app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});
