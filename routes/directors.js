const express = require("express");
const directorsRouter = express.Router();

const {
  retrieve_all_directors,
  create_new_director,
} = require("../controllers/directors");
/* GET users listing. */
directorsRouter
  .route("/")
  .post(create_new_director)
  .get(retrieve_all_directors);

module.exports = directorsRouter;
