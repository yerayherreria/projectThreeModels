const User = require("../models/user");
const bcryptjs = require('bcryptjs');
const jwt = require('jsonwebtoken');

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
      const {name,login,email,password} = req.body;
      const salt = bcryptjs.genSaltSync();
      encryptedPassword = bcryptjs.hashSync( password, salt);
      const newUser = new User({name:name,login:login,email:email,password:encryptedPassword,role:"USER_ROLE",active:true});
      
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
          const user = await User.findByIdAndUpdate(id,{active:false});
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

  const loginUser = async (req, res) => {
    let {email,password} = req.body;
    if(email && password){
        try{
            const user = await User.findOne({email});
            let passValid = null;
            if(user){
              console.log(user)
              passValid = bcryptjs.compareSync(password, user.password);
             
              const payload = {uid: user.id};
              const token = jwt.sign(payload,process.env.SECRET
                ,{expiresIn:'4h'});
              if(passValid){
                  res.status(200).json({
                    user,
                    token
                  });
              }else{
                  res.status(400).json({message:"Data invalid."});
              }
            }
        }catch(err){
            console.log(err);
            res.status(500).json({message:err});
        }
    }else{
        res.status(400).json({message:"User not valid"});
    }
};
module.exports = {addUser,deleteUser,getUser,getUserById,putUser,loginUser}