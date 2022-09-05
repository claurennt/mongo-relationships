const express = require("express");
const directorsRouter = express.Router();

/* GET users listing. */
directorsRouter.get("/", (req, res, next) => {
  res.send("respond with a resource");
});

module.exports = directorsRouter;
