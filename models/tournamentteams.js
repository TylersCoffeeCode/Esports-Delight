'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class TournamentTeams extends Model {
    
    static associate(models) {
      TournamentTeams.belongsTo(models.Teams, {
        foreignKey: 'teamId',
        as: 'teamList'
      })
    }
  }
  TournamentTeams.init({
    tournamentId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'tournament',
        key: 'id'
      }
    },
    teamId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'team',
        key: 'id'
      }
    }
  }, {
    sequelize,
    modelName: 'TournamentTeams',
    tableName: 'tournamentTeam'
  });
  return TournamentTeams;
};