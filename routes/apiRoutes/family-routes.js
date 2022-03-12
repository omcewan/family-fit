const router = require('express').Router();
const { Family, Member, LoggedWorkout } = require('../../models');

// get all families and their memebers
// TODO: fix route so that member passwords don't show up
router.get('/', (req, res) => {
  Family.findAll({
    include: [
      {
        model: Member,
        attributes: { exclude: ['password'] },
        include: { model: LoggedWorkout },
      },
    ],
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
    .then((familyData) => {
      if (!familyData) {
        res.status(400).json({ message: 'No Family with that ID exists!' });
        return;
      }
      res.json(familyData);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

// create a new family
router.post('/', (req, res) => {
  Family.create({ family_name: req.body.family_name })
    .then((familyData) => {
      res.json(familyData);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

// update a family
router.put('/:id', (req, res) => {
  Family.update(
    { family_name: req.body.family_name },
    { where: { id: req.params.id } }
  )
    .then((familyData) => {
      if (!familyData[0]) {
        res.status(400).json({
          message: 'No Family with that ID exists / Update already applied!',
        });
        return;
      }
      res.json(familyData);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

// delete a family
router.delete('/:id', (req, res) => {
  Family.destroy({ where: { id: req.params.id } })
    .then((familyData) => {
      if (!familyData) {
        res.status(400).json({ message: 'No Family with that ID exists!' });
        return;
      }
      res.json(familyData);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});
module.exports = router;
