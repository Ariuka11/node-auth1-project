const bcrypt = require("bcryptjs")
const db = require("../data/config")

module.exports = {
    find,
    findById,
    findBy,
    add
}

function find() {
    return db('users').select("id", "username")
}

function findById(id) {
    return db('users')
        .select('id', 'username')
        .where({ id })
        .first()
}

function findBy(filter) {
    return db('users')
        .select('id', 'username', "password")
        .where(filter)
      
}

async function add(user) {
    user.password = await bcrypt.hash(user.password, 13)

    const [id] = await db('users').insert(user) 
    return findById(id)
}



