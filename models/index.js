// inmport modules
const Family = require('./Family');
const Member = require('./Member');
// const Workout = require('./Workout');

Family.hasMany(Member, {
  foreignKey: 'family_id',
});

Member.belongsTo(Family, {
  foreignKey: 'family_id',
});

// Member.hasMany(Workout, {
//   foreignKey: 'member_id',
// });

// Workout.belongsToMany(Member, {
//   foreignKey: 'member_id',
// });

module.exports = { Family, Member };
