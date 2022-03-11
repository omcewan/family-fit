const router = require('express').Router();
const familyRoutes = require('./family-routes');

router.use('/families',familyRoutes);

module.exports = router;