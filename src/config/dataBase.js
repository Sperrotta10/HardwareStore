import { Sequelize } from "sequelize";
import { enviroment } from "./enviroment.js";
import dotenv from "dotenv";
dotenv.config()

// Configuraciones de la base de datos MYSql
const db_name = enviroment.DB_NAME
const db_user = enviroment.DB_USER
const db_password = enviroment.DB_PASSWORD
const db_host = enviroment.DB_HOST

export const sequelize = new Sequelize(db_name, db_user, db_password, {
  host: db_host,
  dialect: 'mysql',
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  },
});
