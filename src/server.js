"use strict";

const express = require("express");
const app = express();
const cors = require("cors");
const logger = require("./middleware/logger");
const validator = require("./middleware/validator");
const notFound = require("./error-handlers/404");
const internalServerError = require("./error-handlers/500");

app.use(cors());
app.use(logger);

app.get("/", (req, res) => {
  res.status(200).send("Hello World");
});

app.get("/data", (req, res) => {
  res.status(200).json({
    description: "Get data from server",
    email: "You can connect to our team",
  });
});

app.get('/person/:name', validator, (req, res) => {
  const name = req.query.name;
    res.status(200).send(
      `Welcome: ${name}`);
});

app.use('*', notFound);
app.use(internalServerError);

function start(port) {
  app.listen(port, () => console.log(`🚀 ~ start ~ port: ${port}`));
}

module.exports = {
  start,
  app,
};
