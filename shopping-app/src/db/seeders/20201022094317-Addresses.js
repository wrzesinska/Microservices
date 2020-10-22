'use strict';
const uuid = require('uuid-by-string')

module.exports = {
  up: async (queryInterface, Sequelize) => {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
    return queryInterface.bulkInsert('Addresses', [
      {
        // id: 'd17b7044-4ee6-459e-ala5-6362a37cf9b5',
        id: uuid('admin'),
        user_id: uuid('user'),
        address: 'mail@mail.com',
        createdAt: '2020-10-22T08:10:48.742Z',
        updatedAt: '2020-10-22T08:10:48.742Z',
      },
      {
        id: uuid('user'),
        user_id: uuid('user'),
        address: 'mail2@mail2.com',
        createdAt: '2020-10-22T08:10:48.742Z',
        updatedAt: '2020-10-22T08:10:48.742Z',
      },
    ])
  },
  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    return  queryInterface.bulkDelete('Addresses', null, {});
  }
};
