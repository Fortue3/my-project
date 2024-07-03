const db = require("./db.js")
const mongoose = require("mongoose");
mongoose.Promise = global.Promise;

db.mongoose = mongoose;
db.url = db.db_url;
db.contacts = require("./contact")(mongoose);
db.pets = require("./pets")(mongoose);


module.exports = db;

