const express = require("express");
const path = require("path");

const app = express();
const port = 3000;

app.use(express.json);
app.use(express.static(path.resolve(__dirname, "..", "client", "src", "index.js")));

app.listen(() => {
  console.log(`listening on port ${port}`);
});