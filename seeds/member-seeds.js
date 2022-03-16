const { Member } = require('../models');

const memeberData = [
  {
    first_name: 'Walter',
    last_name: 'Kirk',
    email: 'walter@gmail.com',
    password: 'password',
    family_id: 1,
  },
  {
    first_name: 'Caelie',
    last_name: 'Kirk',
    email: 'caelie@gmail.com',
    password: 'password1',
    family_id: 1,
  },
  {
    first_name: 'Cullen',
    last_name: 'Howard',
    email: 'cullenr@gmail.com',
    password: 'password2',
    family_id: 2,
  },
  {
    first_name: 'Sawyer',
    last_name: 'Howard',
    email: 'saywer@gmail.com',
    password: 'password21',
    family_id: 2,
  },
  {
    first_name: 'Jaleen',
    last_name: 'Marshal',
    email: 'jaleen@gmail.com',
    password: 'password3',
    family_id: 3,
  },
  {
    first_name: 'Viona',
    last_name: 'Marshal',
    email: 'viona@gmail.com',
    password: 'password31',
    family_id: 3,
  },
  {
    first_name: 'Nikki',
    last_name: 'Crisp',
    email: 'nikki@gmail.com',
    password: 'password4',
    family_id: 4,
  },
  {
    first_name: 'Fenton',
    last_name: 'Crisp',
    email: 'fenton@gmail.com',
    password: 'password41',
    family_id: 4,
  },
  {
    first_name: 'Laura',
    last_name: 'Powers',
    email: 'laura@gmail.com',
    password: 'password5',
    family_id: 5,
  },
  {
    first_name: 'Flo',
    last_name: 'Powers',
    email: 'flo@gmail.com',
    password: 'password51',
    family_id: 5,
  },
];

// TODO: apply bcrypt to passwordds before seeding.
const seedMembers = () => Member.bulkCreate(memeberData);

module.exports = seedMembers