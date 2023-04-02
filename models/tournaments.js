'use strict';
const {
  Model, Sequelize
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Tournaments extends Model {
    static associate(models) {
      Tournaments.belongsTo(models.Users, {
        foreignKey: 'userId',
        as: 'tournamentCreator',
        onDelete: 'cascade',
        onUpdate: 'cascade'
      })

      Tournaments.belongsToMany(models.Teams, {
        through: 'tournamentTeam',
        foreignKey: 'tournamentId',
        onDelete: 'cascade',
        onUpdate: 'cascade'
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
      type: DataTypes.TEXT('long'),
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