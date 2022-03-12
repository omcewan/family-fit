const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class LoggedWorkout extends Model {}

LoggedWorkout.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
    },
    workout_id: {
      type: DataTypes.INTEGER,
      references: { model: 'workout', key: 'id' },
    },
    member_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'member',
        key: 'id',
      },
    },
    minutes: {
      type: DataTypes.FLOAT,
    },
    hours: {
      type: DataTypes.INTEGER,
    },
  },
  {
    sequelize,
    timestamps: true,
    freezeTableName: false,
    underscored: true,
    modelName: 'logged_workout',
  }
);

module.exports = LoggedWorkout;
