const { Users } = require('../models')
const middleware = require('../middleware')

const FindUsers = async (req, res) => {
    try {
        const users = await Users.findAll()
        res.send(users)
    } catch (error) {
        throw error
    }
}

const FindUserById = async (req, res) => {
    try {
        const user = await Users.findByPk(req.params.userId)
        return res.send(user)
    } catch {

    }
}


const Register = async (req, res) => {
    try {
        const { email, password, userName } = req.body
        console.log(email)
        let passwordDigest = await middleware.hashPassword(password)
        const user = await Users.create({ email, password: passwordDigest, userName })
        res.send(user)
    } catch (error) {
        throw error
    }
}

const Login = async (req, res) => {
    try {
        const { userName, password } = req.body
        const user = await Users.findOne({
            where: { userName: userName },
            raw: true
        })
        let matched = await middleware.comparePassword(
            user.password,
            password
        )
        if (matched) {
            let payload = {
                id: user.id,
                email: user.email
            }
            let token = middleware.createToken(payload)
            return res.send({ user: payload, token })
        }
        res.status(401).send({ status: 'Error', msg: 'Incorrect Password' })
    } catch (error) {
        console.log(error)
        res.status(401).send({ status: 'Error', msg: 'An error has occurred on Login!' })
    }
}

const UpdatePassword = async (req, res) => {
    try {
        const { oldPassword, newPassword } = req.body
        const user = await Users.findByPk(req.params.id)
        let matched = await middleware.comparePassword(
            user.password,
            oldPassword
        )
        if (matched) {
            let password = await middleware.hashPassword(newPassword)
            await user.update({ password })
            let payload = {
                id: user.id,
                email: user.email
            }
            return res.send({ status: 'Password Updated!', user: payload })
        }
        res.status(401).send({ status: 'Error', msg: 'Old Password did not match!' })
    } catch (error) {
        console.log(error)
        res.status(401).send({ status: 'Error', msg: 'An error has occurred updating password!' })
    }
}



module.exports = {
    FindUsers,
    FindUserById,
    Register,
    Login,
    UpdatePassword
}