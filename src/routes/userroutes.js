import express from "express";
import {
  createUser,
  findAllUsers,
  findAllUsersWithView,
} from "../controllers/usercontroller.js";
const userRouter = express.Router();

userRouter.post("/create", createUser);
userRouter.get("/all", findAllUsers);
userRouter.get("/view", findAllUsersWithView);

export default userRouter;
