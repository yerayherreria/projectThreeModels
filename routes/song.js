const express = require("express");
const router = express.Router();
const {getSong,addSong,deleteSong,putSong} = require('../controllers/song');
const {check} = require("express-validator");
const {validationFields} = require("../middlewares/validate-fields");

router
.route("/")
.get(getSong)
.post([
    check('name','Name is required').not().isEmpty(),
    check('nameArtist','Name of artist is required').not().isEmpty(),
    check('category','Category of disc is required').not().isEmpty(),
    check('duration','Duration is required').not().isEmpty(),
    check('name','Name is string').isString(),
    check('category','Category is string').isString(),
    check('nameArtist','Name of artist is string').isString(),
    check('duration','Duration is number').isInt(),
    validationFields
],addSong);

router
.route("/:id")
.delete(deleteSong)
.put(putSong);  

module.exports=router;