'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var AbouttextSchema = new Schema({
  name: String,
  info: String,
  active: Boolean
});

module.exports = mongoose.model('Abouttext', AbouttextSchema);