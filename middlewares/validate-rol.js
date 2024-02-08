const { request, response } = require("express");

const hasRole = async (roles, req = request, res = response, next) => {

    const rol = req.user.role;
    console.log(rol)
    if (!roles.includes(rol)) {
        return res.status(401).json({
            msg: 'Usuario no es administrador'
        });
    }
    next();   
}

module.exports = {
    hasRole
}