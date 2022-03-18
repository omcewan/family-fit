const router = require('express').Router();
const sequelize = require('../../config/connection');
const { LoggedWorkout, Workout, Member, Family } = require('../../models');

// get all logged workouts
router.get('/', (req, res) => {
  LoggedWorkout.findAll({
    limit: 7,     
    order: sequelize.literal('createdAt DESC'),
    include: [
      { model: Workout },
      {
        model: Member,
        attributes: { exclude: 'password' },
        include: { model: Family },
      },
    ],
  })
    .then((workoutData) => {
      res.json(workoutData);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

// post a new workout
router.post('/', (req, res) => {
  LoggedWorkout.create({
    workout_id: req.body.workout_id,
    member_id: req.body.member_id,
    minutes: req.body.minutes,
  })
    .then((workoutData) => {
      res.json(workoutData);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

// delete a workout
router.delete('/:id', (req, res) => {
  LoggedWorkout.destroy({ where: { id: req.params.id } })
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
