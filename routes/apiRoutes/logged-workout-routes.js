const router = require('express').Router();
const { LoggedWorkout } = require('../../models');

// get all logged workouts
router.get('/', (req, res) => {
  LoggedWorkout.findAll()
    .then((workoutData) => {
      res.json(workoutData);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

router.post('/', (req, res) => {
  LoggedWorkout.create({
    workout_id: req.body.workout_id,
    member_id: req.body.member_id,
  })
    .then((workoutData) => {
      res.json(workoutData);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

module.exports = router;
