const express = require("express");

const path = require("path");
const app = express();
const port = 3000;
const bodyParser = require("body-parser");

const https = require("https");
const fs = require("fs");
const options = {
  key: fs.readFileSync("./config/cert.key"),
  cert: fs.readFileSync("./config/cert.crt"),
};

app.use(express.static(path.join(__dirname, "/build")));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
var cookieParser = require("cookie-parser");
app.use(cookieParser());

app.get("/", (req, res) => {
  req.sendFile(path.join(__dirname, "/build/index.html"));
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});

// https 의존성으로 certificate와 private key로 새로운 서버를 시작
https.createServer(options, app).listen(3002, () => {
  console.log(`HTTPS server started on port 3002`);
});
