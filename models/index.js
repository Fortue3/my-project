const dbConfig = require("../config/db.config.js")
const mongoose = require("mongoose");
mongoose.Promise = global.Promise;

const db = {};
db.mongoose = mongoose;
db.url = process.env.MONGO_DB_URI;
db.contacts = require("./contact.js")(mongoose);
db.pets = require("./pets.js")(mongoose);


module.exports = db;

