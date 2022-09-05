const Actor = require("../models/Actor");

const create_new_actor = async (req, res, next) => {
  const { name, surname, country, dateOfBirth } = req.body;

  if (!name || !surname || !country || !dateOfBirth) {
    return res.status(400).send("Please fill all the fields");
  }
  try {
    const newActor = await Actor.create({
      name,
      surname,
      country,
      dateOfBirth,
    });
    res.status(201).send(newActor);
  } catch (err) {
    console.log(err);
    next(err);
  }
};

const retrieve_all_actors = async (req, res, next) => {
  //populate referenced movies but only title and year fields, _id is de-selected with the minus sign

  const allActors = await Actor.find().populate([
    {
      path: "movies",

      select: ["title", "year"],
      //populate nested director ref in movies population
      populate: { path: "director", select: ["name", "surname"] },
    },
  ]);

  res.status(200).send(allActors);
};

//updates actor document(by id)  with a new movie reference(_id)
const add_movie_to_actor = async (req, res, next) => {
  const { id } = req.params;
  const { movie_id } = req.body;

  //if no source or value info is passed with the req.body we return a 400 error
  if (!movie_id) return res.status(400).send("Please fill all the fields");
  try {
    /*because actors-movies is a many to many relationship and the the movies field on the movie document is an array of ObjectIds
    we use the §push operator to push the movie_id to the movies field on the actor's docuemnt
    at the end we populate the query to return all info from the referenced movies documents*/
    const updatedActor = await Actor.findByIdAndUpdate(
      id,
      {
        $push: {
          movies: movie_id,
        },
      },
      { new: true }
    ).populate("movies");

    res.status(200).send(updatedActor);
  } catch (err) {
    console.log(err);
    next(err);
  }
};

module.exports = { create_new_actor, retrieve_all_actors, add_movie_to_actor };
