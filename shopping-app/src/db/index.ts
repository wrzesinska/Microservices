import { Sequelize } from "sequelize/types/lib/sequelize";

export const sequelize = new Sequelize(process.env.DB_CONNECTION) // Example for postgres

