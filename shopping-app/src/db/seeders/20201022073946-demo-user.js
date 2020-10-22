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
    return queryInterface.bulkInsert('Users', [
      {
        // id: 'd17b7044-4ee6-459e-ala5-6362a37cf9b5',
        id: uuid('admin'),
        username: 'admin',
        password: 'be78bbf6b1e4056f3b5f19da7753880f',
        createdAt: '2020-10-22T08:10:48.742Z',
        updatedAt: '2020-10-22T08:10:48.742Z',
      },
      {
        id: uuid('user'),
        username: 'user',
        password: 'be78bbf6b1e4056f3b5f19da7753880f',
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
    return  queryInterface.bulkDelete('Users', null, {});
  }
};
