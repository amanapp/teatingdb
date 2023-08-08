import express from 'express'
import { connection } from './Database/dbconnection';
import UserModel from './Database/model/user.model';
import signupRoutes from './routes/signup.routes';
import fs from 'fs';
import cron from 'node-cron';

const app=express();
app.use(express.json())


const task=cron.schedule('*/3 * * * * *', () => {
  const filePath = '/home/user/Videos/error_log/error.log';
  fs.unlink(filePath, (err) => {
    if (err) {
      console.error(err);
      return;
    }
    console.log(`Deleted ${filePath}`);
  });
});
// task.stop();


app.post('/signup',signupRoutes)

const port =3000;
app.listen(port,()=>{
    
    console.log(`port is running in ${port}`);

    connection();
    UserModel
})