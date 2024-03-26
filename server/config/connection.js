//Configuration for the database connection.
const { MongoClient } = require('mongodb');
let uri = "mongodb+srv://admin:admin123@gitglow.wlti1oa.mongodb.net/?retryWrites=true&w=majority&appName=GitGlow"

MongoClient.connect(process.env.MONGODB_URI || uri);

module.exports = MongoClient.connection;