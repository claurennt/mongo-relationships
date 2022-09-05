const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const directorSchema = new Schema({
  name: { type: String, required: true },
  surname: { type: String, required: true },
  country: { type: String, required: true },
});

const Director = mongoose.model("Director", directorSchema);

module.exports = Director;
