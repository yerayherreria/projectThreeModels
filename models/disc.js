const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const DiscSchema = new Schema({
    name: {
        type:String,
        required:true,
        unique:true
    },
    numSong: {
        type:Number,
        required:true
    },
    category: {
        type:String,
        required:true
    },
    duration: {
        type:Number,
        required:true
    }
})

module.exports = mongoose.model("Disc",DiscSchema);