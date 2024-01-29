const express = require("express");
const router = express.Router();
const {getDisc,addDisc,deleteDisc,putDisc,getDiscById} = require('../controllers/disc');
const {check} = require("express-validator");
const {validationFields} = require("../middlewares/validate-fields");
const { existsName } = require("../helpers/db-validators");

router
.route("/")
.get(getDisc)
.post([
    check('name','Name is required').not().isEmpty(),
    check('numSong','Number of songs is required').not().isEmpty(),
    check('category','Category of disc is required').not().isEmpty(),
    check('duration','Duration is required').not().isEmpty(),
    check('name','Name is string').isString(),
    check('category','Category is string').isString(),
    check('numSong','Number of songs is number').isInt(),
    check('duration','Duration is number').isInt(),
    check('name').custom(existsName),
    validationFields
],addDisc);

router
.route("/:id")
.get(getDiscById)
.delete(deleteDisc)
.put([
    check('name','Name is required').not().isEmpty(),
    check('numSong','Number of songs is required').not().isEmpty(),
    check('category','Category of disc is required').not().isEmpty(),
    check('duration','Duration is required').not().isEmpty(),
    check('name','Name is string').isString(),
    check('category','Category is string').isString(),
    check('numSong','Number of songs is string').isInt(),
    check('duration','Duration is string').isInt(),
    check('name').custom(existsName),
    validationFields
],putDisc);  

module.exports=router;