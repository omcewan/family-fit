const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Family extends Model {}

Family.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
    },
    family_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'family',
  }
);

module.exports = Family;