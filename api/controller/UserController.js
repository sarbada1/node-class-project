import {response} from 'express';
import User from '../models/user.js';

class UserController{
async get(req, res){
   const users=await User.find({});
   res.status(200).json({users});

}

async post(req, res){
    const data=  req.body;
    await User.create(data);
    return res.status(200).json({message:'User registered successfully'});
}

async delete(req, res){
    let id=req.params.id;
    await User.deleteOne({_id:id});
    return res.status(200).json({message: 'User deleted'});
}

async getById(req,res){
   let id= req.params.id;
   let user= await User.findOne({_id : id});
   return res.json({user});
}
}

export default UserController;