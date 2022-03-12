const { Workout } = require('../models');

const workoutData = [
  {
    workout_name: 'Tredmill',
  },
  {
    workout_name: 'Weight Lifting',
  },
  {
    workout_name: 'Eliptical',
  },
  {
    workout_name: 'Abs',
  },
  {
    workout_name: 'Cycling',
  },
]

const seedWorkout = () => Workout.bulkCreate(workoutData);

module.exports = seedWorkout;