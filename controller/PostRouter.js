const { Posts } = require('../models')

const GetPosts = async(req,res) => {
    try {
        const posts = await Posts.findAll()
        res.send(posts)
    } catch (error) {
        throw error
    }
}

module.exports = {
    GetPosts
}