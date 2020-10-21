import { Sequelize } from "sequelize";

export const sequelize = new Sequelize(process.env.DB_CONNECTION) // Example for postgres


if(process.env.NODE_ENV !== 'production'){
  console.log('SYNCING DB STRUCTURE!!!')
  sequelize.sync()
}