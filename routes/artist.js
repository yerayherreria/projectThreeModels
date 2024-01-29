const express = require("express");
const router = express.Router();
const {getArtist,addArtist,deleteArtist,putArtist,getArtistById} = require('../controllers/artist');
const {check} = require("express-validator");
const {validationFields} = require("../middlewares/validate-fields");
const { existsEmail } = require("../helpers/db-validators");
router
.route("/")
.get(getArtist)
.post([
    check('name','Name is required').not().isEmpty(),
    check('category','Category is required').not().isEmpty(),
    check('nameDisc','Name of disc is required').not().isEmpty(),
    check('name','Name is string').isString(),
    check('category','Category is string').isString(),
    check('nameDisc','Name of disc is string').isString(),
    //check('email').custom(existsEmail),
    validationFields
],addArtist);

router
.route("/:id")
.delete(deleteArtist)
.put([
    check('name','Name is required').not().isEmpty(),
    check('category','Category is required').not().isEmpty(),
    check('nameDisc','Name of disc is required').not().isEmpty(),
    check('name','Name is string').isString(),
    check('category','Category is string').isString(),
    check('nameDisc','Name of disc is string').isString(),
    validationFields
],putArtist) 
.get(getArtistById); 

module.exports=router;