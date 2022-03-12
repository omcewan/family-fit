const router = require('express').Router();
const familyRoutes = require('./family-routes');
const memberRoutes = require('./member-routes');
const workoutRoutes = require('./logged-workout-routes')

router.use('/families',familyRoutes);
router.use('/members', memberRoutes);
router.use('/workouts', workoutRoutes);

module.exports = router;