const router = require('express').Router();
const sequelize = require('../config/connection');
const { Family, Member, LoggedWorkout, Workout} = require('../models')


router.get('/', (req, res) => {
  res.render('homepage');
});

// check member login credentials
router.get('/login', (req, res) => {
  res.render('login')
});

module.exports = router;
