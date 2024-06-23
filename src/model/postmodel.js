import mongoose from "mongoose";

export const postSchema = mongoose.Schema(
  {
    title: { type: String },
    content: { type: String },
    password: { type: String },
  },
  { timestamps: true }
);

const PostModel = mongoose.model("Post", postSchema);

export default PostModel;
