const mongoose = require("mongoose");
let uri = "mongodb+srv://admin:admin123@gitglow.wlti1oa.mongodb.net/?retryWrites=true&w=majority&appName=GitGlow"
mongoose.connect(uri);

const db = mongoose.connection;

db.on("error", console.error.bind(console, "connection error:"));
db.once("open", () => {
  console.log("Connected to MongoDB");
});

module.exports = db;