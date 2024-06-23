import mongoose from "mongoose";

export const connectDb = async () => {
  try {
    await mongoose.connect(
      process.env.MONGODB_URL || "mongodb://localhost:27017/ll"
    );
    console.log("Connected to database");
  } catch (error) {}
};

export default connectDb;
