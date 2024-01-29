const Song = require("../models/song");

const getSong = async (req,res)=>{
    try{
      const song = await Song.find();
      res.status(200).json(song);
  
    } catch (error){
      res.status(500).json({message:error});
    } 
    
};

const addSong = async (req, res) => {
    const song = req.body;
    const newSong = new Song(song);
    try{
      await newSong.save();
      res.status(201).json(newSong);
  
    } catch (error){
      res.status(500).json({message:error});
    }
};

const deleteSong =async (req,res)=>{
    let id = req.params.id;
  
    if(id){
      try{
        const song = await Song.findByIdAndDelete(id);
        res.status(204).json(song);
    
      } catch (error){
        res.status(500).json({message:error});
      } 
    } else {
      res.status(400).json({message:"Id no válida"});
    }
    
};

const putSong = async (req,res)=>{
    let id = req.params.id;
    let body = req.body;
    if(id){
      try{
        const song = await Song.findByIdAndUpdate(id,body);
        res.status(200).json(song);
    
      } catch (error){
        res.status(500).json({message:error});
      } 
    } else {
      res.status(400).json({message:"Id no válida"});
    }
    
};

module.exports = {getSong,addSong,deleteSong,putSong};