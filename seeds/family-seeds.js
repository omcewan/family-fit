const { Family } = require('../models');

const familyData = [
  {
    family_name: 'Kirk',
  },
  {
    family_name: 'Howard',
  },
  {
    family_name: 'Marshal',
  },
  {
    family_name: 'Crisp',
  },
  {
    family_name: 'Powers',
  },
];

const seedFamilies = () => Family.bulkCreate(familyData);

module.exports = seedFamilies;
