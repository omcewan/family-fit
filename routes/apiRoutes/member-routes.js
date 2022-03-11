const router = require('express').Router();
const { Member, Family } = require('../../models');

// get all members
router.get('/', (req, res) => {
  Member.findAll()
    .then((memberData) => {
      res.json(memberData);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

// get a single member
router.get('/:id', (req, res) => {
  Member.findOne({ where: { id: req.params.id } })
    .then((memberData) => {
      if (!memberData) {
        res.status(400).json({ message: 'No Member with that ID exists!' });
        return;
      }
      res.json(memberData);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

module.exports = router;
