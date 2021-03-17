//The depedency
const db = require("../models");

module.exports = (app) => {
  //The first function wants me to get everything for api/workouts
  // Aggregated workout duration
  // On the read me we need to be able to not only display the workout but also to add the total duration of the workouts. Since I already had duration I had to aggregate it to add a field to add the durations I'm collecting
  app.get("/api/workouts", (req, res) => {
    db.Workout.aggregate([
      {
        $addFields: {
          totalDuration: { $sum: "$exercises.duration" },
        },
      },
    ])
      .then((dbWorkout) => {
        console.log(dbWorkout);
        res.json(dbWorkout);
      })
      .catch((err) => {
        res.json(err);
      });
  });

  //This is the route for getWorkoutsInRange function
  //This is used to get the last 7 workouts added into the fitness tracker
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

  //This route is for the createWorkout function. 
  //This is api route is called when a new workout is created
  app.post("/api/workouts", (req, res) => {
    db.Workout.create(req.body)
      .then((dbWorkout) => {
        res.json(dbWorkout);
      })
      .catch((err) => {
        res.json(err);
      });
  });

  //This route is for addExercise
  //This is used to put a new workout using its id 
  app.put("/api/workouts/:id", (req, res) => {
    db.Workout.findByIdAndUpdate(req.params.id, {
      $push: { exercises: req.body },
    })
      .then((data) => {
        res.json(data);
      })
      .catch((err) => console.log(err));
  });
};
