// inmport modules
const Family = require('models/Family.js');
const Member = require('models/member.js');
const Workout = require('models/workout.js');
const LoggedWorkout = require('models/Logged-Workout.js');

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
