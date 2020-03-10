const express = require('express')

const server = express()
const port = 4000

server.use(express.json())

server.get("/", (req, res) => {
    res.send(`<h2>Welcome</h2>`)
})

server.listen(port, () => {
    console.log(`Server is listening on ${port}...`)
})