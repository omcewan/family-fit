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

// create a new workout
router.post('/', (req, res) => {
  Workout.create({
    workout_name: req.body.workout_name,
  })
    .then((workoutData) => {
      res.json(workoutData);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

router.delete('/:id', (req, res) => {
  Workout.destroy({ where: { id: req.params.id } })
    .then((workoutData) => {
      if (!workoutData) {
        res.status(400).json({ message: 'No Workout with that ID exists!' });
        return;
      }
      res.json(workoutData);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

module.exports = router;
