const Router = require('express').Router()
const controller = require('../controller/TournamentController')

Router.get('/', controller.GetTournaments)
Router.get('/:id', controller.GetTournamentById)
Router.post('/create', controller.createTournament)

module.exports = Router