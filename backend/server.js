const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const path = require("path");
require("dotenv").config();
const port = process.env.PORT || 7000;
const app = express();

app.get("/", (req, res) => {
  res.send("welcome !!");
});

app.listen(port, () => {
  console.log(`Server running on port: ${port}`);
});

const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const path = require("path");
require("dotenv").config();
const port = process.env.PORT || 7000;
const app = express();

app.get("/", (req, res) => {
  res.send("welcome !!");
});

app.listen(port, () => {
  console.log(`Server running on port: ${port}`);
});
