const mongoose = require('mongoose');

const WorkSchema = new mongoose.Schema({
  title: {
    type: String,
    trim: true
  },
  mode: {
    type: String,
    trim: true
  },
  category: {
    type: String,
    trim: true
  },
  material: {
    type: String,
    trim: true
  },
  createdAt: {
    type: Date,
    default: Date.now
  }

});

module.exports = mongoose.model('Work', WorkSchema);