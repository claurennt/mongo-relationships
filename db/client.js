const mongoose = require("mongoose");

const { DATABASE_CONNECTION_STRING } = process.env;

module.exports = mongoose
  .connect(DATABASE_CONNECTION_STRING)
  .then(() => console.log("Connected successfully to MongoDB"))
  .catch((e) => console.log(e));
