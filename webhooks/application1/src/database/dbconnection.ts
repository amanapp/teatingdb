import mongoose from "mongoose";
import "../config/dotenv.config";
const url = process.env.DB_CONNECTION_URL;

export const connection = async () => {
  try {
    await mongoose.connect(url);
    console.log("Succesfully connected to the db");
  } catch (e) {
    console.log(e, "ERRRRRR");
  }
};
