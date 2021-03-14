const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const workoutSchema = new Schema({
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
      type: String,
      duration: Number,
      weight: Number,
      reps: Number,
      sets: Number,
      distance: Number
    },
  ],
});

const Workout = mongoose.model("Workout", workoutSchema);

module.exports = Workout;
