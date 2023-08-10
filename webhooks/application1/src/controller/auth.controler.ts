import { Response, Request } from "express";


import { writeErrorToFile } from "../node-cron/error_write";
import { signUp } from "../services/auth.services";


export const signup = async (req: Request, res: Response) => {
  try {
    const { name, email, username, password, phone_no } = req.body;

    const user = await signUp(name, email, username, password, phone_no);

    
    res.status(201).json({ message: "User Signup successfully application 1" });
  } catch (e) {
    console.error(e);
    res.status(500).json({ message: "Internal server error" });
    writeErrorToFile(e);
  }
};
