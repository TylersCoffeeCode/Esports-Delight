const { Teams } = require('../models')

const GetTeams = async(req,res) => {
    try {
        const teams = await Teams.findAll()
        res.send(teams)
    } catch (error) {
        throw error
    }
}

const GetTeamById = async (req,res) => {
    try {
        const team = await Teams.findByPk(req.body.id)
        if (team) {
            return res.status(200).json({team})
        }
        return res.status(404).send('Team with the specified ID does not exist')
    } catch (error) {
        return res.status(500).send(error.message)
    }
}

module.exports = {
    GetTeams,
    GetTeamById
}