const Router = require('express').Router()
const UserRouter = require('./UserRouter')
const TournamentRouter = require('./TournamentRouter')





Router.use('/users', UserRouter)
Router.use('/tournaments', TournamentRouter)


module.exports = Router