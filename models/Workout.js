const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const workoutSchema = new Schema({
  day: {
    type: Date,
    // default: () => new Date(),
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

const Workout = mongoose.model("Workout", workoutSchema);

module.exports = Workout;
