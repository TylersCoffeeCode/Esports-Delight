'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    const seededArticles = [{
      userId: 120,
      title: 'CSGO 2 Release Date',
      date: '04-27-2023',
      content: 'Insert very amazong content paragraph here',
      image: 'https://cdn.cloudflare.steamstatic.com/apps/csgo/images/csgo_react/social/cs2.jpg',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      userId: 120,
      title: 'DOTA 2 TI Winners',
      date: '04-27-2023',
      content: 'Insert very amazong content paragraph here',
      image: 'https://cdn.cloudflare.steamstatic.com/steamcommunity/public/images/clans/3703047/d20ecdc24cb719aba0ed6fcd4c19c6da2673f510.jpg',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      userId: 120,
      title: "Meet League's Newest Champion",
      date: '04-27-2023',
      content: 'Insert very amazong content paragraph here',
      image: 'https://i2.wp.com/theriftcrown.com/wp-content/uploads/2023/03/milio-league-of-legends-abilities.jpg?fit=1920%2C1080&ssl=1',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      userId: 120,
      title: "Tekken 8 King Gameplay Trailer",
      date: '04-27-2023',
      content: 'Insert very amazong content paragraph here',
      image: 'https://www.destructoid.com/wp-content/uploads/2023/03/Tekken8_King_031723.jpg',
      createdAt: new Date(),
      updatedAt: new Date()
    }]

    await queryInterface.bulkInsert('article', seededArticles)
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('tournament')
  }
};
