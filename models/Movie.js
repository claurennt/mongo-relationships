const mongoose = require("mongoose");
//const Rating = require("./Rating");
const Schema = mongoose.Schema;

const movieSchema = new Schema({
  title: { type: String, required: true },
  year: { type: Number, required: true },
  director: { type: String, required: true },
});

const Movie = mongoose.model("Movie", movieSchema);

module.exports = Movie;
