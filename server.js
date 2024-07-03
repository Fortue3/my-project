const mongoose = require('mongoose');
const express = require("express");
const app = express();
const bodyParser = require('body-parser');
const route = require("./routes/contact");
const db = require("./models");

const PORT = process.env.PORT;
const HOST = process.env.HOST;


process.on('uncaughtException', (err, origin) => {
    console.log(process.stderr.fd, `Caught exception: ${err}\n` + `Exception origin: ${origin}`);
});