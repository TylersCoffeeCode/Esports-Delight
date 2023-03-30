'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Teams extends Model {
    
    static associate(models) {
      Teams.belongsToMany(models.Tournaments, {
        through: 'tournamentTeam',
        foreignKey: 'teamId'
      })

      Teams.belongsToMany(models.TournamentTeams, {
        through: 'tournamentTeam',
        foreignKey: 'teamId',
        as: 'teamList'
      })
    }
  }
  Teams.init({
    teamName: DataTypes.STRING,
    teamLogo: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Teams',
    tableName: 'team'
  });
  return Teams;
};