const mongoose = require('mongoose');

const businessSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  category: {
    type: String,
    required: true,
  },
  location: {
    type: String,
    required: true,
  },
  description: String,
  email: { 
    type: String, 
    required: true },
  address: { 
    type: String, 
    required: true },
});

const Business = mongoose.model('Business', businessSchema);

module.exports = Business;
