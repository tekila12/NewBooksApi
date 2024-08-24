const express = require("express");
const serverless = require("serverless-http");
const cors = require("cors");

const app = express();
app.use(cors());

const importData = require("./data.json");

app.get("/", (req, res) => {
  res.send("Hello");
});

app.get("/books", (req, res) => {
  res.json(importData);
});

module.exports.handler = serverless(app);