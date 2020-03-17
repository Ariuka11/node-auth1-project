const express = require("express")
const model = require("./model")
const restrict = require("../middleware/restrict")

const router = express.Router()

router.get("/", restrict(), async (req, res, next) => {
    try {
        res.json(await model.find())
    } catch (err) {
        next(err)
    }
})

module.exports = router