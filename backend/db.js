const mongoose = require('mongoose');

const mongoURI = "mongodb://localhost:27017/textHorizon";

const connectToMongo = () => {
    mongoose.connect(mongoURI)
    console.log("Mongodb Connected Successfully")
}


module.exports = connectToMongo;
