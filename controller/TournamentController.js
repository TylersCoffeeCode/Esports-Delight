const { where } = require('sequelize')
const { Tournaments } = require('../models')
const { Teams } = require('../models')
const { Users } = require('../models')
const { TournamentTeams } = require('../models')


const GetTournaments = async (req, res) => {
    try {
        const tournaments = await Tournaments.findAll()
        res.send(tournaments)
    } catch (error) {
        throw error
    }
}
const GetTournamentById = async (req, res) => {
    try {
        const tournament = await Tournaments.findByPk(req.params.id)
        if (tournament) {
            return res.status(200).json({ tournament })
        }
        return res.status(404).send('Tournament with the specified ID does not exist')
    } catch (error) {
        return res.status(500).send(error.message)
    }
}

const getTeamList = async (req, res) => {
    try {
        const list = await Teams.findAll({
            include: [
                {
                    model: Tournaments,
                    through: 'tournamentTeam'
                }
            ]
        })
        return res.status(200).json({ list })
    } catch (error) {
        console.log(error)
    }
}



const createTournament = async (req, res) => {
    const { title, date, content, gameImg, userId } = req.body
    try {
        const user = await Users.findOne({ where: { id: userId } })
        if (!user) {
            return res.status(404).json({ error: 'User not found' })
        }
        const tournament = await Tournaments.create({
            title,
            date,
            content,
            gameImg,
            userId,
        })
        const team = await Teams.findByPk(3)
        tournament.addTeam(team)
        return res.status(201).json(team)
    } catch (err) {
        console.log(err);
        return res.status(500).json({ error: 'Error' })
    }
}

const findTeams = async (req, res) => {
    try {
        console.log('HELLO DDR');
        const tTeams = await TournamentTeams.findAll({ where: { tournamentId: 6 } })
        return res.status(200).json(tTeams);
    } catch (error) {
        return res.status(500).json({ error: 'Error' })
    }
}




module.exports = {
    GetTournaments,
    GetTournamentById,
    createTournament,
    getTeamList,
    findTeams
}