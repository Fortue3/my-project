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


// Connect to MongoDB
mongoose.connect(dbConfig.db_url)
  .then(() => {
    console.log("Connected to the database");
  })
  .catch((error) => {
    console.error("Could not connect to the database:", error);
  });