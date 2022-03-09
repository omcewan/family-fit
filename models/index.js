// inmport modules
const Family = require('./family');
const Member = require('./member');

Family.hasMany(Member, {
  foreignKey: 'family_id'
})

Member.belongsTo(Family, {
  foreignKey: 'family_id'
})

module.exports = { Family, Member };