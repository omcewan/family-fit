const router = require('express').Router();
const { Member, Workout, LoggedWorkout } = require('../../models');

// get all members
router.get('/', (req, res) => {
  Member.findAll({
    attributes: { exclude: ['password', 'family_id'] },
    include: {
      model: LoggedWorkout,
      separate: true,
      limit: 7,
      include: { model: Workout },
    },
  })
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
    include: {
      model: LoggedWorkout,
      separate: true,
      limit: 7,
      include: { model: Workout },
    },
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
      req.session.save(() => {
        req.session.member_id = memberData.id;
        req.session.email = memberData.email;
        req.session.loggedIn = true;
        res.json(memberData);
      });
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

// check member login credentials
router.use('/login', (req, res) => {
  // expects {email: 'lernantino@gmail.com', password: 'password1234'}
  Member.findOne({ where: { email: req.body.email } }).then((memberData) => {
    if (!memberData) {
      res.status(400).json({ message: 'No Member with that email exists!' });
      return;
    }
    // Verify user
    const validPassword = memberData.checkPassword(req.body.password);

    if (!validPassword) {
      res.status(400).json({ message: 'Incorrect password!' });
      return;
    }
    req.session.save(() => {
      req.session.member_id = memberData.id;
      req.session.email = memberData.email;
      req.session.loggedIn = true;
      res.json({ member: memberData, message: 'You are now logged in!' });
    });
  });
});

router.use('/logout', (req, res) => {
  if (req.session.loggedIn) {
    req.session.destroy(() => {
      res.status(204).end();
    });
  } else {
    res.status(404).end();
  }
})

// delte a membmer
router.delete('/:id', (req, res) => {
  Member.destroy({ where: { id: req.params.id } })
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
