import { Response, Request } from "express";

import { writeErrorToFile } from "../node-cron/error_write";
import { signUp } from "../services/auth.services";
import axios from "axios";
import fs from "fs";

export const signup = async (req: Request, res: Response) => {
  try {
    const { name, email, username, password, phone_no } = req.body;

    const user = await signUp(name, email, username, password, phone_no);
    axios({
      method: "get",
      url: "https://bit.ly/2mTM3nY",
      responseType: "stream",
    }).then(function (response) {
      response.data.pipe(fs.createWriteStream("ada_lovelace.jpg"));
    });

    res.status(201).json({ message: "User Signup successfully application" });
  } catch (e) {
    console.error(e);
    res.status(500).json({ message: "Internal server error" });
    writeErrorToFile(e);
  }
};
