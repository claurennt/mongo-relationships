const Movie = require("../models/Movie");
const Rating = require("../models/Rating");

//creates a new movie document in the movies collection
const create_new_movie = async (req, res, next) => {
  try {
    const { title, year } = req.body;
    const newMovie = await Movie.create({ title, year });
    res.status(201).send(newMovie);
  } catch (err) {
    console.log(err);
    next(err);
  }
};

//returns all the movies from the movies collection
const retrieve_all_movies = async (req, res, next) => {
  //populate different refs and return selected fields
  const allMovies = await Movie.find().populate([
    {
      path: "director",

      select: ["name", "surname", "country"],
    },
    {
      path: "actors",

      select: ["name", "surname", "country"],
    },
  ]);

  res.status(200).send(allMovies);
};

//updates target movie(by _id) with a new director's reference
const add_director_to_movie = async (req, res, next) => {
  const { id } = req.params;
  const { director_id } = req.body;

  const updatedMovie = await Movie.findByIdAndUpdate(
    id,
    {
      director: director_id,
    },
    { new: true }
  ).populate("director");
  res.status(200).send(updatedMovie);
};

//updates target movie(by _id) with a new rating's reference
const add_new_rating_to_movie = async (req, res, next) => {
  const { id } = req.params;
  const {
    rating: { source, value },
  } = req.body;

  //if no source or value info is passed with the req.body we return a 400 error
  if (!source || !value)
    return res.status(400).send("Please fill all the fields");

  //we create a new rating document
  const newRating = await Rating.create({ source, value });

  /*we use the _id to update the rating's field in the target movie's document 
  and populate both rating and director fields to get all info from the referenced documents*/
  const updatedMovie = await Movie.findByIdAndUpdate(
    id,
    {
      rating: newRating._id,
    },
    { new: true }
    //to populate multiple referenced documents separate them with blank space
  ).populate("director rating");

  res.status(200).send(updatedMovie);
};

//updates movie document(by id) with a new actor's reference
const add_actor_to_movie = async (req, res, next) => {
  const { id } = req.params;
  const { actor_id } = req.body;

  //if no source or value info is passed with the req.body we return a 400 error
  if (!actor_id) return res.status(400).send("Please fill all the fields");

  /*because actors-movies is a many to many relationship and the the actors field on the movie document is an array of ObjectIds
  we use the §push operator to push the actor_id to the actors field on the movie
  at the end we populate the query to return all rating, director and actors info from the referenced documents*/
  const updatedMovie = await Movie.findByIdAndUpdate(
    id,
    {
      $push: {
        actors: actor_id,
      },
    },
    { new: true }
  ).populate("director rating actors");

  res.status(200).send(updatedMovie);
};

module.exports = {
  create_new_movie,
  retrieve_all_movies,
  add_director_to_movie,
  add_new_rating_to_movie,
  add_actor_to_movie,
};
