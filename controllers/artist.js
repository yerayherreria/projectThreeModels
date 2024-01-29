const Artist = require("../models/artist");

const getArtistById = async (req,res)=>{
  let id = req.params.id;
  try{
    const artist = await Artist.findById(id);
    res.status(200).json(artist);

  } catch (error){
    res.status(500).json({message:error});
  } 
  
};

const getArtist = async (req,res)=>{
    try{
      const artist = await Artist.find();
      res.status(200).json(artist);
  
    } catch (error){
      res.status(500).json({message:error});
    } 
    
};

const addArtist = async (req, res) => {
    const artist = req.body;
    const newArtist = new Artist(artist);
    try{
      await newArtist.save();
      res.status(201).json(newArtist);
  
    } catch (error){
      res.status(500).json({message:error});
    }
};

const deleteArtist =async (req,res)=>{
    let id = req.params.id;
  
    if(id){
      try{
        const artist = await Artist.findByIdAndDelete(id);
        res.status(204).json(artist);
    
      } catch (error){
        res.status(500).json({message:error});
      } 
    } else {
      res.status(400).json({message:"Id no válida"});
    }
    
};

const putArtist = async (req,res)=>{
    let id = req.params.id;
    let body = req.body;
    if(id){
      try{
        const disc = await Artist.findByIdAndUpdate(id,body);
        res.status(200).json(disc);
    
      } catch (error){
        res.status(500).json({message:error});
      } 
    } else {
      res.status(400).json({message:"Id no válida"});
    }
    
};

module.exports = {getArtist,addArtist,deleteArtist,putArtist,getArtistById};