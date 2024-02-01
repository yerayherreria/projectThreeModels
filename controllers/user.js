const User = require("../models/user");
const bcryptjs = require('bcryptjs');

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
      const {name,login,email,password,role,active} = req.body;
      const salt = bcryptjs.genSaltSync();
      encryptedPassword = bcryptjs.hashSync( password, salt);
      const newUser = new User({name,login,email,password:encryptedPassword,role,active});
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
          const user = await User.findByIdAndUpdate(id,{active:true});
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
      let {name,login,email,password,role,active} = req.body;
      const salt = bcryptjs.genSaltSync();
      encryptedPassword = bcryptjs.hashSync( password, salt);
      if(id){
        try{
          const user = await User.findByIdAndUpdate(id,{name,login,email,password:encryptedPassword,role,active});
          res.status(200).json(user);
      
        } catch (error){
          res.status(500).json({message:error});
        } 
      } else {
        res.status(400).json({message:"Id no válida"});
      }
      
  };
module.exports = {addUser,deleteUser,getUser,getUserById,putUser}