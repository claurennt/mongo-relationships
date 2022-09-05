const mongoose = require("mongoose");
//const Rating = require("./Rating");
const Schema = mongoose.Schema;

const ratingSchema = new Schema({
  value: Number,
  source: String,
});

const Rating = mongoose.model("Rating", ratingSchema);

module.exports = Rating;
