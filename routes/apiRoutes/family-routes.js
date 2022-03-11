const router = require('express').Router();
const { Family, Member } = require('../../models');

// get all families and their memebers
router.get('/', (req, res) => {
  Family.findAll({
    include: { model: Member },
  })
    .then((familyData) => {
      res.json(familyData);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

// get a single family and its members
router.get('/:id', (req, res) => {
  Family.findOne({
    include: { model: Member },
    where: { id: req.params.id },
  })
    .then((familyData) => res.json(familyData))
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

module.exports = router;
