const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const directorSchema = new Schema({
  name: String,
  surname: String,
  country: String,
});

const Director = mongoose.model("Director", directorSchema);

module.exports = Director;
