'use strict';
import { DataTypes, Model, Optional, UUIDV4 } from 'sequelize';
// These are all the attributes in the Address model
interface AddressAttributes {
  id: string;
  user_id: string;
  address: string;
  createdAt?: string
  updatedAt?: string
}

// Some attributes are optional in `User.build` and `User.create` calls
interface AddressCreationAttributes extends Optional<AddressAttributes, "id"> { }

export class Address extends Model<AddressAttributes, AddressCreationAttributes> implements AddressAttributes {
  id!: string;
  user_id: string;
  address: string;
}

  Address.init({
    id: {
      primaryKey: true,
      type: DataTypes.UUID,
      defaultValue: UUIDV4 // Or Sequelize.UUIDV1
    },
    address: DataTypes.STRING,
    user_id: DataTypes.STRING
  }, 
  {
    sequelize,
    modelName: 'Address', tableName: 'Addresses'
  });