import { Response,Request } from "express";

import amqp from 'amqplib/callback_api'

export  const getDetails=async(req:Request,res:Response)=>{
  const{buffer }=req.file;
  console.log(req.file);
   
       
       amqp.connect('amqp://localhost',function(err,conn){
        conn.createChannel(function(err,ch){
          const queue='message_queue_user'
          // const msg =JSON.stringify(buffer);
          ch.assertQueue(queue,{durable:false});
          ch.sendToQueue(queue,buffer);
          console.log(`sebt ${buffer} to ${queue}`)
        })
       })

  res.send(" this is users micro")

}

