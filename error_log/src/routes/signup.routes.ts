import { Response,Request } from "express";
import util from 'util'

import bcrypt from 'bcrypt';
import UserModel from "../Database/model/user.model";
import { writeErrorToFile } from "./error_write";


export default async (req:Request, res:Response) => {

  try{
    const {name, email ,user_id ,password ,phone_no }=req.body;

    const hashedPassword = await bcrypt.hash(password, 2);
    

    const users = new UserModel({
        name,
         email ,
         user_id ,
         password :hashedPassword,
         phone_no
    });

 console.log(users);
    await users.save();
     
    res.status(201).json({ message: 'User Signup successfully'});
    
  } catch (e) {
    console.error(e);
    res.status(500).json({ message: 'Internal server error' });
    writeErrorToFile(e);

  }
  
}


