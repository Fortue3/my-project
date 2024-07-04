const mongoose = require('mongoose');

const contactSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
  address: {
    type: String,
    required: true,
  },
  location: {
    type: String,
    required: true,
  },
  Town: {
    type: String,
    required: true,
  },
  age: {
    type: String,
    required: true,
  },
  phonenumber: {
    type: String,
    required: true,
  },
});

const Contacts = mongoose.model('Contacts', contactSchema);

module.exports = Contacts;


