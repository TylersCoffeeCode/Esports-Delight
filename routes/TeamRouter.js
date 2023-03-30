const Router = require('express').Router()
const controller = require('../controller/TeamRouter')

Router.get('/', controller.GetTeams)
Router.get('/:id', controller.GetTeams)

module.exports = Router