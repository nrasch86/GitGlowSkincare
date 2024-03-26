//Configuration for the database connection.
const { MongoClient } = require('mongodb');
let dbConnection
let uri = "mongodb+srv://admin:admin123@gitglow.wlti1oa.mongodb.net/?retryWrites=true&w=majority&appName=GitGlow"

module.exports = {
    connectToDb: (cb) => {
        MongoClient.connect(uri)
        .then((client) => {
            dbConnection = client.db()
            return cb()
        })
        . catch(err => {
            console.log(err)
            return cb(err)
        })
    },
    getDb: () => dbConnection
}