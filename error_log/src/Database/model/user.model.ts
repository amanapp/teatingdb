import mongoose, { Document, Schema } from 'mongoose';
interface User extends Document {
  name: string;
  email: string;
  user_id:string;
  password: string;
  phone_no:string;
  created_At:Date;
  updated_At:Date;

}

const userSchema: Schema<User> = new Schema<User>({
  name: { type: String, required: true },
  email: { type: String, required: true },
  user_id: { type: String, required: true },
  password: { type: String, required: true },
  phone_no: { type: String, required: true },
  created_At: { type: Date, default: Date.now },
  updated_At: { type: Date, default: Date.now },
  
});

const UserModel = mongoose.model<User>('User', userSchema);

export default UserModel;