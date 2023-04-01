'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Articles extends Model {

    static associate(models) {
      Articles.belongsTo(models.Users, {
        foreignKey: 'userId',
        as: 'articleAuthor',
        onDelete: 'cascade',
        onUpdate: 'cascade'
      })
    }
  }
  Articles.init({
    userId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'user',
        key: 'id',
        onDelete: 'cascade',
        onUpdate: 'cascade'
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
    image: {
      type: DataTypes.STRING,
      allowNull: false
    },
  }, {
    sequelize,
    modelName: 'Articles',
    tableName: 'article'
  });
  return Articles;
};