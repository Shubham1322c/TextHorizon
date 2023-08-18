const { default: mongoose } = require('mongoose');
const connectToMongo = require('./db.js');
const { Schema } = mongoose;

const NotesSchema = new Schema({
    title:{
        type: String,
        required: true,
    },
    description:{
        type: String,
        required: true
    },
    tags:{
        type: String,
        default: "Genral",
    },
    date:{
        type: Date,
        dafault : Date.now
    }
});



module.exports = mongoose.model("notes", NotesSchema);