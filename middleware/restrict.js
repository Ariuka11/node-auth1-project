const bcrypt = require("bcryptjs");
const model = require('../users/model')

function restrict() {
    const error = {
        message: "Invalid credentials",
    }
    
    return async (req, res, next) => {
        try {
            const { username, password } = req.headers
            if (!username || !password) {
                return res.status(401).json(error)
            }

            const user = await model.findBy({ username }).first()
            if (!user) {
                return res.status(401).json(error)
            }

            const passwordValid = await bcrypt.compare(password, user.password)
            if (!passwordValid) {
                return res.status(401).json(error)
            }

            next()
        } catch (err) {
            next(err)
        }
    }
}

module.exports = restrict