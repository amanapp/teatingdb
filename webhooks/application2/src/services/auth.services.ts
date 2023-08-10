import UserModel from "../models/user.model";

import bcrypt from "bcrypt";

export async function signUp(
  name: string,
  email: string,
  username: string,
  password: string,
  phone_no: bigint
): Promise<any> {
  try {
    const hashedPassword = await bcrypt.hash(password, 2);

    const users = await UserModel.create({
      name: name,
      email: email,
      username: username,
      password: hashedPassword,
      phone_no: phone_no,
    });

    console.log(users);
  } catch (e) {
    console.error("error creating user :", e);
    throw new Error("hi error a gya ");
  }
}
