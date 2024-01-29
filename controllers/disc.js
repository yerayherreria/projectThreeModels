const Disc = require("../models/disc");

const getDiscById = async (req,res)=>{
  let id = req.params.id;
  try{
    const discs = await Disc.findById(id);
    res.status(200).json(discs);

  } catch (error){
    res.status(500).json({message:error});
  } 
  
};

const getDisc = async (req,res)=>{
    try{
      const discs = await Disc.find();
      res.status(200).json(discs);
  
    } catch (error){
      res.status(500).json({message:error});
    } 
    
};

const addDisc = async (req, res) => {
    const disc = req.body;
    const newDisc = new Disc(disc);
    try{
      await newDisc.save();
      res.status(201).json(newDisc);
  
    } catch (error){
      res.status(500).json({message:error});
    }
};

const deleteDisc =async (req,res)=>{
    let id = req.params.id;
  
    if(id){
      try{
        const disc = await Disc.findByIdAndDelete(id);
        res.status(204).json(disc);
    
      } catch (error){
        res.status(500).json({message:error});
      } 
    } else {
      res.status(400).json({message:"Id no válida"});
    }
    
};

const putDisc = async (req,res)=>{
    let id = req.params.id;
    let body = req.body;
    if(id){
      try{
        const disc = await Disc.findByIdAndUpdate(id,body);
        res.status(200).json(disc);
    
      } catch (error){
        res.status(500).json({message:error});
      } 
    } else {
      res.status(400).json({message:"Id no válida"});
    }
    
};

module.exports = {getDisc,addDisc,deleteDisc,putDisc,getDiscById};