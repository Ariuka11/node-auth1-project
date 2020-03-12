const express = require("express")
const model = require("./model")

const router = express.Router()

router.get("/", async (req, res, next) => {
    try {
        res.json(await model.find())
    } catch (err) {
        next(err)
    }
})

module.exports = router