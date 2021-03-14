const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const workoutSeed = new Schema({
  day: {
    type: String,
    trim: true,
    required: "Enter a name for transaction",
  },
  value: {
    type: Number,
    required: "Enter an amount",
  },
  date: {
    type: Date,
    default: Date.now,
  },
});

const Workout = mongoose.model("Transaction", workoutSeed);

module.exports = Workout;
