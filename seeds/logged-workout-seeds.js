const { LoggedWorkout } = require('../models');

const loggedData = [
  {
    workout_id: 1,
    member_id: 1,
    minutes: 10,
  },
  {
    workout_id: 2,
    member_id: 1,
    minutes: 55,
  },
  {
    workout_id: 3,
    member_id: 2,
    minutes: 60,
  },
  {
    workout_id: 4,
    member_id: 2,
    minutes: 10,
  },
  {
    workout_id: 5,
    member_id: 3,
    minutes: 25,
  },
  {
    workout_id: 1,
    member_id: 3,
    minutes: 30,
  },
  {
    workout_id: 2,
    member_id: 4,
    minutes: 75,
  },
  {
    workout_id: 3,
    member_id: 4,
    minutes: 15,
  },
  {
    workout_id: 4,
    member_id: 5,
    minutes: 30,
  },
  {
    workout_id: 5,
    member_id: 5,
    minutes: 50,
  },
  {
    workout_id: 1,
    member_id: 6,
    minutes: 68,
  },
  {
    workout_id: 2,
    member_id: 6,
    minutes: 29,
  },
  {
    workout_id: 2,
    member_id: 7,
    minutes: 29,
  },
  {
    workout_id: 2,
    member_id: 7,
    minutes: 29,
  },
  {
    workout_id: 2,
    member_id: 8,
    minutes: 29,
  },
  {
    workout_id: 2,
    member_id: 8,
    minutes: 29,
  },
  {
    workout_id: 2,
    member_id: 9,
    minutes: 29,
  },
  {
    workout_id: 2,
    member_id: 9,
    minutes: 29,
  },
  {
    workout_id: 2,
    member_id: 10,
    minutes: 29,
  },
  {
    workout_id: 2,
    member_id: 10,
    minutes: 29,
  },
];

const seedLogged = () => LoggedWorkout.bulkCreate(loggedData);

module.exports = seedLogged;
