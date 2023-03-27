const Router = require('express').Router()
const middleware = require('../middleware')
const controller = require('../controller/UserController')


Router.get('/', controller.FindUsers)
Router.get('/:userId', controller.FindUserById)
Router.post('/create', controller.Register)
Router.post('/login', controller.Login)
Router.post('/changePassword/:id', controller.UpdatePassword)

module.exports = Router