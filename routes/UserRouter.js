const Router = require('express').Router()
const controller = require('../controller/UserController')


Router.get('/', controller.FindUsers)

module.exports = Router