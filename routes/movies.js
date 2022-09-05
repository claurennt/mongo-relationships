const express = require("express");
const moviesRouter = express.Router();

const {
  create_new_movie,
  retrieve_all_movies,
  add_director_to_movie,
  add_new_rating_to_movie,
  add_actor_to_movie,
} = require("../controllers/movies");

moviesRouter.route("/").post(create_new_movie).get(retrieve_all_movies);

moviesRouter.route("/:id").patch(add_director_to_movie);

moviesRouter.route("/:id/rating").patch(add_new_rating_to_movie);

moviesRouter.route("/:id/actor").patch(add_actor_to_movie);

module.exports = moviesRouter;
