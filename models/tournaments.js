'use strict';
const {
  Model, Sequelize
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Tournaments extends Model {
    static associate(models) {
      Tournaments.belongsTo(models.Users, {
        foreignKey: 'userId',
        as: 'tournamentCreator'
      })

      Tournaments.belongsToMany(models.Teams, {
        through: 'tournamentTeam',
        foreignKey: 'tournamentId'
      })
    }
  }
  Tournaments.init({
    userId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'user',
        key: 'id'
      }
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false
    },
    date: {
      type: DataTypes.STRING,
      allowNull: false
    },
    content: {
      type: DataTypes.STRING,
      allowNull: false
    },
    gameImg: {
      type: DataTypes.STRING,
      allowNull: false
    }
  }, {
    sequelize,
    modelName: 'Tournaments',
    tableName: 'tournament'
  });
  return Tournaments;
};