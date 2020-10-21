import { Model, DataTypes, Optional, Sequelize, UUIDV4 } from "sequelize";
import { sequelize } from "..";

// These are all the attributes in the User model
interface UserAttributes {
  id: string;
  username: string;
  password: string;
  createdAt?: string
  updatedAt?: string
}

// Some attributes are optional in `User.build` and `User.create` calls
interface UserCreationAttributes extends Optional<UserAttributes, "id"> { }

export class User extends Model<UserAttributes, UserCreationAttributes> implements UserAttributes {
  id!: string;
  username: string;
  password: string;
}

User.init({
  id: {
    primaryKey: true,
    type: DataTypes.UUID,
    defaultValue: UUIDV4 // Or Sequelize.UUIDV1
  },
  // id: {
  //   type: DataTypes.INTEGER.UNSIGNED,
  //   autoIncrement: true,
  //   primaryKey: true,
  // },
  // Model attributes are defined here
  username: {
    type: DataTypes.STRING,
    allowNull: false
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false
  }
}, {
  // Other model options go here
  sequelize, // We need to pass the connection instance
  modelName: 'User', // We need to choose the model name 
  // don't forget to enable timestamps!
  timestamps: true, // createdAt, updatedAt
});