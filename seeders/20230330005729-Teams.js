'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    const seededTeams = [{
      teamName: 'Navi',
      teamLogo: 'https://1000logos.net/wp-content/uploads/2020/09/Navi-logo.png',
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      teamName: 'Team Secret',
      teamLogo: 'https://upload.wikimedia.org/wikipedia/en/thumb/2/2a/Team_Secret_logo.svg/1200px-Team_Secret_logo.svg.png',
      createdAt: new Date(),
      updatedAt: new Date()
    }]

    await queryInterface.bulkInsert('team', seededTeams)
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('team')
  }
};
