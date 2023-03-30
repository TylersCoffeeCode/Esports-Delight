'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    const seededTournaments = [{
      userId: 120,
      title: 'DOTA 2 INTERNATIONAL',
      date: '04-27-2023',
      content: "DOTA 2 has once again announced the legendary esports tournament once again. With over 70 million dollars with prizepool money 2018, can valve once again capture that intensity once again ",
      gameImg: 'https://cdn.cloudflare.steamstatic.com/steam/apps/570/capsule_616x353.jpg?t=1678300512',
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      userId: 120,
      title: 'LPL Spring 2023',
      date: '04-27-2023',
      content: "League of Legends LPL tournament series hosted in China",
      gameImg: 'https://static.invenglobal.com/upload/image/2020/02/28/i1582863333357496.png',
      createdAt: new Date(),
      updatedAt: new Date()
    }]
    await queryInterface.bulkInsert('tournament', seededTournaments)

  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('tournament')
  }
};
