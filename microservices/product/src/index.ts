import express from 'express';
import { Response,Request } from "express";

import { connection } from './Database/mongodbconnection';
import VideoModel from './Database/model/video';
import { getvideo } from './routes/store.routes';

const app= express();
app.use(express.json());



app.get('/product',getvideo)

const port =3002;
app.listen(port,()=>{
     connection();
     VideoModel;
    console.log(`port is running in ${port}`);
})