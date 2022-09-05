const express = require("express");
const actorsRouter = express.Router();

const {
  retrieve_all_actors,
  create_new_actor,
  add_movie_to_actor,
} = require("../controllers/actors");

actorsRouter.route("/").post(create_new_actor).get(retrieve_all_actors);

actorsRouter.route("/:id/movie").patch(add_movie_to_actor);
module.exports = actorsRouter;
