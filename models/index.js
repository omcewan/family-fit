// inmport modules
const Family = require('./family');
const Member = require('./member');
const Workout = require('./workout');

Family.hasMany(Member, {
  foreignKey: 'family_id',
});

Member.belongsTo(Family, {
  foreignKey: 'family_id',
});

Member.hasMany(Workout, {
  foreignKey: 'member_id',
});

Workout.belongsToMany(Member, {
  foreignKey: 'member_id',
});

module.exports = { Family, Member, Workout };
