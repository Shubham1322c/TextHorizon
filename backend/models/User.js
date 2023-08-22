const { default: mongoose } = require('mongoose');
const connectToMongo = require('../db.js');
const { Schema } = mongoose;

const UserSchema = new Schema({
    name:{
        type: String,
        required: true,
    },
    email:{
        type: String,
        required: true,
        unique: true
    },
    password:{
        type: String,
        required : true,
    },
    date:{
        type: Date,
        dafault : Date.now
    }
});



module.exports = mongoose.model("user", UserSchema);