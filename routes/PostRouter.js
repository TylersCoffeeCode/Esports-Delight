const Router = require('express').Router()
const controller = require('../controller/PostRouter')

Router.get('/', controller.GetPosts)

module.exports = Router