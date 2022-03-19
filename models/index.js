// inmport modules
const Family = require('./family');
const Member = require('./member');
const Workout = require('./workout');
const LoggedWorkout = require('./logged-workout');

Family.hasMany(Member, {
  foreignKey: 'family_id',
});

Member.belongsTo(Family, {
  foreignKey: 'family_id',
});

Member.hasMany(LoggedWorkout, {
  foreignKey: 'member_id',
});

LoggedWorkout.belongsTo(Member, {
  foreignKey: 'member_id',
});

LoggedWorkout.belongsTo(Workout, {
  foreignKey: 'workout_id'
})

Workout.hasMany(LoggedWorkout, {
  foreignKey: 'workout_id'
})


module.exports = { Family, Member, LoggedWorkout, Workout };
