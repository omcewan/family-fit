const router = require('express').Router();
const { route } = require('express/lib/application');
const { Member, Family } = require('../../models');

// get all members
router.get('/', (req, res) => {
  Member.findAll({ attributes: { exclude: ['password'] } })
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
  Member.findOne({
    attributes: { exclude: ['password'] },
    where: { id: req.params.id },
  })
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

// create a new member
router.post('/', (req, res) => {
  Member.create({
    first_name: req.body.first_name,
    last_name: req.body.last_name,
    email: req.body.email,
    password: req.body.password,
    family_id: req.body.family_id,
  })
    .then((memberData) => {
      res.json(memberData);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

// update a member
router.put('/:id', (req, res) => {
  Member.update(req.body, {
    individualHooks: true,
    where: { id: req.params.id },
  })
    .then((memberData) => {
      if (!memberData[0]) {
        req.status(400).json({
          message: 'No Member with that ID exists!',
        });
        return;
      }
      res.json(memberData);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

// TODO: create a login route
// check member login credentials
router.use('/login', (req, res) => {
  Member.findOne();
});

// TODO: complete route
// delte a membmer
router.delete('/:id', (req, res) => {
  Member.destroy();
});

module.exports = router;
