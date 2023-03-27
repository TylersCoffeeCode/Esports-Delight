'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Users extends Model {
    static associate(models) {
      Users.hasMany(models.Tournaments, {
        foreignKey: 'userId',
        as: 'tournaments'
      })

      Users.hasMany(models.Articles, {
        foreignKey: 'userId',
        as: 'articles'
      })

      Users.hasMany(models.ArticleComments, {
        foreignKey: 'userId',
        as: 'articleComments'
      })

      Users.hasMany(models.Posts, {
        foreignKey: 'userId',
        as: 'posts'
      })

      Users.hasMany(models.PostComments, {
        foreignKey: 'userId',
        as: 'postComments'
      })
    }
  }
  Users.init({
    isAdmin: {
      type: DataTypes.BOOLEAN,
      defaultValue: false
    },
    userName: {
      type: DataTypes.STRING,
      allowNull: false
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        isEmail: true
      }
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false
    },
  }, {
    sequelize,
    modelName: 'Users',
    tableName: 'user'
  });
  return Users;
};