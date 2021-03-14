const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const workoutSeed = new Schema({
  day: {
    type: Date,
  },
  exercises: {
    type: String,
  },
});

const Workout = mongoose.model("Workout", workoutSeed);

module.exports = Workout;
