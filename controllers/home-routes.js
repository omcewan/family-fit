const router = require('express').Router();
const sequelize = require('../config/connection');
const { Family, Member, LoggedWorkout, Workout} = require('../models')


router.get('/', (req, res) => {
  // console.log(req.session)
  if (req.session.loggedIn) {
    res.redirect('/dashboard')
    return;
  }
  res.render('homepage');
});

// check member login credentials
router.get('/dashboard', (req, res) => {
  if (!req.session.loggedIn) {
    res.redirect('/')
    return;
  }
  res.render('dashboard')
});

module.exports = router;
