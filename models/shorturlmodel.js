var mongoose = require("mongoose");

var Schema = mongoose.Schema;

var ShortUrlSchema = new Schema({
  longurl: {
    type: String,
    required: true,
  },
  shorturl: {
    type: String,
    required: true,
  },
  uid: {
    type: String,
    required: true,
  },
  visits: {
    type: Number,
    default: 0,
  },
  dates: {
    type: Array,
    default: [],
  },
});

var shortUrlModel = mongoose.model("urls", ShortUrlSchema);
module.exports = shortUrlModel;
