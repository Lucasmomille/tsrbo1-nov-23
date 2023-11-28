console.log("About to start a server...");

const express = require("express");
const serveIndex = require("serve-index");

const port = 3000;
const publicDir = ".";

const app = express();

app.use(express.static(publicDir));
app.use(serveIndex(publicDir, { icons: true }));

app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});
