const mongoose = require("mongoose");

const dbConnect = async () => {
    await mongoose.connect("mongodb://localhost:27017/ToDo");
    console.log("Connected With MongoDB");
}

module.exports = dbConnect;
