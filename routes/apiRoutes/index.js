const router = require('express').Router();
const familyRoutes = require('./family-routes');
const memberRoutes = require('./member-routes');

router.use('/families',familyRoutes);
router.use('/members', memberRoutes);

module.exports = router;