"use strict";

const express = require('express');
const app = express();
const cors = require("cors");


app.use(cors());


app.get ("/", (req, res) => {
    res.status(200).send("Hello World")
})

app.get ("/data", (req, res) => {
    res.status(200).json({
        description: "Get data from server",
        email: "You can connect to our team"
})
});



function start(port) {
    app.listen(port, ()=> console.log(`🚀 ~ start ~ port: ${port}`))
}

module.exports = {
    start,
    app
}