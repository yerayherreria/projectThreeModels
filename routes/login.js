const express = require("express");
const router = express.Router();
const {loginUser} = require('../controllers/user');
const {check} = require("express-validator");
const {validationFields} = require("../middlewares/validate-fields");
const { validateJWT } = require("../middlewares/validate-jwt");


router
.route("/login")
.post([
    check('email','Email is required').not().isEmpty(),
    check('password','Password is required').not().isEmpty(),
    check('email','Email is string').isString(),
    check('password','Password is string').isString(),
    validationFields
],loginUser);  

router
.route("/renew")
.post([
    validateJWT,
    check('email','Email is required').not().isEmpty(),
    check('password','Password is required').not().isEmpty(),
    check('email','Email is string').isString(),
    check('password','Password is string').isString(),
    validationFields
],loginUser);  

module.exports=router;