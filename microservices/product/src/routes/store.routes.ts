import { Response,Request } from "express";
import amqp from 'amqplib/callback_api'
import VideoModel from "../Database/model/video";

export  const getvideo=async(req:Request,res:Response)=>{

  // const video = new VideoModel({ video:"asdfghj"});
  //  await video.save();

  amqp.connect('amqp://localhost',function(err,conn){
    conn.createChannel(function(err,ch){
      const queue='message_queue_user'
      ch.assertQueue(queue,{durable:false});
      console.log(`wating... result  ${queue}`)
      ch.consume(queue,async function(msg){
        // console.log("=========msg========",msg);
        console.log("=========msg========",msg.content);

        const insertBuffer = await VideoModel.insertMany({ 
          video:msg.content
        })
          // const video = new VideoModel({ video:msg.content.toString});
          // await video.save();
      //  const s=msg;
        console.log("msg",msg.content.toString);
       res.send(msg.content.toString());

      },{noAck:true})

    })
   })
   
  // res.send(" this is product micro");

}

