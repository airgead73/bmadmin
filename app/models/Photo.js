const mongoose = require('mongoose');

const PhotoSchema = new mongoose.Schema({
  work: {
    type: mongoose.Schema.ObjectId,
    ref: 'Work'
  },
  title: {
    type: String,
    trim: true
  },
  original_file: {
    type: String,
    trim: true
  },  
  format: {
    type: String,
    trim: true
  }, 
  size: {
    type: String,
    trim: true
  }, 
  url_raw: {
    type: String,
    trim: true
  }, 
  url_copyright: {
    type: String,
    trim: true
  }, 
  url_thumbnail: {
    type: String,
    trim: true
  }, 
  width: {
    type: Number
  },  
  height: {
    type: Number
  },
  orientation: {
    type: Number
  },     
  createdAt: {
    type: Date,
    default: Date.now
  }

});

PhotoSchema.pre('save', function(next) {

  function getOrienation(w, h) {
    if(w > h) {
      return 'landscape'
    } else if(w < h) {
      return 'portrait'
    } else {
      return 'square'
    }
  }

  this.orientation = getOrienation(this.width, this.height);

});

module.exports = mongoose.model('Photo', PhotoSchema);