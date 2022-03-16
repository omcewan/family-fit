const router = require('express').Router();
const sequelize = require('../config/connection');
const { Family, Member, LoggedWorkout, Workout} = require('../models')


router.get('/', (req, res) => {
  res.render('homepage');
});

// check member login credentials
router.get('/dashboard', (req, res) => {
  res.render('dashboard')
});

module.exports = router;
