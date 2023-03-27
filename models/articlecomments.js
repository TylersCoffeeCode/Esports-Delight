'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class ArticleComments extends Model {
    static associate(models) {
      ArticleComments.belongsTo(models.Users, {
        foreignKey: 'userId',
        as: 'commentAuthor'
      })

      ArticleComments.belongsTo(models.Articles, {
        foreignKey: 'articleId',
        as: 'commentedArticle'
      })
    }
  }
  ArticleComments.init({
    userId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model:'user',
        key: 'id'
      }
    },
    articleId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'article',
        key: 'id'
      }
    },
    content: {
      type: DataTypes.STRING,
      allowNull: false
    },
  }, {
    sequelize,
    modelName: 'ArticleComments',
    tableName: 'articleComment'
  });
  return ArticleComments;
};