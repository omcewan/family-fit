const router = require('express').Router();
const { Family } = require('../../models');

// get all family
router.get('/', (req, res) => {
  Family.findAll()
    .then((familyData) => {
      res.json(familyData);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

module.exports = router;
