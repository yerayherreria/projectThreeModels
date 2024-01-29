const Disc = require("../models/disc");

const existsName = async (name,{req}) => {
    const nameDb = await Disc.findOne({name});

    if(nameDb && nameDb.id==req.params.id){
        throw new Error(`Name ${name} already exists in database`);
    }
}

module.exports={existsName};