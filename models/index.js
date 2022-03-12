// inmport modules
const Family = require('./Family');
const Member = require('./Member');
const Workout = require('./Workout');
const LoggedWorkout = require('./Logged-Workout');

Family.hasMany(Member, {
  foreignKey: 'family_id',
});

Member.belongsTo(Family, {
  foreignKey: 'family_id',
});

Member.belongsToMany(Workout, {
  through: LoggedWorkout,
  foreignKey: 'member_id',
});

Workout.belongsToMany(Member, {
  through: LoggedWorkout,
  foreignKey: 'workout_id',
});

module.exports = { Family, Member, LoggedWorkout, Workout };
