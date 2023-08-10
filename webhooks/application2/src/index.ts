import express from "express";
import signUp from "./routes/user.rotes";
import { task } from "./node-cron/delete_error";
import dotenv from "dotenv";

dotenv.config();
const app = express();
const port = process.env.PORT || 3001;
app.use(express.json());
app.use(signUp);

app.listen(port, () => {
  console.log(`port is running in ${port}`);
  
});
