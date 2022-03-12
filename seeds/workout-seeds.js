const { Workout } = require('../models');

const workoutData = [
  {
    workout_name: 'Cardio',
    member_id: 1
  },
]

const seedWorkout = () => Workout.bulkCreate(workoutData);

module.exports = seedWorkout;