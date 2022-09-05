const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const actorSchema = new Schema({
  name: String,
  surname: String,
  country: String,
  dateOfBirth: Date,
  /*for a many-to-many we will use an array of ObjectIds and establish a mutual reference to
  at schema level, see Movie's schema actors field  */
  movies: [{ type: Schema.Types.ObjectId, ref: "Movie" }],
});

const Actor = mongoose.model("Actor", actorSchema);

module.exports = Actor;
