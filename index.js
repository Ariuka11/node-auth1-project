const express = require('express')
const session = require("express-session")
const KnexSessionStore = require("connect-session-knex")(session)
const authRouter = require('./auth/auth-router')
const userRouter = require('./users/users-router')

const server = express()
const port = 4000
 

server.use(express.json())

server.use("/api/register", authRouter)
server.use("/api/users", userRouter)
server.use(session({
    resave: false,
    saveUninitialized: false,
    secret: "life is beautiful",
    cookie: {
        httpOnly: true,
        maxAge: 1000 * 60 * 60 * 24,
        secure: false
    },
    store: new KnexSessionStore({
        knex: dbConfig,
        createTable: true,
    })
}))

server.get("/", (req, res) => {
    res.send(`<h2>Welcome</h2>`)
})

server.listen(port, () => {
    console.log(`Server is listening on ${port}...`)
})