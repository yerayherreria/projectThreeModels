const Disc = require("../models/disc");
const User = require("../models/user");

const existsName = async (name,{req}) => {
    const nameDb = await Disc.findOne({name});

    if(nameDb && nameDb.id==req.params.id){
        throw new Error(`Name ${name} already exists in database`);
    }
}

const existsEmail = async (name,{req}) => {
    const nameDb = await User.findOne({name});

    if(nameDb && nameDb.id==req.params.id){
        throw new Error(`Email ${name} already exists in database`);
    }
}

const existsLogin = async (name,{req}) => {
    const nameDb = await User.findOne({name});

    if(nameDb && nameDb.id==req.params.id){
        throw new Error(`Login ${name} already exists in database`);
    }
}

const checkPassword = async(password,{req}) => {
    const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    if(!regex.test(password)){
        throw new Error(`Password ${password} not valdid`);
    } 
}

const existsUserById = async (id,{req}) => {
    const idDb = await User.findOne({id});
    if(idDb){
        throw new Error(`Id ${id} not exist`);
    }
}

module.exports={existsName,existsEmail,existsLogin,checkPassword,existsUserById};