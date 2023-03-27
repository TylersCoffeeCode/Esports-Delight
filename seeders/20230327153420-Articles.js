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
      title: 'CSGO 2 Release Date',
      date: '04-27-2023',
      content: 'Insert very amazong content paragraph here',
      image: 'https://cdn.cloudflare.steamstatic.com/apps/csgo/images/csgo_react/social/cs2.jpg',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      userId: 120,
      title: 'CSGO 2 Release Date',
      date: '04-27-2023',
      content: 'Insert very amazong content paragraph here',
      image: 'https://cdn.cloudflare.steamstatic.com/apps/csgo/images/csgo_react/social/cs2.jpg',
      createdAt: new Date(),
      updatedAt: new Date()
    }]

    await queryInterface.bulkInsert('article', seededArticles)
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('tournament')
  }
};
