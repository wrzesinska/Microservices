import { Sequelize } from "sequelize";
// export const sequelize = new Sequelize(process.env.DB_CONNECTION) // Example for postgres

export const sequelize = new Sequelize({
  database: process.env.DB_DATABASE,
  username: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  host: process.env.DB_HOST,
  dialect:'postgres'
}) // Example for postgres


if (process.env.NODE_ENV !== 'production') {
  console.log('SYNCING DB STRUCTURE!!!')
  sequelize.sync()
}