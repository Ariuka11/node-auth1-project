const express = require('express')
const bcrypt = require("bcryptjs")

const router = express.Router()

router.post("/register", async (req, res, next) => {
    try {
        const { username } = req.body
    } catch (err) {
        next(err)
    }
})

router.post("/login", async (req, res, next) => {
    try {
        const { username, password} =req.body
    } catch (err) {
        next(err)
    }
})

module.exports = router