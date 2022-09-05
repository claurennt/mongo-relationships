const mongoose = require("mongoose");
//const Rating = require("./Rating");
const Schema = mongoose.Schema;

const movieSchema = new Schema({
  title: { type: String, required: true },
  year: { type: Number, required: true },
  //one-to-one and one-to-many...the rating field will be a reference to  a document in the ratings colletion(matched by id)
  rating: { type: Schema.ObjectId, ref: "Rating" },
  //ono-to-one and one-to-many..the director field will be a reference to a document in the directors colletion(matched by id)
  director: { type: Schema.ObjectId, ref: "Director" },
  /*for a many-to-many we will use an array of ObjectIds and establish a mutual reference 
  at schema level, see Actor's schema movies field  */
  actors: [{ type: Schema.ObjectId, ref: "Actor" }],
});

const Movie = mongoose.model("Movie", movieSchema);

module.exports = Movie;
