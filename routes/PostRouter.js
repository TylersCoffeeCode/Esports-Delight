const Router = require('express').Router()
const controller = require('../controller/PostRouter')

Router.get('/', controller.GetPosts)
Router.get('/:id', controller.GetPostById)
Router.post('/create', controller.CreatePost)


module.exports = Router