const Router = require('express').Router()
const controller = require('../controller/ArticleController')

Router.get('/', controller.GetArticle)
Router.get('/:id', controller.GetArticleById)

module.exports = Router