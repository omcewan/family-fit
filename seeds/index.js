const seedFamilies = require('./family-seeds');
const seedMembers = require('./member-seeds');
// const seedWorkout = require('./workout-seeds');

const sequelize = require('../config/connection');

const seedAll = async () => {
  await sequelize.sync({ force: true });
  console.log('\nDatabase Synced\n');
  await seedFamilies();
  console.log('\nFamiles Seeded\n');
  await seedMembers();
  console.log('\nMembers Seeded\n');
  // await seedWorkout();
  // console.log('\nWorkout Seeded\n');
  process.exit(0);
};

seedAll();
