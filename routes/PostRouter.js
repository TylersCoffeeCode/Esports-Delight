const Router = require('express').Router()
const controller = require('../controller/PostRouter')

Router.get('/', controller.GetPosts)
Router.get('/id/:id', controller.GetPostById)
Router.post('/create', controller.CreatePost)
Router.get('/myPosts/:id', controller.getPostByUserId)
Router.delete('/delete/:id', controller.DeletePost)


module.exports = Router