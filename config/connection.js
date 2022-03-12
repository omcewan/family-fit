require('dotenv').config();
const Sequelize = require('sequelize');
console.log(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PW)
const sequelize = process.env.JAWSDB_URL
  ? new Sequelize(process.env.JAWSDB_URL)
  : new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PW, {
      host: 'localhost' ,
      port: 3306,
      dialect: 'mysql',
    });

module.exports = sequelize;