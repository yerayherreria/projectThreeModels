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

module.exports={existsName,existsEmail,existsLogin};