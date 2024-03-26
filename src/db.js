
const {Sequelize} = require("sequelize");
require("dotenv").config()
const { DB_USER, DB_PASSWORD, DB_HOST,DB_PORT,DB_NAME } = process.env;
const sequelize = new Sequelize(DB_NAME, DB_USER, DB_PASSWORD, {
    host: DB_HOST,
    port: DB_PORT,
    dialect:'mysql', /* one of 'mysql' | 'postgres' | 'sqlite' | 'mariadb' | 'mssql' | 'db2' | 'snowflake' | 'oracle' */
   logging: false 
  });

// const sequelize = new Sequelize('mysql://root:BHHsqgcDRacWWrAAVBirrMiBDATstxKB@viaduct.proxy.rlwy.net:17262/railway', {
//     dialect: 'mysql',
//     logging: false,
//     dialectOptions: {
//       ssl: {
//         require: true,
//         rejectUnauthorized: false
//       }
//     }
//   });

  module.exports = sequelize