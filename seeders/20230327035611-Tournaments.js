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
      gameImg: 'https://cdn1.epicgames.com/offer/24b9b5e323bc40eea252a10cdd3b2f10/LOL_2560x1440-98749e0d718e82d27a084941939bc9d3',
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      userId: 120,
      title: 'ESL Challenger Melbourne',
      date: '04-27-2023',
      content: "League of Legends LPL tournament series hosted in China",
      gameImg: 'https://assets.tentonhammer.com/articles/attached_images/000/027/603/medium/1200CSGO.jpg',
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      userId: 120,
      title: 'LCS 2023',
      date: '04-27-2023',
      content: "League of Legends LPL tournament series hosted in China",
      gameImg: 'https://cdn1.epicgames.com/offer/24b9b5e323bc40eea252a10cdd3b2f10/LOL_2560x1440-98749e0d718e82d27a084941939bc9d3',
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      userId: 120,
      title: 'TEKKEN WORLD TOUR 2023',
      date: '04-27-2023',
      content: "League of Legends LPL tournament series hosted in China",
      gameImg: 'https://cdn-ext.fanatical.com/production/product/1280x720/753730bd-7ba2-479c-bfdf-bac31b72ebea.jpeg',
      createdAt: new Date(),
      updatedAt: new Date()
    }]
    await queryInterface.bulkInsert('tournament', seededTournaments)

  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('tournament')
  }
};
