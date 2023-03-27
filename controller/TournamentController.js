const { Tournaments } = require('../models')

const GetTournaments = async(req,res) => {
    try {
        const tournaments = await Tournaments.findAll()
        res.send(tournaments)
    } catch (error) {
        throw error
    }
}

const GetTournamentById = async (req,res) => {
    try {
        const tournament = await Tournaments.findByPk(req.body.id)
        if (tournament) {
            return res.status(200).json({tournament})
        }
        return res.status(404).send('Tournament with the specified ID does not exist')
    } catch (error) {
        return res.status(500).send(error.message)
    }
}

module.exports = {
    GetTournaments,
    GetTournamentById
}