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
    },
    {
      teamName: 'OG',
      teamLogo: 'https://pbs.twimg.com/profile_images/1433737779430128643/DaK3Wn90_400x400.jpg',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      teamName: 'Team Secret',
      teamLogo: 'https://upload.wikimedia.org/wikipedia/en/thumb/2/2a/Team_Secret_logo.svg/1200px-Team_Secret_logo.svg.png',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      teamName: 'PSG.LGD',
      teamLogo: 'https://liquipedia.net/commons/images/1/1f/Psg_lgd.png',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      teamName: 'Vici Gaming',
      teamLogo: 'https://liquipedia.net/commons/images/thumb/9/98/Vici_Gaming_logo_2021.png/600px-Vici_Gaming_logo_2021.png',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      teamName: 'Team Liquid',
      teamLogo: 'https://liquipedia.net/commons/images/9/97/Liquidlogo_std.png',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      teamName: 'Evil Geniuses',
      teamLogo: 'https://liquipedia.net/commons/images/thumb/e/e5/Evil_Geniuses_2021.png/600px-Evil_Geniuses_2021.png',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      teamName: 'Fnatic',
      teamLogo: 'https://liquipedia.net/commons/images/thumb/e/e4/Fnatic_logo_2021.png/600px-Fnatic_logo_2021.png',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      teamName: 'T1',
      teamLogo: 'https://liquipedia.net/commons/images/thumb/c/c8/T1_logo_2021.png/600px-T1_logo_2021.png',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      teamName: 'Nigma',
      teamLogo: 'https://liquipedia.net/commons/images/5/5c/Nigma.png',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      teamName: 'Alliance',
      teamLogo: 'https://liquipedia.net/commons/images/thumb/e/e6/Alliance_logo_2021.png/600px-Alliance_logo_2021.png',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      teamName: 'Astralis',
      teamLogo: 'https://www.esportspedia.com/csgo/images/thumb/5/5f/Astralis_Logo.png/600px-Astralis_Logo.png',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      teamName: 'Natus Vincere',
      teamLogo: 'https://www.esportspedia.com/csgo/images/thumb/8/88/Natus_Vincere.png/600px-Natus_Vincere.png',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      teamName: 'G2 Esports',
      teamLogo: 'https://www.esportspedia.com/csgo/images/thumb/d/d7/G2_Esports.png/600px-G2_Esports.png',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      teamName: 'Fnatic',
      teamLogo: 'https://www.esportspedia.com/csgo/images/thumb/d/d3/Fnatic_logo.png/600px-Fnatic_logo.png',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      teamName: 'Team Liquid',
      teamLogo: 'https://www.esportspedia.com/csgo/images/thumb/6/62/Team_Liquid.png/600px-Team_Liquid.png',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      teamName: 'FaZe Clan',
      teamLogo: 'https://www.esportspedia.com/csgo/images/thumb/9/9d/FaZe_Clan_logo.png/600px-FaZe_Clan_logo.png',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      teamName: 'mousesports',
      teamLogo: 'https://www.esportspedia.com/csgo/images/thumb/2/2b/Mousesports_logo.png/600px-Mousesports_logo.png',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      teamName: 'ENCE',
      teamLogo: 'https://www.esportspedia.com/csgo/images/thumb/f/fc/ENCE_Logo.png/600px-ENCE_Logo.png',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      teamName: 'Ninjas in Pyjamas',
      teamLogo: 'https://www.esportspedia.com/csgo/images/thumb/7/7d/Ninjas_in_Pyjamas.png/600px-Ninjas_in_Pyjamas.png',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      teamName: 'Vitality',
      teamLogo: 'https://www.esportspedia.com/csgo/images/thumb/f/f1/Team_Vitality_logo.png/600px-Team_Vitality_logo.png',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      teamName: 'Cloud9',
      teamLogo: 'https://1000logos.net/wp-content/uploads/2017/08/Cloud-9-Symbol.jpg',
      createdAt: new Date(),
      updatedAt: new Date()
    }]

    await queryInterface.bulkInsert('team', seededTeams)
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('team')
  }
};
