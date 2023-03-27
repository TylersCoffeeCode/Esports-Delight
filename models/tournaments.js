'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Tournaments extends Model {
    static associate(models) {
      Tournaments.belongsTo(models.Users, {
        foreignKey: 'userId',
        as: 'tournamentCreator'
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
    teamOne: {
      type: DataTypes.STRING,
      allowNull: false
    },
    teamOneImage: {
      type: DataTypes.STRING,
      allowNull: false
    },
    teamTwo: {
      type: DataTypes.STRING,
      allowNull: false
    },
    teamTwoImage: {
      type: DataTypes.STRING,
      allowNull: false
    },
  }, {
    sequelize,
    modelName: 'Tournaments',
    tableName: 'tournament'
  });
  return Tournaments;
};