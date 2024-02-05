const { request, response } = require("express");

const validateROL = async (req = request, res = response, next) => {

    const rol = req.body.role;
    console.log(rol)
    if (rol!='ADMIN_ROLE') {
        return res.status(401).json({
            msg: 'User not admin'
        });
    }
    next();   
}

module.exports = {
    validateROL
}