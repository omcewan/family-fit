require('dotenv').config();
const Sequelize = require('sequelize');

const sequelize = process.env.JAWSDB_URL
  ? new Sequelize(process.env.JAWSDB_URL)
  : new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PW, {
    // if connection doesn't work try changing host to 'localhost'
      host: '127.0.0.1' ,
      // port: 3306,
      dialect: 'mysql',
    });

module.exports = sequelize;