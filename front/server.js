const express = require("express");
const session = require("express-session");
const path = require("path");
const app = express();
const port = 3001;

const db = require("./lib/db");
const sessionOption = require("./lib/sessionOption");
const bodyParser = require("body-parser");
const bcrypt = require("bcrypt");

app.use(express.static(path.join(__dirname, "/build")));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get("/", (req, res) => {
  req.sendFile(path.join(__dirname, "/build/index.html"));
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
