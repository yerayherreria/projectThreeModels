const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const UserSchema = new Schema({
    email: {
        type:String,
        required:true,
        unique:true
    },
    login: {
        type:String,
        required:true,
        unique:true
    },
    name: {
        type:String,
        required:true
    },
    role: {
        type:String,
        required:true
    },
    password: {
        type:String,
        required:true
    }
})

module.exports = mongoose.model("User",UserSchema);