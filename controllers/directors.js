const Director = require("../models/Director");

//creates a new director document in the directors collection
const create_new_director = async (req, res, next) => {
  try {
    const { name, surname, country } = req.body;

    if (!name || !surname || !country) {
      return res.status(400).send("Please fill all the fields");
    }

    const newDirector = await Director.create({ name, surname, country });
    res.status(201).send(newDirector);
  } catch (err) {
    console.log(err);
    next(err);
  }
};

//returns all the directors from the directors collection
const retrieve_all_directors = async (req, res, next) => {
  const allDirectors = await Director.find();
  if (!allDirectors.length) return res.status(404).send("No directors found");

  res.status(200).send(allDirectors);
};

module.exports = { create_new_director, retrieve_all_directors };
