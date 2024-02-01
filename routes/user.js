const express = require("express");
const router = express.Router();
const {getUser,addUser,deleteUser,putUser,getUserById,loginUser} = require('../controllers/user');
const {check} = require("express-validator");
const {validationFields} = require("../middlewares/validate-fields");
const { existsName,existsLogin,existsEmail, checkPassword } = require("../helpers/db-validators");

router
.route("/")
.get(getUser)
.post([
    check('name','Name is required').not().isEmpty(),
    check('login','Login is required').not().isEmpty(),
    check('email','Email is required').not().isEmpty(),
    check('role','Role is required').not().isEmpty(),
    check('password','Password is required').not().isEmpty(),
    check('active','Active is required').not().isEmpty(),
    check('name','Name is string').isString(),
    check('login','Login is string').isString(),
    check('email','Email is string').isString(),
    check('role','Role is string').isString(),
    check('active','Active is boolean').isBoolean(),
    check('password','Password is string').isString(),
    check('password').custom(checkPassword),
    check('login').custom(existsEmail),
    check('email').custom(existsLogin),
    validationFields
],addUser);

router
.route("/:id")
.get(getUserById)
.delete(deleteUser)
.put([
    check('name','Name is required').not().isEmpty(),
    check('login','Login is required').not().isEmpty(),
    check('email','Email is required').not().isEmpty(),
    check('role','Role is required').not().isEmpty(),
    check('password','Password is required').not().isEmpty(),
    check('active','Active is required').not().isEmpty(),
    check('name','Name is string').isString(),
    check('login','Login is string').isString(),
    check('email','Email is string').isString(),
    check('role','Role is string').isString(),
    check('active','Active is boolean').isBoolean(),
    check('password','Password is string').isString(),
    check('password').custom(checkPassword),
    check('login').custom(existsEmail),
    check('email').custom(existsLogin),
    validationFields
],putUser);  



module.exports=router;