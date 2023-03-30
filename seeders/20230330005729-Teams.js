'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    const seededTeams = [{
      teamName: 'Natus Vincere',
      teamLogo: 'https://upload.wikimedia.org/wikipedia/en/thumb/a/ac/NaVi_logo.svg/800px-NaVi_logo.svg.png',
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
      teamLogo: 'https://ogs.gg/wp-content/themes/og/dist/images/og_logo_2020.png',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      teamName: 'PSG.LGD',
      teamLogo: 'https://upload.wikimedia.org/wikipedia/en/2/22/PSG_LGD_Logo.png',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      teamName: 'Vici Gaming',
      teamLogo: 'https://static-prod.weplay.tv/users/avatar/user_22405_52bd2fe472e37354a251f5e2a6626381.C0C0C0-1D1D1D-545454.png',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      teamName: 'Team Liquid',
      teamLogo: 'https://b2272258.smushcdn.com/2272258/wp-content/uploads/2020/10/MonoLight_Icon.png?lossy=1&strip=1&webp=1',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      teamName: 'Evil Geniuses',
      teamLogo: 'https://upload.wikimedia.org/wikipedia/en/thumb/5/5f/Evil_geniuses_logo.svg/1200px-Evil_geniuses_logo.svg.png',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      teamName: 'Fnatic',
      teamLogo: 'https://upload.wikimedia.org/wikipedia/en/thumb/4/43/Esports_organization_Fnatic_logo.svg/1200px-Esports_organization_Fnatic_logo.svg.png',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      teamName: 'T1',
      teamLogo: 'https://upload.wikimedia.org/wikipedia/en/thumb/f/f9/T1_logo.svg/1200px-T1_logo.svg.png',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      teamName: 'Nigma',
      teamLogo: 'https://1.bp.blogspot.com/-6_HHtNcFTWg/YYvhPo4eRdI/AAAAAAAADq8/hELDZqWG6NULnQaJGQ7EMeGx1SufxQ-UwCNcBGAsYHQ/s2048/Nigma%2BGalaxy.png',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      teamName: 'Alliance',
      teamLogo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/20/Alliance2016.png/800px-Alliance2016.png',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      teamName: 'Astralis',
      teamLogo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/7d/Astralis_logo.svg/1200px-Astralis_logo.svg.png',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      teamName: 'G2 Esports',
      teamLogo: 'https://upload.wikimedia.org/wikipedia/en/thumb/1/12/Esports_organization_G2_Esports_logo.svg/1200px-Esports_organization_G2_Esports_logo.svg.png',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      teamName: 'FaZe Clan',
      teamLogo: 'https://upload.wikimedia.org/wikipedia/commons/4/4d/Faze_Clan.svg',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      teamName: 'mousesports',
      teamLogo: 'https://upload.wikimedia.org/wikipedia/en/thumb/5/5e/MOUZ_logo_2021.png/220px-MOUZ_logo_2021.png',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      teamName: 'ENCE',
      teamLogo: 'https://upload.wikimedia.org/wikipedia/en/thumb/a/a7/Ence_%28esports%29_logo.svg/1200px-Ence_%28esports%29_logo.svg.png',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      teamName: 'Ninjas in Pyjamas',
      teamLogo: 'https://upload.wikimedia.org/wikipedia/en/thumb/d/d0/Ninjas_in_Pyjamas_logo.svg/1200px-Ninjas_in_Pyjamas_logo.svg.png',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      teamName: 'Vitality',
      teamLogo: 'https://upload.wikimedia.org/wikipedia/en/4/49/Team_Vitality_logo.svg',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      teamName: 'Cloud9',
      teamLogo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f7/Cloud9_logo.svg/1200px-Cloud9_logo.svg.png',
      createdAt: new Date(),
      updatedAt: new Date()
    }]

    await queryInterface.bulkInsert('team', seededTeams)
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('team')
  }
};
