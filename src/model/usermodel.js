import mongoose  from "mongoose";

export const userSchema = mongoose.Schema(
  {
    name: { type: String },
    email: { type: String },
    password: { type: String },
  },
  { timestamps: true }
);

const UserModel = mongoose.model("User", userSchema);


export default UserModel;