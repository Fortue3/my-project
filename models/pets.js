const mongoose = require('mongoose');

const petSchema = new mongoose.Schema({
  petName: {
    type: String,
    required: true
  },
  petColor: {
    type: String,
    required: true
  },
  species: {
    type: String,
    required: true
  },
  gender: {
    type: String,
    required: true
  }
});

const Pets = mongoose.model('pets', petSchema);

module.exports = Pets;

