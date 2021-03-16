const db = require("../models");

module.exports = (app) => {

  //The first function wants me to get everything so findall for api/workouts
  app.get("/api/workouts", (req, res) => {
    db.Workout.find({})
      .then((dbWorkout) => {
        res.json(dbWorkout);
      })
      .catch((err) => {
        res.json(err);
      });
  });

  //route for getWorkoutsInRange function
  app.get("/api/workouts/range", (req, res) => {
    db.Workout.find({})
      .sort({ day: -1 })
      .limit(7)
      .then((dbWorkout) => {
        res.json(dbWorkout);
      })
      .catch((err) => {
        res.json(err);
      });
  });

  //route for createWorkout
  app.post("/api/workouts", (req, res) => {
    db.Workout.create(req.body)
      .then((dbWorkout) => {
        res.json(dbWorkout);
      })
      .catch((err) => {
        res.json(err);
      });
  });

  //route for addExercise
  app.put("/api/workouts/:id", (req, res) => {
    db.Workout.findByIdAndUpdate(
       req.params.id,
      { $push: { exercises: req.body } }
    )
      .then((data) => {
        res.json(data);
      })
      .catch((err) => console.log(err));
  });

};
