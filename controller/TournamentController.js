const { Tournaments } = require('../models')
const { Teams } = require('../models')
const { Users } = require('../models')


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
        const tournament = await Tournaments.findByPk(req.body.id)
        if (tournament) {
            return res.status(200).json({ tournament })
        }
        return res.status(404).send('Tournament with the specified ID does not exist')
    } catch (error) {
        return res.status(500).send(error.message)
    }
}


const createTournament = async (req, res) => {
    const { title, date, content, gameImg, userId } = req.body;
    try {
        const user = await Users.findOne({ where: { id: userId } });
        if (!user) {
            return res.status(404).json({ error: 'User not found' });
        }
        const tournament = await Tournaments.create({
            title,
            date,
            content,
            gameImg,
            userId,
        });
        return res.status(201).json(tournament);
    } catch (err) {
        console.log(err);
        return res.status(500).json({ error: 'Error' });
    }
};

module.exports = {
    GetTournaments,
    GetTournamentById,
    createTournament
}