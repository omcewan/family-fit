const router = require('express').Router();
const { Workout } = require('../../models');

// get all workouts
router.get('/', (req, res) => {
  Workout.findAll()
    .then((workoutData) => {
      res.json(workoutData);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

module.exports = router;
