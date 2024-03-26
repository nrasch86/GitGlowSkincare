const mongoose = require("mongoose");
let uri = "mongodb+srv://admin:admin123@gitglow.wlti1oa.mongodb.net/gitglowdb?retryWrites=true&w=majority"
mongoose.connect(uri);

const db = mongoose.connection;

db.on("error", console.error.bind(console, "connection error:"));
db.once("open", () => {
  console.log("Connected to MongoDB");
});

module.exports = db;