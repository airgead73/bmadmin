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

WorkSchema.pre('remove', { document: true }, async function (next) {
  await this.model('Photo').deleteMany({ work: this._id });
  next();
});

module.exports = mongoose.model('Work', WorkSchema);