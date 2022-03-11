const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');
const bcrypt = require('bcrypt');

class Member extends Model {}

Member.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      allowNull: false,
      primaryKey: true,
    },

    first_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    last_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate: {
        isEmail: true,
      },
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [8],
      },
    },
    family_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'family',
        key: 'id',
      },
    },
  },

  {
    hook: {
      async beforeCreate(newMemberData) {
        newMemberData.password = await bcrypt.hash(newMemberData.password, 10);
        return newMemberData;
      },

      async beforeUpdate(updatedMemberData) {
        updatedMemberData.password = await bcrypt.hash(
          updatedMemberData.password,
          10
        );
        return updatedMemberData;
      },
    },

    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'member',
  }
);

module.exports = Member;
