'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    const seededTournaments = [{
      userId: 120,
      title: 'DOTA 2 INTERNATIONAL',
      date: '04-27-2023',
      content: "DOTA 2 has once again announced the legendary esports tournament once again. With over 70 million dollars with prizepool money 2018, can valve once again capture that intensity once again ",
      teamOne: 'NAVI',
      teamOneImage: 'https://1000logos.net/wp-content/uploads/2020/09/Navi-logo.png',
      teamTwo: 'LGD',
      teamTwoImage: 'https://static.wikia.nocookie.net/lolesports_gamepedia_en/images/e/e8/LGD_Gaming_logo_old.png/revision/latest/scale-to-width-down/1200?cb=20181102100944',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      userId: 120,
      title: 'DOTA 2 INTERNATIONAL',
      date: '04-27-2023',
      content: "DOTA 2 has once again announced the legendary esports tournament once again. With over 70 million dollars with prizepool money 2018, can valve once again capture that intensity once again ",
      teamOne: 'NAVI',
      teamOneImage: 'https://1000logos.net/wp-content/uploads/2020/09/Navi-logo.png',
      teamTwo: 'LGD',
      teamTwoImage: 'https://static.wikia.nocookie.net/lolesports_gamepedia_en/images/e/e8/LGD_Gaming_logo_old.png/revision/latest/scale-to-width-down/1200?cb=20181102100944',
      createdAt: new Date(),
      updatedAt: new Date()
    }]
    await queryInterface.bulkInsert('tournament', seededTournaments)
  
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('tournament')
  }
};
