'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    const seededTournamentTeams = [{
      tournamentId: 1,
      teamId: 1,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      tournamentId: 1,
      teamId: 2,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      tournamentId: 1,
      teamId: 3,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      tournamentId: 1,
      teamId: 4,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      tournamentId: 1,
      teamId: 5,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      tournamentId: 1,
      teamId: 6,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      tournamentId: 1,
      teamId: 7,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      tournamentId: 1,
      teamId: 8,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      tournamentId: 2,
      teamId: 1,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      tournamentId: 2,
      teamId: 5,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      tournamentId: 2,
      teamId: 9,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      tournamentId: 2,
      teamId: 17,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      tournamentId: 2,
      teamId: 11,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      tournamentId: 2,
      teamId: 4,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      tournamentId: 3,
      teamId: 19,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      tournamentId: 3,
      teamId: 3,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      tournamentId: 3,
      teamId: 5,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      tournamentId: 3,
      teamId: 12,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      tournamentId: 3,
      teamId: 16,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      tournamentId: 3,
      teamId: 13,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      tournamentId: 3,
      teamId: 2,
      createdAt: new Date(),
      updatedAt: new Date()
    }
  ]

  await queryInterface.bulkInsert('tournamentTeam', seededTournamentTeams)

  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('tournamentTeam')
    
  }
};
