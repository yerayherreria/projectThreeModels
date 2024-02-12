const express = require("express");
const router = express.Router();
const {getUser,addUser,deleteUser,putUser,getUserById,loginUser} = require('../controllers/user');
const {check} = require("express-validator");
const {validationFields} = require("../middlewares/validate-fields");
const {validateJWT} = require("../middlewares/validate-jwt");
const { existsLogin,existsEmail, checkPassword, existsUserById } = require("../helpers/db-validators");
const { hasRole } = require("../middlewares/validate-rol");

router
.route("/")
.get([
    validateJWT
],getUser)
.post([
    check('name','Name is required').not().isEmpty(),
    check('login','Login is required').not().isEmpty(),
    check('email','Email is required').not().isEmpty(),
    check('password','Password is required').not().isEmpty(),
    check('name','Name is string').isString(),
    check('login','Login is string').isString(),
    check('email','Email is string').isString(),
    check('password','Password is string').isString(),
    check('password').custom(checkPassword),
    check('login').custom(existsEmail),
    check('email').custom(existsLogin),
    validationFields
],addUser);

router
.route("/:id")
.get(getUserById)
.delete([
    validateJWT,
    hasRole('ADMIN_ROLE'),
    check('id','Id not valid').isMongoId(),
    check('id').custom(existsUserById),
    validationFields
],deleteUser)
.put([
    check('name','Name is required').not().isEmpty(),
    check('login','Login is required').not().isEmpty(),
    check('email','Email is required').not().isEmpty(),
    check('password','Password is required').not().isEmpty(),
    check('name','Name is string').isString(),
    check('login','Login is string').isString(),
    check('email','Email is string').isString(),
    check('password','Password is string').isString(),
    check('password').custom(checkPassword),
    check('login').custom(existsEmail),
    check('email').custom(existsLogin),
    validationFields
],putUser);  



module.exports=router;