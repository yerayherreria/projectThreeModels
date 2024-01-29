const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const SongSchema = new Schema({
    name: {
        type:String,
        required:true
    },
    duration: {
        type:Number,
        required:true
    },
    category: {
        type:String,
        required:true
    },
    nameArtist: {
        type:String,
        required:true
    }
})

module.exports = mongoose.model("Song",SongSchema);