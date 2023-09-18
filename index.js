"use strict";

require("dotenv").config();

const port = process.env.PORT
const { start } = require("./src/server");

start(port);
