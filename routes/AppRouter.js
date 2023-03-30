const Router = require('express').Router()
const UserRouter = require('./UserRouter')
const TournamentRouter = require('./TournamentRouter')
const ArticleRouter = require('./ArticleRouter')
const TeamRouter = require('./TeamRouter')





Router.use('/users', UserRouter)
Router.use('/tournaments', TournamentRouter)
Router.use('/articles', ArticleRouter)
Router.use('/teams', TeamRouter)



module.exports = Router