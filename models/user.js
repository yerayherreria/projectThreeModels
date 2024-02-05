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
        required:true,
        emun: ['ADMIN_ROLE','USER_ROLE']
    },
    password: {
        type:String,
        required:true
    },
    active: {
        type:Boolean,
        required:true
    }
})

UserSchema.methods.toJSON = function(){
    const { __v, password,_id,...user } = this.toObject();
    user.uid = _id;
    return user;
}
module.exports = mongoose.model("User",UserSchema);