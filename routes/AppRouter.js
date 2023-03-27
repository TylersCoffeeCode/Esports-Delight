const Router = require('express').Router()
const UserRouter = require('./UserRouter')
const TournamentRouter = require('./TournamentRouter')
const ArticleRouter = require('./ArticleRouter')





Router.use('/users', UserRouter)
Router.use('/tournaments', TournamentRouter)
Router.use('/articles', ArticleRouter)


module.exports = Router