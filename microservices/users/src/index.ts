import express from 'express'
import { getDetails } from './routes/get.routes';
import { upload } from './middleware/multer.middleware';

const app=express();
app.use(express.json())

app.post('/user',upload.single('image'),getDetails)
const port =3000;
app.listen(port,()=>{
    console.log(`port is running in ${port}`);
})