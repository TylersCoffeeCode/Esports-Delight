'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    const seededUsers = [{
      id: 120,
      isAdmin: true,
      userName: 'AdminTyler',
      email: 'coatsctyler@gmail.com',
      password: 'tester123',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      id: 122,
      isAdmin: false,
      userName: 'UserRando',
      email: 'random@gmail.com',
      password: 'random123',
      createdAt: new Date(),
      updatedAt: new Date()
    }
  ]

  await queryInterface.bulkInsert('user', seededUsers)
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('user')
  }
};
