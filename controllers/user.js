const User = require("../models/user");

const getUserById = async (req,res)=>{
    let id = req.params.id;
    try{
      const user = await User.findById(id);
      res.status(200).json(user);
  
    } catch (error){
      res.status(500).json({message:error});
    } 
    
  };
  
  const getUser = async (req,res)=>{
      try{
        const users = await User.find();
        res.status(200).json(users);
    
      } catch (error){
        res.status(500).json({message:error});
      } 
      
  };
  
  const addUser = async (req, res) => {
      const user = req.body;
      const newUser = new User(user);
      try{
        await newUser.save();
        res.status(201).json(newUser);
    
      } catch (error){
        res.status(500).json({message:error});
      }
  };
  
  const deleteUser =async (req,res)=>{
      let id = req.params.id;
    
      if(id){
        try{
          const user = await User.findByIdAndDelete(id);
          res.status(204).json(user);
      
        } catch (error){
          res.status(500).json({message:error});
        } 
      } else {
        res.status(400).json({message:"Id no válida"});
      }
      
  };
  
  const putUser = async (req,res)=>{
      let id = req.params.id;
      let body = req.body;
      if(id){
        try{
          const user = await User.findByIdAndUpdate(id,body);
          res.status(200).json(user);
      
        } catch (error){
          res.status(500).json({message:error});
        } 
      } else {
        res.status(400).json({message:"Id no válida"});
      }
      
  };
module.exports = {addUser,deleteUser,getUser,getUserById,putUser}