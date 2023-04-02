const { Articles } = require('../models')

const GetArticle = async(req,res) => {
    try {
        const articles = await Articles.findAll()
        res.send(articles)
    } catch (error) {
        throw error
    }
}

const GetArticleById = async (req,res) => {
    try {
        const { id } = req.params
        const article = await Articles.findByPk(id)
        if (article) {
            return res.status(200).json({article})
        }
        return res.status(404).send('Article with the specified ID does not exist')
    } catch (error) {
        return res.status(500).send(error.message)
    }
}

module.exports = {
    GetArticle,
    GetArticleById
}