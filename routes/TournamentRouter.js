const Router = require('express').Router()
const controller = require('../controller/TournamentController')

Router.get('/', controller.GetTournaments)
Router.get('/id/:id', controller.GetTournamentById)
Router.post('/create', controller.createTournament)
Router.get('/teamList', controller.getTeamList)
Router.get('/team/all', controller.findTeams)
module.exports = Router