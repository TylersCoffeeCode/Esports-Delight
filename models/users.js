'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Users extends Model {
    static associate(models) {
      Users.hasMany(models.Tournaments, {
        foreignKey: 'userId',
        as: 'tournaments',
        onDelete: 'cascade',
        onUpdate: 'cascade'
      })

      Users.hasMany(models.Articles, {
        foreignKey: 'userId',
        as: 'articles',
        onDelete: 'cascade',
        onUpdate: 'cascade'
      })

      Users.hasMany(models.ArticleComments, {
        foreignKey: 'userId',
        as: 'articleComments',
        onDelete: 'cascade',
        onUpdate: 'cascade'
      })

      Users.hasMany(models.Posts, {
        foreignKey: 'userId',
        as: 'posts',
        onDelete: 'cascade',
        onUpdate: 'cascade'
      })

      Users.hasMany(models.PostComments, {
        foreignKey: 'userId',
        as: 'postComments',
        onDelete: 'cascade',
        onUpdate: 'cascade'
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