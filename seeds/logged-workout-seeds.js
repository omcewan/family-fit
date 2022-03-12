const { LoggedWorkout } = require('../models');

const loggedData = [
  {
    workout_id: 1,
    member_id: 1,
    hours: 1,
  },
  {
    workout_id: 2,
    member_id: 1,
    hours: 2,
  },
  {
    workout_id: 3,
    member_id: 1,
    hours: 2,
  },
  {
    workout_id: 4,
    member_id: 1,
    hours: 1,
  },
  {
    workout_id: 5,
    member_id: 1,
    hours: 3,
  },
  {
    workout_id: 1,
    member_id: 1,
    hours: 4,
  },
  {
    workout_id: 2,
    member_id: 1,
    hours: 1,
  },
  {
    workout_id: 3,
    member_id: 2,
    hours: 2,
  },
  {
    workout_id: 4,
    member_id: 2,
    hours: 3,
  },
  {
    workout_id: 5,
    member_id: 2,
    hours: 5,
  },
  {
    workout_id: 1,
    member_id: 2,
    hours: 6,
  },
  {
    workout_id: 2,
    member_id: 2,
    hours: 2,
  },
];

const seedLogged = () => LoggedWorkout.bulkCreate(loggedData);

module.exports = seedLogged;
