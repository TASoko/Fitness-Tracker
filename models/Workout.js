//This file is to create the database using mongoose.
//We start by requiring mongoose and creating the const Schema.
const mongoose = require("mongoose");

const Schema = mongoose.Schema;
//In mongoDB this is how we create a table(collection)
const workoutSchema = new Schema({
//Each entry in the table needs the following inputs
  day: {
    type: Date,
    default: () => new Date(),
  },
  exercises: [
    {
      name: {
        type: String,
        trim: true,
        require: "You need a valid exercise name",
      },
      type: { type: String },
      duration: { type: Number },
      weight: { type: Number },
      reps: { type: Number },
      sets: { type: Number },
      distance: { type: Number },
    },
  ],
});

//we need this to be used elsehwere in the app so we make a variable to capture that export it
const Workout = mongoose.model("Workout", workoutSchema);

module.exports = Workout;
