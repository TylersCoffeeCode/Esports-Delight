const { Posts } = require('../models')
const { Users } = require('../models')

const GetPosts = async (req, res) => {
    try {
      const posts = await Posts.findAll({
        include: { model: Users, as: 'commentAuthor', attributes: ['userName'] }
      });
      res.send(posts);
    } catch (error) {
      throw error;
    }
  };


const GetPostById = async (req,res) => {
    try {
        const { id } = req.params
        const post = await Posts.findByPk(id)
        if (post) {
            return res.status(200).json({post})
        }
        return res.status(404).send('Post with the specified ID does not exist')
    } catch (error) {
        return res.status(500).send(error.message)
    }
}


const getPostByUserId = async (req, res) => {
    try {
      const {id} = req.params
      const post = await Posts.findAll({
        where: {userId: id}
      })
      if (post) {
        return res.status(200).json({ post })
      }
      return res.status(404).send('Post with the specified user does not exists')
    } catch (error) {
      return res.status(500).send(error.message)
    }
  }


const CreatePost = async (req,res) => {
    try {
        const post = await Posts.create({...req.body})
        res.send(post)
    } catch (error) {
        throw error
    }
}

module.exports = {
    GetPosts,
    CreatePost,
    GetPostById,
    getPostByUserId
}